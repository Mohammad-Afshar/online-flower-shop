import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slider1 from "./assets/slider-1.jpg";
import slider2 from "./assets/slider-2.jpg";
import slider3 from "./assets/slider-3.jpg";
import slider4 from "./assets/slider-4.jpg";

const divStyle = {
  backgroundSize: "cover",

  height: "300px",
};
const slideImages = [
  {
    url: slider1,
  },
  {
    url: slider2,
  },
  {
    url: slider3,
  },
  {
    url: slider4,
  },
];
export function Slider() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
