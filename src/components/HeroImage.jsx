import hero from "../images/hero.png";
import heroBlur from "../images/reduced/hero.jpg";
const HeroImage = ({ imageLoaded, setImageLoaded }) => (
  <>
    <img
      className={`w-full h-screen object-cover object-center ${
        imageLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
      src={heroBlur}
      alt="Image"
      style={{ filter: "blur(20px)" }}
    />
    <img
      className={`w-full h-screen object-cover object-center absolute top-0 left-0 ${
        imageLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
      src={hero}
      alt="Image"
      onLoad={() => setImageLoaded(true)}
      style={{ filter: "blur(0px)" }}
    />
  </>
);

export default HeroImage;
