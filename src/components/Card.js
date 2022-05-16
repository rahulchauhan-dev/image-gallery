import React from "react";

const Card = ({ photo }) => {
  const openModal = () => {
    document.getElementById("modal-img").src = photo.urls.regular;
    document.getElementById("user-img").src = photo.user.profile_image.small;
    document.getElementById("user-name").innerHTML = photo.user.name;
    document.getElementById("img-desc").innerHTML = photo.description;
    document.getElementById(
      "user-social"
    ).innerHTML = `@${photo.user.username}`;
    document.getElementById("likes").innerHTML = photo.likes;
    document.getElementById("download-link").href = photo.links.download;

    const modal = document.getElementById("modal");
    modal.classList.add("modal-open");
  };

  return (
    <>
      <div>
        <div className="card card-compact bg-base-100 shadow-lg rounded-lg">
          <button onClick={openModal}>
            <figure>
              <img src={photo.urls.small} alt="pexels" />
            </figure>
          </button>
          <div className="card-body">
            <div className="flex justify-between">
              <div>
                <p className="text-base font-medium">{photo.user.name}</p>
                <p className="text-xs font-medium">@{photo.user.username}</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <p>{photo.likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
