import { React } from "react";
import "./WelcomeStatic.css";
import data from "../data.json";
import second from "../images/static.JPG";
function WelcomeStatic() {
  let randomNum = Math.floor(Math.random() * data.length);
  const randomText = data.filter((item) => item.index === randomNum);
  return (
    <div className="wlc">
      <img alt="Favorite Books" src={second} className="imgStatic" />
      <h1>ČTENÁŘSKÝ DENÍK</h1>
      <p>{randomText.map((item) => item.text)}</p>
    </div>
  );
}
export default WelcomeStatic;
