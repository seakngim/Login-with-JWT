import Image from "next/image";
import React from "react";

type CardComponentProps = {
  image: string;
  title: string;
  description: string;
  duration: string;
  level: string;
};

export default function CoursesComponent(props: CardComponentProps) {
  return (
    <div className="max-w-auto lg:mx-0 md:mx-0 mx-5 shadow-md bg-white rounded-b-lg hover:shadow-lg dark:bg-white hover:opacity-90 transition duration-500">
      <figure className="max-w-lg text-center border-b-2 lg:bg-white rounded-t-lg">
        <Image
          className="h-40 max-w-auto mx-auto lg:py-0 py-5"
          src={props.image}
          alt={props.title}
          width={500}
          height={500}
        />
      </figure>
      <div className="p-5 pb-1">
        <a
          href="#"
          className="inline-flex items-center tracking-widest px-3 py-2 text-sm font-medium text-center text-white bg-[#253C95] transition duration-300 hover:bg-[##213686] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#253C95] dark:hover:bg-[##213686] dark:focus:ring-blue-800"
        >
          20% Scholarship
        </a>

        <a href="#">
          <h5 className="mb-2 mt-5 text-md lg:h-10 tracking-widest line-clamp-2 font-bold text-gray-900 dark:text-[#253C95] uppercase">
            {props.title}
          </h5>
        </a>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  line-clamp-2">
          {props.description}
        </p>

        <div className="grid grid-cols-2 justify-between border-t-2 border-[#253C95]">
          <a
            href="#"
            className="inline-flex items-center py-2 text-sm font-semibold text-center text-[#253C95]"
          >
            <svg
              className="w-6 h-6 text-[#253C95] mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                clipRule="evenodd"
              />
            </svg>

            {props.duration}
          </a>
          <a
            href="#"
            className="inline-flex items-center py-2 text-sm font-semibold text-center text-[#253C95]"
          >
            <svg
              className="w-6 h-6 text-[#253C95] mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M5.005 10.19a1 1 0 0 1 1 1v.233l5.998 3.464L18 11.423v-.232a1 1 0 1 1 2 0V12a1 1 0 0 1-.5.866l-6.997 4.042a1 1 0 0 1-1 0l-6.998-4.042a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1ZM5 15.15a1 1 0 0 1 1 1v.232l5.997 3.464 5.998-3.464v-.232a1 1 0 1 1 2 0v.81a1 1 0 0 1-.5.865l-6.998 4.042a1 1 0 0 1-1 0L4.5 17.824a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1Z"
                clipRule="evenodd"
              />
              <path d="M12.503 2.134a1 1 0 0 0-1 0L4.501 6.17A1 1 0 0 0 4.5 7.902l7.002 4.047a1 1 0 0 0 1 0l6.998-4.04a1 1 0 0 0 0-1.732l-6.997-4.042Z" />
            </svg>
            {props.level}
          </a>
        </div>
      </div>
    </div>
  );
}
