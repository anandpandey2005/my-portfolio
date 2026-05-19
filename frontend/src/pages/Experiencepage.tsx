import { Mail, MapPinIcon, SendIcon } from "lucide-react";
import ExperienceCard from "../components/ui/Card/ExperienceCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface IExperienceprops {
  id: number | null;
  duration: {
    from: string;
    to: string;
  };
  profile: string;
  company: string;
  done: string[];
  link: string;
}

const Experiencepage = () => {
  let experiences: IExperienceprops[] = [
    {
      id: 1,
      duration: {
        from: "Jun 2025",
        to: "Sept 2025",
      },
      profile: "MERN Stack Developer Intern",
      company: "APDigiSolutions",
      done: [
        "Engineered RESTful APIs using Node.js and Express.js to support scalable data exchange across client projects.",
        "Designed and optimized MongoDB schemas (Mongoose) improving data retrieval efficiency for high-traffic endpoints.",
        "Built reusable React.js UI component libraries, reducing development time by improving cross-project maintainability.",
        "Collaborated in an Agile environment, delivering features on sprint cycles and participating in code reviews.",
      ],
      link: "https://apdigisolutions.com/",
    },
    {
      id: 2,
      duration: {
        from: "Jan 2024",
        to: "Mar 2024",
      },
      profile: "Frontend Developer Intern",
      company: "MyCaptain",
      done: [
        "Translated Figma designs into pixel-perfect, fully responsive web pages using React.js and Tailwind CSS.",
        "Optimized page load speed by 20% through lazy loading, code splitting, and image compression techniques.",
        "Ensured cross-browser compatibility and mobile responsiveness across all delivered features.",
      ],
      link: "https://mycaptain.in/",
    },
  ];

  let location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div className=" text-black flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-24 max-w-6xl mx-auto">
      <article>
        <title>My Experieces AND Get In Touch | ANAND PANDEY</title>
      </article>
      <div className="flex flex-col gap-y-5">
        <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400">
          professional journey
        </h2>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
          Experience
        </h3>
        <p className="text-neutral-600 leading-relaxed mt-2 text-justify">
          As a freelance developer, I bridge the gap between complex technical
          architecture and seamless user experiences. I don't just write
          functional code; I refine it until it runs optimally and scales
          effortlessly.
        </p>
      </div>

      {/* holding experience card */}
      <section className="border-l-10 p-5 mt-6 rounded-2xl">
        {experiences.map((item: any) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </section>

      {/* contact form */}
      <section
        className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        id="get-in-touch"
      >
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400">
            get in touch
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
            Let's build something precise
          </h3>
          <p className="text-neutral-600 leading-relaxed mt-2 text-justify ">
            Currenlty accepting freelance projects and technical consulting
            engagement. Reach out to discuss your vision.
          </p>
          <div className="my-4 flex flex-col gap-y-4">
            {/* Email */}
            <div className="flex items-center gap-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-800">
                <Mail></Mail>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Email
                </p>
                <p className="text-sm font-bold text-neutral-900 sm:text-base">
                  anandpandey20005@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-800">
                <MapPinIcon />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Location
                </p>
                <p className="text-sm font-bold text-neutral-900 sm:text-base">
                  Badarpur, Delhi
                </p>
              </div>
            </div>
          </div>
          <p>
            <div className="flex items-center justify-center gap-5 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md transition-all duration-300 hover:text-white hover:bg-neutral-900 dark:hover:bg-neutral-800"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md transition-all duration-300 hover:text-white hover:bg-[#0077b5]"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md transition-all duration-300 hover:text-white hover:bg-neutral-900 dark:hover:bg-neutral-800"
              >
                CV
              </a>
            </div>
          </p>
        </div>

        {/* Right: Skills / Expertise */}
        <div className="flex flex-col gap-y-5 md:pl-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className="uppercase font-bold">
              full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Anand Pandey"
              className="outline-none border-b border-neutral-300 py-2  focus:border-b-green-400 transition-all ease-in-out duration-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="uppercase font-bold">
              email
            </label>
            <input
              type="text"
              id="email"
              placeholder="anandpandey20005@gmail.com"
              className="outline-none border-b border-neutral-300 py-2  focus:border-b-green-400 transition-all ease-in-out duration-500"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="message" className="uppercase font-bold">
              message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="I  want collaborate with you"
              className="outline-none border-b  border-neutral-300 py-2  focus:border-b-green-400 transition-all ease-in-out duration-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 p-5 bg-black text-white justify-center rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out duration:500"
          >
            <span>SEND MESSAGE </span>
            <span>
              <SendIcon />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Experiencepage;
