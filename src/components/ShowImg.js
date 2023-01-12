import React from "react";

const ShowImg = (folder, fileName, format, className, alt, index) => {
  return (
    <img
      key={index}
      className={className}
      src={require(`../img/${folder}/${fileName}.${format}`)}
      alt={alt}
    />
  );
};

export default ShowImg;
