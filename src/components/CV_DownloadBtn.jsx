import cv_resume from "../assets/cv/Dinindu_Chamikara_CV.pdf";

function CV_DownloadBtn() {
  return (
    <a
      href={cv_resume}
      download="Dinindu Chamikara CV"
      className="bg-[#915eff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Download CV</span>
    </a>
  );
}

export default CV_DownloadBtn;
