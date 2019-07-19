import React from "react";
import "./imageGroup.css";
import ImageHolder from "./ImageHolder";

const ImageGroup = props => {
  const imgs = props.foundImages.map(img => {
    return <ImageHolder key={img.id} image={img} />;
  });

  return <div className="imageList">{imgs}</div>;
};

export default ImageGroup;
