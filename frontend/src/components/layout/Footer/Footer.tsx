import { CopyrightIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t ">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
          <span>{currentYear}</span>
          <span className="inline-flex items-center justify-center p-0.5 rounded-full bg-neutral-900 text-white transition-colors duration-500 hover:bg-amber-600 dark:bg-neutral-800 dark:hover:bg-amber-600">
            <CopyrightIcon className="h-3 w-3 stroke-[2.5]" />
          </span>
          <span>Anand Pandey Portfolio. Built with technical precision.</span>
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
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
      </div>
    </footer>
  );
};

export default Footer;
