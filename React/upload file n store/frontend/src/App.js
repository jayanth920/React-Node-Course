import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImage1Change = (event) => {
    setImage1(event.target.files[0]);
  };

  const handleImage2Change = (event) => {
    setImage2(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log the selected file
    console.log("Image 1:", image1);
    console.log("Image 2:", image2);

    const formData = new FormData();
    formData.append("image1", image1);
    formData.append("image2", image2);

    
    const response = await axios.post("http://localhost:8000/upload", formData);
    console.log(response.data);
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image1">Upload Image:</label>
        <input
          type="file"
          id="image1"
          name="image1"
          accept="image/*"
          onChange={handleImage1Change}
        />
      </div>
      <div>
        <label htmlFor="image2">Upload Image:</label>
        <input
          type="file"
          name="image2"
          id="image2"
          accept="image/*"
          onChange={handleImage2Change}
        />
      </div>
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default App;
