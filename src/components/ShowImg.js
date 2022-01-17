const ShowImg = (folder, fileName, format, className, alt) => {
  return (
    <img
      className={className}
      src={require(`../img/${folder}/${fileName}.${format}`)}
      alt={alt}
    />
  );
};

export default ShowImg;
