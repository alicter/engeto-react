import { React } from "react";
import "./BookFolder.css";

export default function BookFolder(props) {
  return <div className="folder">{props.book}</div>;
}
