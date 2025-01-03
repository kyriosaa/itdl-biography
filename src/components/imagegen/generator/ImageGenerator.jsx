import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../assets/lynicon.png";

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    setLoading(true);
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: process.env.REACT_APP_DALLE_API_KEY,
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );
    let data = await response.json();
    let data_array = data.data;
    setImage_url(data_array[0].url);
    setLoading(false);
  };

  return (
    <div className="ai-image-generator">
      <div className="imggen-header">
        <div className="img-loading">
          <div className="image">
            <img src={image_url === "/" ? default_image : image_url} alt="" />
          </div>
          <div className="loading">
            <div className={loading ? "loading-bar-full" : "loading-bar"}></div>

            {/* I was gonna add a "Loading..." text but decided not to 
              so I commented it out */}
            {/* <div className={loading ? "loading-text" : "display-none"}>
              Loading...
            </div> */}
          </div>
        </div>
        <div className="search-box">
          <input
            type="text"
            ref={inputRef}
            className="search-input"
            placeholder="Describe what you want to see"
          />
          <button
            className="generate-btn"
            onClick={() => {
              imageGenerator();
            }}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
