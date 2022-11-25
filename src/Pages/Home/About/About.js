import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-50 mx-auto text-center my-5">
      <h1 className="my-3">UltraNET Broadband</h1>
      <p>
        Vestibulum aliquet, justo ac faucibus fermentum, orci orci laoreet
        lacus, in lacinia sapien ligula in odio. Praesent posuere dolor id
        sapien finibus ultricies. Aenean ac magna vestibulum, consequat nibh
        laoreet, lacinia sapien. Ut eu pellentesque orci. Duis a dui neque. Duis
        mollis dolor et volutpat dignissim. Morbi hendrerit interdum ipsum, ut
        pretium justo euismod sit amet. Suspendisse fringilla sagittis tortor
        non auctor.
      </p>
      <Link to="/">
        <button className="btn btn-primary px-4">More About UltraNET</button>
      </Link>
    </div>
  );
};

export default About;
