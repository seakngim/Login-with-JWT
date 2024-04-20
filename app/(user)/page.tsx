import CoursesComponent from "@/components/CoursesComponent ";
import { Carousel } from "flowbite-react";
import { dataContent, dataCourses } from "./data";
import CommnetComponent from "@/components/ContentComponent ";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <Carousel className="h-screen pb-28 rounded-0">
          <div>
            <Image
              src="https://istad.co/resources/img/slide/slide-3.jpg"
              alt="..."
              width={500}
              height={500}
            />
            <div className="container left-32 absolute items-center top-48 z-10 mx-auto lg:px-60 lg:pr-48 md:px-20 py-20">
              <div className="lg:px-6 px-4 text-white">
                <h1 className="lg:text-[48px] md:text-2xl font-bold lg:leading-none pt-5 tracking-widest">
                  Center of Science and Technology Advanced Development
                </h1>
                <p className="lg:mt-10 mt-5 lg:text-lg md:text-sm text-[10px]">
                  CSTAD is a noteworthy science and technology center in
                  Cambodia. CSTAD has routed Cambodian students to advanced
                  science and technology, research, and develop digital skills,
                  and our graduates have been guaranteed excellent job
                  opportunities with the Top IT company.
                </p>
                <div className="lg:mt-16 mt-10">
                  <a
                    href="/enroll"
                    className="text-white bg-[#253C95] hover:bg-[#253C95] lg:text-lg hover:opacity-90 focus:ring-4 focus:ring-[#253C95] rounded-lg px-4 lg:px-5 py-3 text-sm md:text-base lg:py-2.5 focus:outline-none dark:focus:ring-[#253C95] transition duration-500"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="https://istad.co/resources/img/slide/slide-2.jpg"
              alt="..."
              width={500}
              height={500}
            />
            <div className="container left-32 absolute items-center top-48 z-10 mx-auto lg:px-60 lg:pr-48 md:px-20 py-20">
              <div className="lg:px-6 px-4 text-white">
                <h1 className="lg:text-[48px] md:text-2xl font-bold lg:leading-none pt-5 tracking-widest">
                  Vision
                </h1>
                <p className="lg:mt-10 mt-5 lg:text-lg md:text-sm text-[10px]">
                  Advanced IT Center in Cambodia
                </p>
                <div className="lg:mt-16 mt-10">
                  <a
                    href="/enroll"
                    className="text-white bg-[#253C95] hover:bg-[#253C95] lg:text-lg hover:opacity-90 focus:ring-4 focus:ring-[#253C95] rounded-lg px-4 lg:px-5 py-3 text-sm md:text-base lg:py-2.5 focus:outline-none dark:focus:ring-[#253C95] transition duration-500"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="https://istad.co/resources/img/slide/slide-1.jpg"
              alt="..."
              width={500}
              height={500}
            />
            <div className="container left-32 absolute items-center top-48 z-10 mx-auto lg:px-60 lg:pr-48 md:px-20 py-20">
              <div className="lg:px-6 px-4 text-white">
                <h1 className="lg:text-[48px] md:text-2xl font-bold lg:leading-none pt-5 tracking-widest">
                  Mission
                </h1>
                <p className="lg:mt-10 mt-5 lg:text-lg md:text-sm text-[10px]">
                  Provide the latest methodology with high-quality training and
                  mentoring Build up the capacity and career of IT experts
                  Cambodia Consult and connect CSTAD trainees to top IT careers
                </p>
                <div className="lg:mt-16 mt-10">
                  <a
                    href="/enroll"
                    className="text-white bg-[#253C95] hover:bg-[#253C95] lg:text-lg hover:opacity-90 focus:ring-4 focus:ring-[#253C95] rounded-lg px-4 lg:px-5 py-3 text-sm md:text-base lg:py-2.5 focus:outline-none dark:focus:ring-[#253C95] transition duration-500"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
      {/* section course */}
      <section className="flex -mt-20 flex-col justify-between container mx-auto">
        <h3 className="text-[#253C95] mt-5 uppercase font-bold md:text-4xl text-2xl">
          Courses
        </h3>
        <div className="grid sm:grid-cols-1 lg:px-6 xl:px-0 px-4 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-6 py-10">
          {dataCourses.map((courses) => (
            <CoursesComponent
              key={courses.id}
              image={courses.image}
              title={courses.title}
              description={courses.description}
              duration={courses.duration}
              level={courses.level}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-between container mx-auto">
        <h3 className="text-[#253C95] mt-5 uppercase font-bold md:text-4xl text-2xl">
          Useful Contents
        </h3>
        <Carousel className="h-96 rounded-0">
          {dataContent.map((content) => (
            <div key={content.id} className="grid lg:px-6 xl:px-0 px-4 grid-cols-4 grid-flow-row gap-6 py-10">
              <CommnetComponent
                image={content.image}
                title={content.title}
                date={content.date}
              />
              <CommnetComponent
                key={content.id}
                image={content.image}
                title={content.title}
                date={content.date}
              />
              <CommnetComponent
                key={content.id}
                image={content.image}
                title={content.title}
                date={content.date}
              />
              <CommnetComponent
                key={content.id}
                image={content.image}
                title={content.title}
                date={content.date}
              />
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
}
