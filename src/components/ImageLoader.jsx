const ImageLoader = ({
  img,
  blurImg,
  currentIndex,
  imageLoaded,
  handleImageLoad,
  title,
}) => (
  <div className="relative" style={{ paddingBottom: "56.50%" }}>
    {blurImg.map((blurImage, index) => (
      <img
        key={`blur-${index}`}
        src={blurImage}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          filter: "blur(10px)",
          opacity: currentIndex === index && !imageLoaded[index] ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    ))}
    {img.map((image, index) => (
      <img
        key={`img-${index}`}
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-contain"
        style={{
          opacity: currentIndex === index && imageLoaded[index] ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        onLoad={() => handleImageLoad(index)}
      />
    ))}
  </div>
);

export default ImageLoader;
