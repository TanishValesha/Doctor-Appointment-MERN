import { baseURL } from "../utils/constants";
import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  const getCurrentUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await axios.get(`${baseURL}/api/user/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getCurrentUserData();
  }, []);
  return <div>Home</div>;
};

export default Home;
