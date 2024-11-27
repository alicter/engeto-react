import { React } from "react";
import "./ItemStatic.css";
export default function ItemStatic(props) {
  return (
    <div className="itemStatic">
      <img
        className="imagesStatic"
        alt={props.img}
        src={require("../images/" + props.img + ".JPG")}
      />
      <h2>{props.book}</h2>
      <h3>{props.author}</h3>
      <h4>{props.note}</h4>
    </div>
  );
}
