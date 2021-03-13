import React from 'react'
import AppName from './AppName'

function Topbar() {
    const topbar = {padding: "2%",
                    overflow: "auto"}
    const appname = {float: "left",
                    "font-family": "'Shrikhand', cursive",
                    "color": "#fff",
                    "font-size": "48px"}
    const login = {position: "absolute",
                   right: "2%"}
    return (
        <div className = "container-fluid" style={topbar}>
            <div style = {appname}>BlueSky </div>
            {/* <div style = {login}>Login</div> */}
        </div>
    )
}

export default Topbar
