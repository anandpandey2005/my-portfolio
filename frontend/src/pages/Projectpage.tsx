import { useNavigate } from "react-router-dom";
import WorkCard from "../components/ui/Card/WorkCard";

interface IWorkProps {
  id: number;
  image: string;
  title: string;
  description: string;
  used: string[];
  link: string;
}

const Projectpage = () => {
  let navigate = useNavigate();
  const works: IWorkProps[] = [
    {
      id: 1,
      image: "./mailer_project_logo.png",
      title: "Mailer",
      description:
        "Many job seekers, small startups, and agencies struggle with email marketing especially sending resumes or campaigns to a large list of recipients without a proper tool. Mailer solves this by letting users configure their Google account's app password, upload a file containing a list of recipient emails, and send emails in bulk completely free. It supports up to 500 emails per day and includes real-time performance tracking so users can monitor delivery as it happens.",
      used: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Node js",
        "Express",
        "Websocket",
        "Nodemailer (SMTP)",
      ],
      link: "https://mailerbyanand.vercel.app/",
    },
    {
      id: 2,
      image: "./jeevo_project.png",
      title: "Jeevo",
      description:
        "Medical emergencies often fail due to the critical delay in finding nearby blood donors slow phone calls and broad social media posts waste precious time. Jeevo solves this by instantly matching hospitals with compatible, nearby donors using geospatial queries. Donors are encouraged to give regularly through a points and badge reward system ranging from Bronze to Hero. The platform features separate secure dashboards for donors and hospitals donors can track their donation history and health status, while hospitals can broadcast urgent requests and manage blood inventory. Automated cooldown logic (such as 90-day waiting periods) ensures donor safety between sessions.",
      used: [
        "javascript",
        "Reat",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node Js",
        "Express",
        "Mongoose",
        "Websocket",
        "JWT",
        "Bcrypt",
        "MongoDb",
        "Nodemailer",
      ],
      link: "https://jeevo.vercel.app/",
    },

    {
      id: 4,
      image: "./Direct_play.png",
      title: "Direct Play",
      description:
        "Tired of relying solely on YouTube for news, where unauthentic channels often overshadow legitimate ones, I built a solution that streams real, free-to-air TV news channels directly in the browser. By researching and extracting M3U8 playlist URLs used by these broadcasters, I implemented a live TV streaming experience covering all major genres of free air channels. The app also uses ABR (Adaptive Bitrate) to dynamically adjust stream quality and minimize buffering.",
      used: [
        "javascript",
        "Reat",
        "Tailwind CSS",
        "Node Js",
        "Express",
        "Hls.js",
        "Video.js",
        "Abr concept implement",
      ],
      link: "https://direct-play.onrender.com/",
    },
    {
      id: 3,
      image: "./sharing_is_careing.png",
      title: "Sharing is caring",
      description:
        "Most video sharing platforms require an account just to upload or view content. This project solves that by providing a completely free, no login platform where anyone can upload and share videos publicly. Any user can also delete inappropriate content to keep the platform clean. Future plans include private video sharing and uploader only delete controls.",
      used: [
        "javascript",
        "React",
        "Tailwind CSS",
        "Node Js",
        "Express",
        "Multer",
        "Cloudinary",
      ],
      link: "https://shareingiscaringg.netlify.app/",
    },
  ];

  return (
    <main className="text-black flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-24 max-w-6xl mx-auto">
      <article>
        <title>My Work | ANAND PANDEY</title>
      </article>
      <div className="flex flex-col gap-y-3">
        <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400">
          Development Journey
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
          My Works & Projects
        </h1>
        <p className="text-neutral-600 leading-relaxed mt-2 text-justify">
          <strong>
            हर प्रोजेक्ट एक नया प्रॉब्लम था और मैं प्रॉब्लम्स से भागता नहीं,
          </strong>{" "}
          Below is a collection of work I've built, broken, rebuilt, and
          eventually shipped. Some of these started as client briefs, some as{" "}
          <strong>3am ideas I couldn't let go of</strong>, and a few as
          solutions to problems I personally faced and couldn't find a good
          answer for online.{" "}
          <strong>Each one taught me something the docs never could.</strong>
        </p>
      </div>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 justify-items-center">
        {works.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </section>
      {/* cta */}
      <section className="w-full max-w-325 mx-auto flex justify-center items-center flex-col gap-6 p-5 border rounded-2xl mt-6 bg-white hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all ease-in-out duration-500">
        <p className="text-xl sm:text-2xl font-extrabold ">
          Have a technical challange ?
        </p>
        <p className="max-w-lg text-justify text-neutral-600">
          I am Currenlty accepting new projects.Let's discuss how we can build
          something exceptional together.
        </p>
        <button
          onClick={() => navigate("/my-experience#get-in-touch")}
          className="px-6 py-3 bg-white text-black font-medium rounded-lg border border-neutral-300 hover:bg-neutral-50 text-center hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all ease-in-out duration-500"
        >
          Let's Talk
        </button>
      </section>
    </main>
  );
};

export default Projectpage;
