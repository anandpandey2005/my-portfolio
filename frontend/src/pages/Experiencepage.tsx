import {
  Mail,
  MapPinIcon,
  SendIcon,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import ExperienceCard from "../components/ui/Card/ExperienceCard";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  // Custom Alert/Toast State
  const [alert, setAlert] = useState<{
    show: boolean;
    type: "success" | "error" | null;
    message: string;
  }>({
    show: false,
    type: null,
    message: "",
  });

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

  // Helper function to handle timing out the alert
  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: null, message: "" });
    }, 4000);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    const formData = new FormData(formRef.current);
    const senderName = formData.get("name") as string;
    const senderEmail = formData.get("from_email") as string;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_CONTACT_US,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        async () => {
          try {
            await emailjs.send(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAIL_JS_TEMPLATE_AUTO_REPLY,
              {
                to_email: senderEmail,
                name: senderName,
                from_email: senderEmail,
              },
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            );
          } catch (error) {
            console.error("Auto-reply sending failed:", error);
          }

          showAlert(
            "success",
            "Message sent successfully! I'll get back to you soon.",
          );
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          showAlert("error", "Failed to send message. Please try again later.");
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <main className="text-black flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-24 max-w-6xl mx-auto relative">
      <div
        className={`fixed bottom-5 right-5 z-50 flex items-center gap-x-3 px-5 py-4 rounded-xl border bg-white shadow-xl transition-all duration-500 ease-in-out ${
          alert.show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        } ${alert.type === "success" ? "border-green-200" : "border-red-200"}`}
      >
        {alert.type === "success" ? (
          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
        ) : (
          <XCircle className="h-5 w-5 text-red-500 shrink-0" />
        )}
        <p className="text-sm font-medium text-neutral-800">{alert.message}</p>
      </div>

      <article>
        <title>My Experiences | ANAND PANDEY</title>
      </article>
      <div className="flex flex-col gap-y-5">
        <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400">
          professional journey
        </h2>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
          Experience
        </h3>
        <p className="text-neutral-600 leading-relaxed mt-2 text-justify">
          <strong>
            सीधा बोलूंगा experience ने मुझे वो चीजें सिखायीं जो कोई ट्यूटोरियल
            कभी नहीं सिखा सकता।
          </strong>{" "}
          Working inside real companies, with real deadlines and real teams,
          changes how you think about code entirely. You stop asking "does this
          work?" and start asking{" "}
          <strong>
            "will this hold up at 3am when something breaks and I'm not around?"
          </strong>{" "}
          Every role I've taken on has added a layer better instincts, sharper
          decisions, and an understanding of what businesses actually need
          versus what sounds good in a meeting.
        </p>

        <p className="text-neutral-600 leading-relaxed mt-4 text-justify">
          I've worked across industries from early-stage startups where I was
          the entire tech team, to structured environments with code reviews,
          sprint cycles, and stakeholders who had opinions about everything.
          Both taught me something valuable.{" "}
          <strong>
            Startups taught me speed and ownership. Structured teams taught me
            discipline and communication.
          </strong>{" "}
          आज जो भी मैं बिल्ड करता हूं, उसमें दोनों का Balance होता है।
        </p>
      </div>

      <section className="relative mt-16 py-10 before:absolute before:top-0 before:bottom-0 before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-neutral-200">
        <div className="flex flex-col gap-y-12 md:gap-y-6">
          {experiences.map((item: any, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col w-full pl-10 md:pl-0 md:w-1/2 ${
                  isEven
                    ? "md:align-self-start md:pr-12 md:ml-0"
                    : "md:self-end md:pl-12"
                }`}
              >
                <div
                  className={`absolute top-8 left-[9px] z-10 w-3 h-3 rounded-full bg-neutral-900 border-4 border-white ring-1 ring-neutral-300 ${
                    isEven
                      ? "md:left-auto md:right-0 md:translate-x-1/2"
                      : "md:right-auto md:left-0 md:-translate-x-1/2"
                  }`}
                />
                <div
                  className={`w-full flex ${isEven ? "md:justify-end" : "md:justify-start"}`}
                >
                  <ExperienceCard {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* ------------------------- */}

      {/* contact form */}
      <section
        className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        id="get-in-touch"
      >
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400">
            get in touch
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
            Let's build something precise
          </h3>
          <p className="text-neutral-700 text-base leading-relaxed font-medium">
            <strong>कुछ दिखा जो काम का लगा?</strong> Let's talk about what we
            can build together.
          </p>
          <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
            Whether you have a project in mind, a role to fill, or just want to
            pick my brain <strong>my inbox is always open.</strong> I respond to
            every message, usually within 24 hours.
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
          <div>
            <div className="flex items-center justify-center gap-5 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
              <a
                href={import.meta.env.VITE_GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md transition-all duration-300 hover:text-white hover:bg-neutral-900 dark:hover:bg-neutral-800"
              >
                GitHub
              </a>
              <a
                href={import.meta.env.VITE_LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md transition-all duration-300 hover:text-white hover:bg-[#0077b5]"
              >
                LinkedIn
              </a>
              <a
                href={import.meta.env.VITE_CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md transition-all duration-300 hover:text-white hover:bg-neutral-900 dark:hover:bg-neutral-800"
              >
                CV
              </a>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-y-5 md:pl-6"
        >
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className="uppercase font-bold">
              full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="name"
              placeholder="Anand Pandey"
              required
              className="outline-none border-b border-neutral-300 py-2 focus:border-b-green-400 transition-all ease-in-out duration-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="uppercase font-bold">
              email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="anandpandey20005@gmail.com"
              required
              className="outline-none border-b border-neutral-300 py-2 focus:border-b-green-400 transition-all ease-in-out duration-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="uppercase font-bold">
              message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="I want to collaborate with you"
              required
              className="outline-none border-b border-neutral-300 py-2 focus:border-b-green-400 transition-all ease-in-out duration-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="flex items-center gap-2 p-5 bg-black text-white justify-center rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out duration-500 disabled:bg-neutral-400 disabled:cursor-not-allowed"
          >
            <span>{isSending ? "SENDING..." : "SEND MESSAGE"}</span>
            {!isSending && (
              <span>
                <SendIcon />
              </span>
            )}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Experiencepage;
