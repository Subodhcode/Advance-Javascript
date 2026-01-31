import React from "react";

export default function Home() {
  return (
    <section className="h-screen w-[100%] relative">
      <video
        src="/public/Video/pic.mp4"
        className="object-cover"
        muted
        autoPlay
        loop
      ></video>
      <section className="absolute w-[100%] bg-[#FF0000FF] top-0">
        <header className="max-w-[1240px] mx-auto flex pt-5 gap-5 justify-between items-center">
          <figure>
            <img src="/images/logo.png" alt="" />
          </figure>
          <nav className="md:block hidden">
            <ul className="flex  gap-[25px] font-Jost-[500]">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Plans</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">Price</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Amenities</a>
              </li>
              <li>
                <a href="#">Specification</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </section>
  );
}
