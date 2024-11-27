import React, { useEffect, useState } from "react";
import "./SencondLayout.css";
export const SecondLayout = () => {
  const [accpeted, setAccepted] = useState({
    date: "00",
    celebrations: [{ title: "načítá se", colour: "načítá se" }],
  });
  async function getData(myUrl) {
    const url = myUrl;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setAccepted(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getData("http://calapi.inadiutorium.cz/api/v0/cs/calendars/default/today");
  }, []);
  return (
    <div className="SencondLayout">
      <h3>Liturgický svátek</h3>
      <div
        className="CelebrationCard"
        style={{ backgroundColor: accpeted.celebrations[0].colour }}
      >
        <p>{accpeted.date} </p>
        <p>{accpeted.celebrations[0].title} </p>
        <p>{accpeted.celebrations[0].colour} </p>
      </div>
      <div>
        <input type="date" id="iDate" defaultValue={"2024-12-24"} />
        <button
          className="btn"
          onClick={() => {
            getData(
              "http://calapi.inadiutorium.cz/api/v0/cs/calendars/default/" +
                document.getElementById("iDate").value.replaceAll("-", "/")
            );
          }}
        >
          Zjistit
        </button>
      </div>
    </div>
  );
};
// http://calapi.inadiutorium.cz/api/v0/cs/calendars/default/
