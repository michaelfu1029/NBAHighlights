const Users = require('../schema/user');
const Response = require('../types/Response')

class User {
    constructor(app) {
        app.get('/user/:userId', async (req, res) => {
            const response = await this.getUsername(req.params.userId);
            return res.status(response.status).send(response);
        });

        app.post('/user', async (req, res) => {
            const { credentials } = req.body;
            const response = await this.createUser(credentials);
            return res.status(response.status).send(response);
        });

        app.post('/user/login', async (req, res) => {
            const { credentials } = req.body;
            const response = await this.checkLogin(credentials);
            return res.status(response.status).send(response);
        });
    }

    checkEmpty = (credentials) => {
        let emptyField = {
            username: false,
            password: false
        }
        if (!credentials.username) {
            emptyField.username = true
        }
        if (!credentials.password) {
            emptyField.password = true
        }
        return new Response(emptyField, 'Empty Field', 400);
    }

    createUser = async (credentials) => {
        if (!credentials || !credentials.username || !credentials.password) {
            return this.checkEmpty(credentials);
        }
        try {
            const user = await Users.create(credentials);
            return new Response(user._id, '', 200);
          } catch (e) {
            return new Response(null, 'Malformed credentials or user already exists', 400);
        }
    }

    checkLogin = async (credentials) => {
        if (!credentials || !credentials.username || !credentials.password) {
            return this.checkEmpty(credentials);
        }
        try {
            const user = await Users.findOne({username: credentials.username});
            console.log(user);
            if (user.password === credentials.password) {
                return new Response(user._id, '', 200);
            } else {
                return new Response(null, 'Incorrect Password', 400);
            }
            
          } catch (e) {
            return new Response(null, 'User does not exist', 400);
        }        
    }

    getUsername = async (userId) => {
        try {
            const response = await Users.findById(userId);
            return new Response(response.username, 'Empty Field', 200);
        } catch {
            return new Response(null, 'Wrong', 400);
        }
        
    }
    
}

module.exports = User;