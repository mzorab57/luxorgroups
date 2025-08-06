import React from "react";
import { Link } from "react-router-dom";

const PagesHeader = ({ img, title }) => {
  return (
    <section className="navigation">
      <div className="relative">
        <img
          src={img}
          alt="background"
          className="object-cover bg-cover brightness-75 h-[400px] w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <ul className="flex justify-center space-x-2 text-gray-300 mt-4 p-2 px-5">
            <li>
              <Link
                to="/"
                className="text-gray-200 text-xl font-jost font-medium"
              >
                {"home"} //
              </Link>
            </li>
            <li className="text-gray-200 text-xl font-jost font-medium">
              {title || "gallery"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
