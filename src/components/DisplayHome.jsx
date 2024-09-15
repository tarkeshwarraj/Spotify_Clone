import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";

const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              image={item.image}
              desc={item.desc}
              id={item.id}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) =>(
            <SongItem
            key={index}
            image={item.image}
            desc={item.desc}
            id={item.id}
            name={item.name}
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
