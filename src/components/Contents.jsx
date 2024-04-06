import React from "react";
import avatar from "../assets/images/image-avatar.webp"
function Contents() {
    return(
        <div className="contents-container">
            <h2>HTML & CSS Foundations</h2>
            <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <img src={avatar} alt="avatar image"/><span>Greg Hooper</span>
        </div>
    )
}
export default Contents;