import React from "react";

const ImageCard = () => {
    return (
        <div className="image-container">
            <div className="image-box">
                <img src="/image/chris.png" alt="Chris Ebube Roland" width={500}  />
            </div>

            <div className="image-box-stroke"></div>
        </div>
    );
};

export default ImageCard;
