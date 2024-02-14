import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GenerateUrl() {
  const [url, setUrl] = useState([]);
  const [redirectUrl, setRedirectUrl] = useState("");

  const generateNew = async () => {
    try {
      const data = { url };

      const response = await axios.post(
        "http://localhost:8000/api/generate",
        data
      );

      console.log("Response:", response.data);
      setRedirectUrl(response.data.id);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div>
        Your Url Please :{" "}
        <input onChange={(e) => setUrl(e.target.value)} type="text"></input>
      </div>
      <div>
        <button onClick={generateNew}>CLICK HERE TO GENERATE</button>
      </div>
      <div>
        {redirectUrl ?<div> <button
          onClick={() =>
            window.open(`http://localhost:8000/${redirectUrl}`, "_blank")
          }
        >
          CLICK HERE FOR YOUR LINK
        </button>
        &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;
        <code>{`http://localhost:8000/${redirectUrl}`}</code> </div>: <code>Generate a link to see it.</code> }
        
      </div>
      <div>
        Click here to get <Link to="/"><button>ALL YOUR URLS</button></Link>
      </div>
    </div>
  );
}

export default GenerateUrl;
