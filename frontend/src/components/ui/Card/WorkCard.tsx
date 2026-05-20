import { ArrowUpRight } from "lucide-react"; // Optional: npm i lucide-react, or use the raw SVG below

interface IWorkProps {
  id: number;
  image: string;
  title: string;
  description: string;
  used: string[];
  link: string;
}

const WorkCard = (props: IWorkProps) => {
  return (
    <div className="relative w-full max-w-md border border-neutral-200 rounded-2xl hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all ease-in-out duration-500 bg-black hover:bg-white overflow-hidden pb-20 group">
      <div className="w-full overflow-hidden mb-4">
        <img
          src={props.image}
          alt={props.title}
          className="w-full  object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all ease-in-out duration-500"
        />
      </div>

      <div className="flex flex-col justify-start px-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {props.used.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white  group-hover:text-neutral-600 mb-2">{props.title}</h3>

        <p className="text-sm text-neutral-600 leading-relaxed">
          {props.description}
        </p>
      </div>

      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-5 right-5 p-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors duration-300 flex items-center justify-center group"
        aria-label={`View ${props.title}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </a>
    </div>
  );
};

export default WorkCard;
