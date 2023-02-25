import { Layout } from "../Layout";
import * as data from "../data";
import { useDispatch, useSelector } from "react-redux";

import { notification } from "antd";

import styles from "./homePage.module.css";
import { continuShopping } from "../utils/continuShopping";
import { Link } from "react-router-dom";
import { Slider } from "../components/Slider";
import { Advertise } from "../components/Advertise/indx";
import { Gallery } from "../components/Gallery";
import { SignIn } from "./SignIn";


const openNotificationWithIcon = (type) => {
  notification.config({
    duration: 2,
    rtl: true,
  });
  notification[type]({
    message: "گل مورد نظر شما به سبد خرید اضافه شد",
  });
};

export function HomePage() {
  const productState = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  function handlerBtnAdd(product) {
    dispatch({ type: "ADD_TO_CART", payload: product });
    openNotificationWithIcon("success");
  }

  function handleritem(product) {
    dispatch({ type: "RES", payload: product });
  }

  return (
    <Layout>
      <Slider />
      <Advertise />
      <main>
        <section className={styles.products}>
          {data.products.map((product) => {
            return (
              <section key={product.id} className={styles.product}>
                <div className={styles.header}>
                  <Link onClick={() => handleritem(product)} to="/description">
                    <img
                      src={product.image}
                      title="برای جزییات بیشتر کلیک کنید"
                    ></img>
                  </Link>
                </div>
                <div className={styles.main}>
                  <span>{product.name}</span>
                </div>
                <div className={styles.footer}>
                  <div className={styles.add}>
                    <button
                      style={{
                        display: continuShopping(productState, product)
                          ? "none"
                          : "block",
                      }}
                      onClick={() => handlerBtnAdd(product)}
                    >
                      خرید
                    </button>
                    <Link
                      style={{
                        display: continuShopping(productState, product)
                          ? "block"
                          : "none",
                         
                      }}
                      to="/products"
                    >
                      {" "}
                      ادامه سفارش
                    </Link>
                  </div>
                  <div className={styles.price}>
                    <span> تومان </span>
                    <span>{product.price}</span>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </main>
      <Gallery />
    </Layout>
  );
}
