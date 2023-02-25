import styles from "./index.module.css";

import image1 from "./assets/p1.png";
import image3 from "./assets/p3.png";
import image5 from "./assets/p5.png";
import image6 from "./assets/p6.jpg";

export function Advertise() {
  return (
    <div className={styles.parent}>
      <div>
        <img src={image3} />
        <p>گل تولد</p>
      </div>
      <div>
        <img src={image1} />
        <p>رز جاودان</p>
      </div>

      <div>
        <img src={image6} />
        <p>دسته گل</p>
      </div>
      <div>
        <img src={image5} />
        <p>ارسال هدیه به ایران</p>
      </div>
    </div>
  );
}
