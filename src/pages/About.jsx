import React from "react";

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the React Front To Back Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        . The course is being undertaken by
        <strong>
          <a href="https://github.com/batman1023"> Batman1023</a>
        </strong>
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.1</span>
      </p>
      <p className="text-lg text-gray-400">
        Design Layout Courtsey By:
        <a className="text-white ml-2">Hassib Moddasser</a>
      </p>
    </>
  );
}

export default About;
