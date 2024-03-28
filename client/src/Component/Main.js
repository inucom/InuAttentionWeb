import React from "react";
import Login from "./user/Login";
import {useSelector} from "react-redux";
import Update from "./Management/Update";

function Main() {
    const user = useSelector((state) => state.user);
    if (!user.accessToken) {
        return (
            <div>
                <Login/>
            </div>
        );
    }
    return (
        <div>
            <Update/>
        </div>
    );
}

export default Main;
