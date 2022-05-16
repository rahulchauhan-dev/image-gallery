import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto px-3 mt-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/">
            <img src="/assets/jpgs/gallery.png" alt="camera" width="40px"></img>{" "}
            PixGallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
