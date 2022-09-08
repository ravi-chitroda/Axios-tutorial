import axios from "axios";
import React, { useEffect } from "react";
const url = "https://course-api.com/react-store-products";
// error will be generated if network error or there will be issue to open link
//1) import axios, ==>> we provide the url ==>> it returns the promise(await) ==>> invoke that function in useEffect ==>> if it successful then get back data ==>> if not success then throw us an error

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      console.log("response", response);
      const data = response.data;
      console.log("data", data);
    } catch (error) {
      console.log("error", error.response);
    }
  };

  useEffect(() => {
    // console.log("First Axios Request");
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="text-center">First Request</h2>
    </div>
  );
};

export default FirstRequest;
