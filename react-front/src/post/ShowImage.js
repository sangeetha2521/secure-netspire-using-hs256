import React from "react";


const ShowImage = ({ item, url }) => (
    <div className="product-img">
        <img
            src={`${process.env.REACT_APP_API_URL}/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-5"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default ShowImage;
