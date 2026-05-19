import { CheckCircle2 } from "lucide-react";

export interface IExperienceprops {
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

const ExperienceCard = (props: IExperienceprops) => {
  return (
    <div className="w-full max-w-md rounded-2xl bg-[#f4f5f8] p-8 mb-5  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]  text-left transition-all ease-in-out duration-500 overflow-x-auto">
      <div className="mb-6">
        <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase mb-1 dark:text-neutral-500">
          {props.duration.from ? props.duration.from : "N/A"} —{" "}
          {props.duration.to ? props.duration.to : "N/A"}
        </p>

        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 leading-tight mb-0.5 uppercase">
          {props.profile ? props.profile : "N/A"}
        </h3>
        <a href={`${props.link}`} target="_blank">
          <p className="text-xs font-bold tracking-wider text-neutral-500 dark:text-neutral-400 capitalize">
            {props.company ? props.company : "N/A"}
          </p>
        </a>
      </div>
      <div className="flex flex-col gap-5">
        {props.done.map((item, index) => (
          <div
            className="flex items-start gap-3.5"
            key={`${index}-${item.slice(0, 10)}`}
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-neutral-400 dark:text-neutral-500">
              <CheckCircle2 className="h-4.5 w-4.5 stroke-[1.75]" />
            </span>

            <span className="text-[15px] leading-[1.45] text-neutral-600 font-normal dark:text-neutral-300 hover:text-neutral-700">
              {item ? item : "N/A"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
