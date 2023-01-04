import React from "react";
import { Link } from "react-router-dom";

import '../css/err.css'

//If there is no corresponding route, this is displayed

const ErrLink = () => {
    return (
        <div>
            <p>Hmmm. I can't seem to find what you want.</p>
            <Link to = '/' >Back to Home</Link>
        </div>
    )
}
export default ErrLink