import { React } from "react";
import "./BookmarkBtn.css";

export default function BookmarkBtn(props) {
  return (
    <button className="bookmarkBtn" onClick={props.cvak}>
      {props.book}
    </button>
  );
}
