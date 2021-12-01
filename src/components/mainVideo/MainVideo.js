import React from "react";

const MainVideo = () => {
  return (
    <div className="mx-5 mt-5">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vQWlgd7hV4A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MainVideo;
