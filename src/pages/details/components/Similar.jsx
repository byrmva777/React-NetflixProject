import React, { useState, useEffect } from "react";
import { useStore } from "zustand";
import themeStore from "../../common/Store";
import Card from "../../common/Card";
import ScrollableContainer from "../../common/ScrollButton";

const Similiar = ({ id, type }) => {
  const [data, setData] = useState([]);
  const { accessToken } = useStore(themeStore);

  const getSimilar = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${type}/${id}/similar`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const result = await response.json();
      if (response.ok) {
        setData(result.similar);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSimilar();
  }, [id, type]);

  return (
    <div className="px-10">
      <h2 className="text-white text-2xl mb-3">
        Similar {type === "movie" ? "Movies" : "Tv Shows"}
      </h2>
      <ScrollableContainer>
        {data.map((item) => (
          <Card key={item.id} item={item} type={type} />
        ))}
      </ScrollableContainer>
    </div>
  );
};

export default Similiar;