import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  let navigate = useNavigate();

  const [query, setQuery] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query != null) {
      navigate(`/${query}`);
    }
  };

  return (
    <>
      <Modal />
      <div>
        <div
          className="hero"
          style={{
            backgroundImage: "url(/assets/jpgs/hero.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60" />
          <div className="hero-content text-center text-neutral-content my-8">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">PixGallery</h1>
              <p className="mb-5">
                The internet’s source of freely-usable images. <br></br>Powered
                by{" "}
                <a href="https://unsplash.com/" className="underline">
                  Unsplash
                </a>{" "}
                API.
              </p>

              <form className="form-control" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={query || ""}
                  placeholder="Search..."
                  class="input input-border rounded-lg shadow-xl text-black"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
