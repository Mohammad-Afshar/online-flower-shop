import styles from "./index.module.css";

import { Card } from "antd";
const { Meta } = Card;

export function Cart(props) {
  return (
    <Card
      hoverable
      style={{
        width: 240,
        marginBottom: "20px",
        fontFamily: "yekan",
      }}
      cover={<img src={props.src} />}
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  );
}
