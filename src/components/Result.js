import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useParams } from "react-router-dom";

const Result = () => {
  const [photos, setPhotos] = useState([]);

  let params = useParams();

  const searchPhotosByQuery = async (keyword) => {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&client_id=raNsmjkxf7Yd6bHGIrX_0hT8BG1RO0irvMjU6C4ng_w`
    );
    setPhotos(data.results);
  };

  useEffect(() => {
    searchPhotosByQuery(params.keyword);
  }, [params.keyword]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container w-[70%] mx-auto m-5">
        {photos.map((photo) => (
          <Card photo={photo} key={photo.id} />
        ))}
      </div>
    </>
  );
};

export default Result;
