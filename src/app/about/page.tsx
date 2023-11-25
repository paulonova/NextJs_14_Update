"use client";

function About() {
  new Promise((resolve) => setTimeout(resolve, 15000));
  //throw Error("Something wrong");

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default About;
