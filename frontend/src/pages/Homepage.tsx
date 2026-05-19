import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  let skills = [
    "JavaScript",
    "TypeScript",
    "c++",
    "Java",
    "React.js",
    "Express.js",
    "Node.js",
    "MongoDB",
    "SQL",
    "Redux Toolkit",
    "springboot",
    "Docker",
  ];
  let navigate = useNavigate();

  return (
    <div className="min-h-screen text-black flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto mt-12 flex flex-col items-center text-center gap-y-6">
        <span className="px-4 py-1.5 bg-black/5 text-xs font-semibold tracking-wider uppercase rounded-full border border-black/10">
          <span className="text-sm font-bold">#</span>open for Collaboration
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hello, I'm{" "}
          <span className="text-4xl sm:text-7xl md:text-9xl block mt-2 text-neutral-700  transition-all ease-in-out duration-500">
            Anand Pandey
          </span>
        </h1>

        <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg text-justify md:text-center">
          I am a passionate Full Stack Developer. I thrive on building
          efficient, scalable applications and am dedicated to mastering the
          full software development lifecycle—from clean, modular frontend
          design to robust backend architecture. My approach to coding is driven
          by a focus on problem-solving, clean code principles, and a desire to
          build software that creates real value for users.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/my-work"
            className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-neutral-800 shadow-sm text-center hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all ease-in-out duration-500"
          >
            View My Work
          </Link>
          <button
            onClick={() => navigate("/my-experience#get-in-touch")}
            className="px-6 py-3 bg-white text-black font-medium rounded-lg border border-neutral-300 hover:bg-neutral-50 text-center hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all ease-in-out duration-500"
          >
            Let's Talk
          </button>
        </div>
      </section>

      {/* Image Showcase */}
      <div className="mt-16 max-w-5xl mx-auto w-full  rounded-2xl overflow-hidden hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] bg-neutral-100 p-2  transition-all duration-500 ease-in-out">
        <img
          src="./homepageImage.jpeg"
          alt="laptop screen showing code"
          className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 ease-in-out object-cover"
        />
      </div>

      {/* About & Expertise Section */}
      <section className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400">
            About Me
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
            Crafting Logic With an Editorial Eye for Detail
          </h3>
          <p className="text-neutral-600 leading-relaxed mt-2 text-justify">
            As a freelance developer, I bridge the gap between complex technical
            architecture and seamless user experiences. I don't just write
            functional code; I refine it until it runs optimally and scales
            effortlessly.
          </p>
          <p className="text-neutral-600 leading-relaxed text-justify">
            Whether you need a dynamic web application built from scratch, a
            secure API integration, or an intuitive frontend interface, I
            deliver clean, documented solutions tailored to your business needs.
            Let's transform your concept into a production-ready reality.
          </p>
        </div>

        {/* Right: Skills / Expertise */}
        <div className="flex flex-col gap-y-4 md:pl-6">
          <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400">
            Expertise
          </h2>
          <p className="text-neutral-600 mb-2">
            My core tech stack centered around modern ecosystems:
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-neutral-100 border border-neutral-300 text-neutral-800 text-sm font-medium rounded-md hover:bg-black hover:text-white hover:border-black  cursor-default hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all ease-in-out duration-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
