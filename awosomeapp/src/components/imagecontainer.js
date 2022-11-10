import React, { useEffect, useState } from "react";
import "./imagecontainer.css";
import Button from "./button";
const Imagecontainer = () => {
  // =============Use Efect is used to when page is relode it automtically call=========

  useEffect(() => {
    const fetchRandominage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setrandomimage(data.message);
    };
    fetchRandominage();
  }, []);

  const [randomimage, setrandomimage] = useState();
  const [isloding, issetloding] = useState(false);
  //   ++++++++this is used to fetch images +++++++++++

  const fetchImagehandler = async () => {
    issetloding(true);
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setrandomimage(data.message);
    issetloding(false);
  };
  return (
    <>
      {isloding && (
        <h1>
          {" "}
          loding..
          <div class="loadingio-spinner-spinner-crftu50i6h">
            <div class="ldio-z44905iuv5">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </h1>
      )}
      {!isloding && (
        <h2>
          <img src={randomimage} alt="" />
        </h2>
      )}
      <Button title="Fetch a random image" onclick={fetchImagehandler} />
    </>
  );
};

export default Imagecontainer;
