import styles from "./index.module.css";
import { Image } from "antd";
import { Divider } from 'antd';

import image1 from "./assets/s1.jpeg";
import image2 from "./assets/s2.jpeg";
import image3 from "./assets/s3.jpeg";
import image4 from "./assets/s4.jpeg";
import image5 from "./assets/b1.jpeg";
import image6 from "./assets/b2.jpeg";
import image7 from "./assets/b3.jpeg";
import image8 from "./assets/b4.jpeg";
import gol from "./assets/gol.JPG";
import box from "./assets/box.JPG";

export function Gallery() {
  return (
    <>
      <div className={styles.parent}>
        <Image.PreviewGroup>
          <Image
            className={styles.image}
            width={150}
            height={200}
            src={image1}
          />
          <Image
            className={styles.image}
            width={150}
            height={200}
            src={image2}
          />
          <Image
            className={styles.image}
            width={150}
            height={200}
            src={image3}
          />
          <Image
            className={styles.image}
            width={150}
            height={200}
            src={image4}
          />
          <Image
            preview={false}
            width={150}
            height={200}
            src={gol}
          />
        </Image.PreviewGroup>

      </div>

      <div className={styles.parent}>
        <Image.PreviewGroup>
        <Image
            preview={false}
            width={150}
            height={200}
            src={box}
          />
          <Image
            className={styles.image}
            width={150}
            height={200}
            src={image5}
          />
          <Image
            className={styles.image}
            width={150}
            height={200}
            src={image6}
          />
          <Image
            className={styles.image}
            width={150}
            height={200}
            src={image7}
          />
          <Image
            className={styles.image}
            width={150}
            height={200}
            src={image8}
          />
         
        </Image.PreviewGroup>
      </div>
    </>
  );
}
