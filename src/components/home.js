import React from "react";
import { Link } from "react-router-dom";

import { Card } from "reactstrap";
import '../css/home.css'

//Home page


const Home = () => {
 
    return(
        <div id = 'home'>
            <Card>
                <div>
                    <h1>Job Man</h1>
                    <p>Welcome to Job Man, your premier staffing website. Whether you are searching for a job, or creating a listing, we have made it easy for you. Finding work is hard and we know that, that is why we have made it easy. Click below to find jobs new you. </p>
                    <Link to = '/jobs'><button id= 'btn'>See Jobs Available</button></Link>
                    <br/>
                    <span>or</span> 
                    <br/>
                    <Link to = '/create'><button id= 'btn'> Create Job Listing</button></Link>
                </div>
            </Card>            
        </div>
    )
}

export default Home