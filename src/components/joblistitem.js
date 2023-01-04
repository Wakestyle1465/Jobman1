import React from "react";
import { Link } from "react-router-dom";

import '../css/joblistitem.css'
import { Card } from "reactstrap";

//The cards that display the job on the job list

const JobListItem = ({job}) => {
let URL = `/jobs/${job.id}`

    return(
        <div className = 'item'>
             <Card >
                <div id = 'jobcard'>
                    <h5 id ='jobname'>
                        <Link id ='link' to = {URL} >{job.job_name}</Link>
                    </h5> 
                    <p id = 'compname'>
                        <i>{job.company_name}</i>
                    </p>         
                    <p>
                        <i>{job.location}</i>
                    </p>
                 </div>        
            </Card>     
        </div>
    )

}

export default JobListItem

