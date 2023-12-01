import React from "react";
import "../components/Spinner.css";

function Spinner()
{
    return(
        <div className="flex justify-center items-center h-[100vh] w-full">
            <div className="spinner h-full"></div>
        </div>
    )
}

export default Spinner;