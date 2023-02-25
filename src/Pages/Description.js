import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../Layout";

import {
  BsDropletFill,
  BsFillSunFill,
  BsSuitHeartFill,
  BsFillBugFill,
} from "react-icons/bs";
import styles from "./deskription.module.css";
import { useState } from "react";
import { notification } from "antd";

const openNotificationAdd = (success) => {
  notification.config({
    duration: 2,
    rtl: true,
  });
  notification[success]({
    message: "گل مورد نظر شما به سبد خرید اضافه شد",
  });
};
const openNotificationRemove = (warning) => {
  notification.config({
    duration: 2,
    rtl: true,
  });
  notification[warning]({
    message: "گل مورد نظر شما از سبد خرید حذف شد",
  });
};
export function Description() {
  const productState = useSelector((state) => state.products.result);
  const dispatch = useDispatch();
  const [showText, setShowText] = useState(false);

  function handlerBtnAdd(product) {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setShowText(!showText);
    openNotificationAdd("success");
  }
  function handlerBtnRemove(product) {
    dispatch({ type: "REMOVE_IN_CART", payload: product });
    setShowText(!showText);

    openNotificationRemove("warning");
  }

  return (
    <Layout>
      <div className={styles.parent}>
        <div className={styles.name}>
          <h2>{productState.name}</h2>
          <p>{productState.description}</p>
          <span>
            {productState.price}
            <span>تومان</span>
          </span>

          {showText && (
            <button
              onClick={() => handlerBtnRemove(productState)}
              style={{ display: showText == true ? "block" : "none",backgroundColor:'#cf1322' }}
            >
              پاک کردن از سبد خرید
            </button>
          )}
          <button
            style={{ display: showText == false ? "block" : "none" }}
            onClick={() => handlerBtnAdd(productState)}
          >
            افزودن به سبد خرید
          </button>
        </div>

        <div className={styles.image}>
          <img src={productState.image} />
        </div>

        {/* outher */}

        <div className={styles.other}>
          <div className={styles.item}>
            <div className={styles.caption}>توضیحات و نگهداری</div>
            <div className={styles.items}>
              <p>
                <span>
                  <BsDropletFill />
                </span>
                آبیاری
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </p>
            </div>

            <div className={styles.items}>
              <p>
                <span>
                  <BsFillSunFill />
                </span>
                نور
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </p>
            </div>

            <div className={styles.items}>
              <p>
                <span>
                  <BsSuitHeartFill />
                </span>
                مزایا
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </p>
            </div>

            <div className={styles.items}>
              <p>
                <span>
                  <BsFillBugFill />
                </span>
                حیوان دوست
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
