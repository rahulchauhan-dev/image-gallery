import React from "react";

const Modal = () => {
  const closeModal = () => {
    document.getElementById("modal-img").src = "/#";
    document.getElementById("user-img").src = "/#";
    document.getElementById("user-name").innerHTML = "";
    document.getElementById("img-desc").innerHTML = "";
    document.getElementById("user-social").innerHTML = "";
    document.getElementById("likes").innerHTML = "";

    const modal = document.getElementById("modal");
    modal.classList.remove("modal-open");
  };

  return (
    <div className="modal" id="modal">
      <div class="modal-box w-11/12 max-w-5xl" id="modalContainer">
        <div className="card card-compact bg-base-100 shadow-lg rounded-lg">
          <figure>
            <img src="/#" alt="pexels" width="100%" id="modal-img" />
          </figure>

          <div className="card-body">
            <div className="flex justify-between">
              <div>
                <p className="text-base font-medium" id="user-name"></p>
                <p className="text-xs font-medium" id="user-social"></p>
              </div>
              <div className="flex">
                <div className="self-center m-4">
                  <img src="/#" alt="dp" id="user-img"></img>
                </div>
                <div className="self-center m-4">
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
                  <p id="likes"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between m-3">
          <div>
            <p className="text-medium text-lg underline" id="img-desc"></p>
          </div>
          <div>
            <a
              class="btn rounded-lg mb-3"
              download
              target="_blank"
              href="/#"
              id="download-link"
            >
              Download
            </a>
            <button onClick={closeModal} class="btn rounded-lg ml-2">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
