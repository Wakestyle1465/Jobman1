import React from "react";
import JobListItem from "./joblistitem";


import '../css/home.css'

//The job list page

const JobsList = ({jobs}) => {

    return (
        
        <div>
            <h1 id = 'title'>Jobs Available</h1>
            {jobs.map(j => (<JobListItem job = {j} key ={j.id} ></JobListItem>))}
            <br/>
        </div>
    )
}

export default JobsList