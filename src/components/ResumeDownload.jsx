import { ArrowDownCircle } from "lucide-react";

export default function ResumeDownload() {
  return (
    <div className="flex justify-center sm:justify-start">
      <a
        href="/SAHIL_AHMED_CV_.pdf" // put your resume file in public/ folder
        download="Sahil_Ahmed_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 dark:border-slate-700/80 px-4 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase text-slate-800 dark:text-slate-100 bg-white/90 dark:bg-slate-900/90 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <ArrowDownCircle className="w-4 h-4" />
        <span>Download CV</span>
      </a>
    </div>
  );
}
