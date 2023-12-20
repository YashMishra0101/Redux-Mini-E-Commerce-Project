import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import Cards from "../pages/home/Cards";

const ApiFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center mb-5">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap justify-center items-center my-7">
          {data.map((info) => (
            <Cards key={info.id} info={info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiFetch;
