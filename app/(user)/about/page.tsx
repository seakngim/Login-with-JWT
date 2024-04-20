import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <section className="mx-auto max-w-screen-xl grid sm:grid-cols-1 lg:px-6 xl:px-0 px-4 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6 text-[#253C95]">
      <div>
        <h1 className="uppercase font-bold md:text-4xl text-2xl">
          Mission & Vision
        </h1>
        <section>
          <h1 className="lg:mt-5 mt-2 font-bold lg:text-2xl text-lg">
            Mission
          </h1>
          <ul className="lg:mt-4 lg:text-lg text-sm font-medium list-disc tracking-widest ml-8 mr-12">
            <li className="">
              Provide the latest methodology with high-quality training and
              mentoring
            </li>
            <li className="">
              Build up the capacity and career of IT experts Cambodia
            </li>
            <li className="">
              Consult and connect CSTAD trainees to top IT careers
            </li>
          </ul>
        </section>
        <section>
          <h1 className="lg:mt-5 mt-2 font-bold lg:text-2xl text-lg">Vision</h1>
          <ul className="lg:mt-4 lg:text-lg text-sm font-medium list-disc tracking-widest ml-8 mr-12">
            <li className="">Advanced IT Center in Cambodia</li>
          </ul>
        </section>
      </div>
      <Image
        className="w-full"
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Ffieldedge.com%2Fwp-content%2Fuploads%2F2021%2F08%2Fbusinessman-hand-holding-blocks.jpeg&tbnid=yXmTynT7IJ4P1M&vet=12ahUKEwjyjon-vaCFAxW6yzgGHfnrBXIQMygQegUIARCSAQ..i&imgrefurl=https%3A%2F%2Ffieldedge.com%2Fblog%2Fmission-and-vision-statement%2F&docid=gKoa0ifVZPXYWM&w=1200&h=800&q=mission%20and%20vision&ved=2ahUKEwjyjon-vaCFAxW6yzgGHfnrBXIQMygQegUIARCSAQ"
        alt="mission-vision"
        width={500}
        height={500}
      />
    </section>
  );
}
