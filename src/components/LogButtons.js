import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";

const LogButtons = ({text, to}) => {
    return (
        <button>
            <Link to={to}>{text}</Link>
        </button>
    )
}

export default LogButtons 