import {
  RiInstagramFill,
  RiTwitterFill,
  RiFacebookFill,
  RiLinkedinFill,
} from "react-icons/ri";

import rezi from "./assets/rezi.png";
import kasbokar from "./assets/kasbokar.png";
import enamad from "./assets/enamad.png";
import logo from "./assets/logo.png";

import styles from "./index.module.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className={styles.parent}>
     
      <img src={logo}/>
      <p>
        یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
        باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود
        برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی
        ما سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود
        را داشته باشد
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
      </p>

      <div className={styles.serti}>
        <img src={rezi} />
        <img src={kasbokar} />
        <img src={enamad} />
      </div>
      <div className={styles.menu}>
        <Link to="/">خانه </Link>
        <Link to="/blog">بلاگ </Link>
        <span>|</span>
        <Link to="/">ورود </Link>
        <Link to="/">ثبت نام </Link>
      </div>

      <div className={styles.icon}>
        <RiInstagramFill title="Instagram" />
        <RiFacebookFill title="Facebook" />
        <RiTwitterFill title="Twitter" />
        <RiLinkedinFill title="Linkedin" />
      </div>
      <p> کلیه حقوق برای <img src={logo}/> محفوظ است </p>
    </div>
  );
}
