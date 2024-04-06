import React from "react";
import headerImage from "../assets/images/illustration-article.svg"

function Header() {
    const currentDate = new Date();

    // Format the date as "DD Month YYYY"
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    return(
        <div className="header-container">
            <img src={headerImage} alt="card image" className="header-image"/>
            <a href="https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS" target="_blank">
                <button className="header-button">
                    Learning
                </button>
            </a>
            <p>Published {formattedDate}</p>
        </div>
    )
}
export default Header;