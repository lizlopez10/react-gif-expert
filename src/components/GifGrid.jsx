import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs";
import GifCard from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";


const GifGrid = ({ category }) => {
const {images, isLoading } = useFetchGifs(category)
  
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Loading...</h2>)
      }
      <div className="card-grid">
        {images.map((img) => (
          <GifCard 
          key={img.id}
          {...img}
          />
        ))}

      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string,
}
export default GifGrid;
