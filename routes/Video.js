const { YoutubeDataAPI } = require("youtube-v3-api");
var schedule = require('node-schedule');

const Videos = require('../schema/video');
const Response = require('../types/Response');
// const { API_KEY } = require("../credentials");

class Video {
    constructor(app) {
        app.get('/video', async (req, res) => {
            const response = await this.getAllVideos();
            return res.status(response.status).send(response);
        });

        app.get('/video/:team', async (req, res) => {
            const response = await this.getTeamVideos(req.params.team);
            return res.status(response.status).send(response);
        });

        this.searchYoutube();
        schedule.scheduleJob('0 * * * *', () => {
            this.searchYoutube()
        });
    }

    searchYoutube = () => {
        let q = "full game highlights";
        const api = new YoutubeDataAPI(process.env.API_KEY);
        let videos = [];
 
        api.searchAll(q, 50, {
            channelId: 'UCWJ2lWNubArHWmf3FIHbfcQ',
            order: 'date'
        }).then((data) => {
            data.items.forEach(item => {
                const title = item.snippet.title;
                if (title.includes("FULL GAME HIGHLIGHTS")){
                    const dateIndex = title.search("(?<=\| )[^\|]*$");
                    const date = new Date(title.slice(dateIndex))
                    videos.push({"title": item.snippet.title, "videoId": item.id.videoId, "date": date});
                }
            });
            console.log("Searching...");
            videos.forEach(async item => {
                await Videos.updateOne({"videoId": item.videoId}, item, {upsert: true});
            });
            console.log("Done!");
        },(err) => {
            console.error(err);
        })
    }

    getAllVideos = async () => {
        const videos = await Videos.find({}).sort({date: -1});
        return new Response(videos.slice(0,10), '', 200);
    }
    
    getTeamVideos = async (teamName) => {
        const videos = await Videos.find({}).sort({date: -1});
        const ret = [];
        videos.map((video) => {
            // if (video.title.includes(`/\b${teamName.toUpperCase()}\b/gi`)) {
            if (video.title.includes(teamName.toUpperCase())) {
                ret.push(video);
            }
        });
        return new Response(ret.slice(0,10), '', 200);
    }
}

module.exports = Video;