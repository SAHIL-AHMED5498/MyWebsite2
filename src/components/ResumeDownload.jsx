import { ArrowDownCircle } from "lucide-react"; // arrow icon

export default function ResumeDownload() {
  return (
    <div className="flex justify-center ">
      <a
        href="/Sahil Ahmed Resume (1).pdf" // put your resume file in public/ folder
        download="Sahil_Ahmed_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"

        className=" flex justify-center items-center gap-2 mx-2 text-amber-600 hover:text-amber-500"
      >
        <ArrowDownCircle className="w-6 h-6" />
        <span>Resume</span>
      </a>
    </div>
  );
}
