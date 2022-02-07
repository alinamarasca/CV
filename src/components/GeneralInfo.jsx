import { React } from "react";
import photo from "../img/photo.jpg";
import cv from "../assets/front-end_Alina_Marasca_CV.pdf";
import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";

function GeneralInfo() {
  return (
    <div className="general-info">
      <div className="photo">
        <img src={photo} alt="Alina Marasca" />
      </div>
      <div className="contact">
        <BsFillEnvelopeFill />
        <BsGithub
          onClick={e =>
            window.open("https://github.com/alinamarasca", "_blank").focus
          }
        />
        <BsLinkedin
          onClick={e =>
            window.open(
              "https://www.linkedin.com/in/alina-marasca-18b603229/",
              "_blank"
            ).focus
          }
        />
      </div>

      <div className="extra-info">
        <p>
          <span>Location: </span>
          Gent,Belgium
        </p>
        <p>
          <span>Languages: </span>
          <br />
          English <br />
          Russian <br />
          Dutch <br />
        </p>
      </div>
      <div className="cv-link">
        <a href={cv} className="download-cv" download>
          download CV(pdf)
        </a>
      </div>
    </div>
  );
}

export default GeneralInfo;
