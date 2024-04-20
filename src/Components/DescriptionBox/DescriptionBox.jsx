import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, odio quibusdam! Natus, saepe? Id molestiae, quos molestias tempore quam consequatur nemo ab eum optio totam, distinctio earum adipisci esse eius!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus voluptatibus minima in, rem non sequi itaque. Ipsum laboriosam unde harum adipisci voluptate inventore quaerat distinctio, at explicabo, suscipit sit?</p>

            </div>
        </div>
    )
}

export default DescriptionBox