import React, { Component } from 'react';
import './Login.css';
import Video from "./Video";
import axios from 'axios';
import {ip_address, teamList} from './Constants';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useHistory } from "react-router-dom";

// const Teams = () => {
//     const history = useHistory();

//     return (
//       <div>
//         { teamList.map((item) => 
//           <button onClick={ () => { console.log('pressed'); history.push(`/${item}`)}}>{ item }</button>
//         )}
//       </div>
//     )
// }

class Sidebar extends Component {
    render() {
        return (
            <div>
                <Link to={'/Home'}>Home</Link>
                {teamList.map((item) => 
                    <div>
                        <Link style={{ textDecoration: 'none' }} to={`/Teams/${item}`}>{item}</Link>
                    </div>
                )}

            </div>
            
        );
    }
}

export default Sidebar;
