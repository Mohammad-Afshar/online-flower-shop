import { Link } from "react-router-dom";
import { BsSuitSpade, BsPersonFill, BsFillBasket2Fill } from "react-icons/bs";

import { useSelector } from "react-redux";

import logo from "./assets/logo.png";

import styles from "./index.module.css";


export function Navigation() {
  const productState = useSelector((state) => state.products.cart);
  return (
    <div className={styles.parent}>
      <div className={styles.right}>
        <ul>
          <li className={styles.add}>
            <Link to="/products">
              <span>
                <BsFillBasket2Fill title="سبد خرید" />
              </span>
              <span>{productState.length ? productState.length : 0}</span>
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <h3>
                <BsPersonFill title="ورود/ثبت نام" />
              </h3>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.left}>
        <ul>
          <li>
            <Link to="/blog">بلاگ</Link>
          </li>

          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/">
              {/* <h1>
                <BsSuitSpade />
              </h1> */}
              <img src={logo}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
