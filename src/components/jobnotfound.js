import React from "react";
import { Link } from "react-router-dom";

//Job not found from the search bar

const JobNotFound = () =>{

    return(
        <div>
            <h2>Job not Found</h2>
            <p>Job search must exactly match the listing name.</p>
            <p>Check out the jobs we have available <Link to = '/jobs'>here</Link>.</p>
        </div>
    )
}

export default JobNotFound