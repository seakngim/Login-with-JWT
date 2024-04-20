import Image from "next/image";
import React from "react";

type CommnetComponentProps = {
  image: string;
  title: string;
  date: string;
};

export default function CommnetComponent(props: CommnetComponentProps) {
  return (
    <div className="max-w-auto lg:mx-0 md:mx-0 mx-5 pb-5 shadow-md bg-white rounded-b-lg hover:shadow-lg dark:bg-white hover:opacity-90 transition duration-500">
      <figure className="max-w-lg text-center">
        <Image
          className="h-40 w-full max-w-auto mx-auto "
          src={props.image}
          alt={props.title} 
          width={500}
          height={500}/>
      </figure>
      <div className="p-5 pb-1">
        <p className="text-end mb-3 font-normal text-gray-700 dark:text-gray-400  line-clamp-2">
          {props.date}
        </p>
        <a href="#">
          <h5 className="mb-2 mt-5 text-md lg:h-10 tracking-widest line-clamp-2 font-bold text-gray-900 dark:text-[#253C95] uppercase">
            {props.title}
          </h5>
        </a>
      </div>
    </div>
  );
}
