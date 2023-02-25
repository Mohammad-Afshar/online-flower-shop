import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../Layout";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillDelete,
} from "react-icons/ai";
import styles from "./products.module.css";
import error from "./assets/error.png";
import { Link } from "react-router-dom";

export function Products() {
  const productState = useSelector((state) => state.products.cart);
  const totalState = useSelector((state) => state.products.total);
  const dispatch = useDispatch();

  function handlerAdd(item) {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }

  function handlerRemove(item) {
    dispatch({ type: "REMOVE_IN_CART", payload: item });
  }
  function handlerDelete(item) {
    dispatch({ type: "DELETE", payload: item });
  }

  return (
    <Layout>
      <div id="products" className={styles.root}>
        {productState.length ? (
          <div className={styles.summery}>
            <div className={styles.buy}>
              <p>
                <p>تومان</p>
                {totalState}
              </p>
              <p>: مجموع خرید</p>
            </div>
            <div className={styles.buy}>
              <p>
                <p>تومان</p>0
              </p>
              <p>: تخفیف</p>
            </div>
            <div
              style={{ color: "#059669", fontWeight: "bold" }}
              className={styles.buy}
            >
              <p>
                <p>تومان</p>
                {totalState}
              </p>
              <p>: قابل پرداخت</p>
            </div>
            <button>
              <Link to="/signin">پرداخت</Link>
            </button>
          </div>
        ) : (
          " "
        )}
        <div className={styles.parent}>
          {productState.length ? (
            productState.map((item) => (
   
              <div className={styles.query} key={item.id}>
                <div className={styles.action}>
                  <AiFillDelete title="پاک کردن" onClick={() => handlerDelete(item)} />
                  <div>
                    <AiOutlineMinusCircle
                      title="کم کردن"
                      onClick={() => handlerRemove(item)}
                     
                    />
                
                    <span>{item.quantity}</span>
                    <AiOutlinePlusCircle
                      title="اضافه کردن"
                      onClick={() => handlerAdd(item)}
                    />
                  </div>
                </div>

                <div className={styles.items}>
                  <div className={styles.details}>
                    <p>{item.name}</p>
                    <p>
                      <span>تومان</span>
                      {item.price * item.quantity}
                    </p>
                  </div>
                  <img src={item.image} />
                </div>
              </div>
          
            ))
          ) : (
            <div className={styles.error}>
              <img src={error} />
              <h4>هیچ محصولی در سبد خرید شما وجود ندارد</h4>
              <h6>
                هر زمان که محصولی را به سبد خرید خود اضاف کردید در این صفحه به
                شما نمایش داده خواهد شد
              </h6>
              <button>
                <Link to="/">خانه</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
