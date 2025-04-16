import React from "react";

function Banner() {
  return (
    <div className="hero bg-base-300 py-10 rounded-xl ">
      <div className="hero-content w-full  flex-col lg:flex-row-reverse">
        <img src="assets/banner.png" className="rounded-lg " />
        <div className="text-left max-w-2xl">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-firstColor text-white font-medium">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
