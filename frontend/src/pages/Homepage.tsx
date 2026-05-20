import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
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

  const [typedText, setTypedText] = useState("");
  const fullName = "ANAND PANDEY";

  useEffect(() => {
    let index = 0;
    setTypedText("");

    const interval = setInterval(() => {
      setTypedText(fullName.slice(0, index + 1));
      index++;

      if (index >= fullName.length) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isIframeLoaded) {
        setShowFallback(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isIframeLoaded]);

  return (
    <div className="min-h-screen text-black flex flex-col justify-center px-6 pt-0 sm:pt-10 pb-20 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <article>
        <title>Namaste | ANAND PANDEY</title>
      </article>
      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto mt-12 flex flex-col items-center text-center gap-y-6">
        <span className="relative group inline-block">
          <div className="absolute hidden group-hover:flex flex-col justify-center items-center bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white border border-neutral-200  rounded-xl p-4 min-w-60 text-neutral-800 z-50 group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-sm font-medium mb-1 text-neutral-500">
              Just one missed call away
            </p>

            <div className="flex items-center gap-2 mt-1 text-neutral-950 font-semibold bg-neutral-5 text-sm py-1.5 px-3 rounded-lg border border-neutral-100">
              <Phone className="text-xs h-4" />
              <span>+91 87503 09712</span>
            </div>

            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
          </div>

          <span className="px-2 py-1 bg-black/5 text-xs font-semibold tracking-wider uppercase rounded-full border border-black/10 cursor-pointer select-none">
            <span className="text-sm font-bold">#</span>open 4 Collaboration
          </span>
        </span>

        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl grayscale">
          नमस्ते 🙏🏻
          <span className="text-3xl sm:text-5xl md:text-7xl block mt-2 text-neutral-700  group">
            <span className="group-hover:text-yellow-500 transition-all ease-in-out duration-500">{`</`}</span>
            <span className="transition-all ease-in-out duration-500">
              {" "}
              {typedText}{" "}
            </span>
            <span className="group-hover:text-yellow-500 transition-all ease-in-out duration-500">{`>`}</span>
          </span>
        </h1>

        <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg text-justify md:text-center">
          <strong>
            मुझे वो मोमेंट याद है जब मेरा पहला प्रोजेक्ट लाइव हुआ था
          </strong>{" "}
          a simple app, nothing fancy, but real people were using something I
          built. <strong>That feeling never gets old.</strong> Today I work
          across the full stack{" "}
          <strong>React frontends that feel smooth</strong>, Node backends that
          don't fall apart under pressure, and databases that actually make
          sense. I don't just write code to get it working; I write it so the
          next developer (or future me at 2am) doesn't suffer.{" "}
          <strong>
            Clean architecture, clear logic, and software that genuinely solves
            something
          </strong>{" "}
          that's what I'm here for.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/my-work"
            className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-neutral-800 active:bg-neutral-800 shadow-sm text-center hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all ease-in-out duration-500"
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
            <strong>
              सुनो I know you've probably talked to developers before.
            </strong>{" "}
            Maybe someone quoted you a price, disappeared for two weeks, and
            came back with something that barely looked like what you asked for.
            I get it. That's exactly why I
            <strong>do things differently.</strong>
          </p>

          <p className="text-neutral-600 leading-relaxed mt-2 text-justify">
            From day one, you'll know exactly what's being built, why, and when.{" "}
            <strong>
              No sudden surprises, no "oh that feature costs extra"
            </strong>{" "}
            halfway through. जो भी प्लान होगा you'll be part of it. I treat your
            project like it's my own business on the line, because{" "}
            <strong>
              your success is quite literally what keeps mine running.
            </strong>
          </p>

          <p className="text-neutral-600 leading-relaxed mt-2 text-justify">
            I've helped early-stage founders{" "}
            <strong>ship their MVP before their runway dried up.</strong>
            I've helped small businesses{" "}
            <strong>stop losing customers to a broken checkout page.</strong>
            I've stayed up fixing production bugs at 2am because someone's
            livelihood depended on it. <strong>यह सिर्फ कोड नहीं है </strong>
            it's real work that real people depend on, and I take that
            seriously.
          </p>

          <p className="text-neutral-600 leading-relaxed mt-2 text-justify">
            So if you're tired of vague timelines, copy-paste solutions, and
            developers who vanish after deployment{" "}
            <strong>let's talk. बताओ मुझे what you're building.</strong>
            Even if it's just a rough idea on a napkin, we'll figure out the
            rest together.
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

      {/* linkedin post */}
      <div className=" w-full max-w-325 hidden sm:block mt-12   space-y-6 overflow-hidden">
        <div className="px-8">
          <p className="text-xs text-neutral-600 uppercase">
            professionl journey
          </p>
          <p className="text-4xl font-extrabold">LinkedIn Latest Posts</p>
        </div>
        {showFallback ? (
          <div className="border-none px-5 py-12 text-center">
            <p className="text-neutral-600">
              Unable to load LinkedIn posts at the moment. Please check back
              later or visit my{" "}
              <a
                href="https://www.linkedin.com/in/anandpandey2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-medium underline hover:text-neutral-700"
              >
                LinkedIn profile
              </a>
              .
            </p>
          </div>
        ) : (
          <iframe
            src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25683168"
            width="103%"
            height="600"
            className="border-none px-5"
            onLoad={() => setIsIframeLoaded(true)}
            onError={() => setShowFallback(true)}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Homepage;
