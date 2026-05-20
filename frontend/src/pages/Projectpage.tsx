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
      image: "./homepageImage.jpeg",
      title: "Mailer Engine",
      description:
        "A high-throughput, automated email campaign platform featuring real-time delivery analytics, custom HTML templates, and webhook integration.",
      used: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Redis"],
      link: "https://github.com/yourusername/mailer",
    },
    {
      id: 2,
      image: "./homepageImage.jpeg",
      title: "E-Commerce Gateway",
      description:
        "A lightning-fast storefront optimized for Core Web Vitals, offering seamless state management, dynamic routing, and instant checkout flows.",
      used: ["Next.js", "GraphQL", "Tailwind CSS", "Stripe"],
      link: "https://github.com/yourusername/ecommerce",
    },
  ];

  return (
    <div className="text-black flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-24 max-w-6xl mx-auto">
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
    </div>
  );
};

export default Projectpage;
