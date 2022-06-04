import { faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Modal = ({ setIsOpen, title, content, content2, content3, image, image2, liveSite, code, presentation, languages }) => {
    return (
        <>
          <div className="darkBG" onClick={() => setIsOpen(false)} />
          <div className="centered">
            <div className="modal">
              <div className="modalHeader">
                <h5 className="heading">{title}</h5>
              </div>
              <button className="closeBtn" onClick={() => setIsOpen(false)}>
                X
              </button>
              <div className="modalContent">
                <img src={image} alt="Project"></img>
                <br></br>
                <div>{content}</div>
                <br></br>
                <img src={image2} alt="Project Alternate"></img>
                <br></br>
                <div>{content2}</div>
                <br></br>
                <div>{content3}</div>
                <br></br>
                <b>Languages Used:&nbsp;</b>{languages}
              </div>
              <div className="modalActions">
                <div className="actionsContainer">
                    {liveSite &&<a href={liveSite} target="_blank" rel="noreferrer">
                        <button className="demoBtn" onClick={() => setIsOpen(false)}>
                            Live Demo &nbsp;
                            <FontAwesomeIcon icon={faUpRightFromSquare} color="white"></FontAwesomeIcon>
                        </button>
                    </a>}
                    {presentation &&<a href={presentation} target="_blank" rel="noreferrer">
                        <button className="demoBtn" onClick={() => setIsOpen(false)}>
                            Presentation &nbsp;
                            <FontAwesomeIcon icon={faGoogleDrive} color="white"></FontAwesomeIcon>
                        </button>
                    </a>}
                    {code &&<a href={code} target="_blank" rel="noreferrer">
                        <button className="codeBtn" onClick={() => setIsOpen(false)}>
                            Code &nbsp;
                            <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
                        </button>
                    </a>}
                    <button
                        className="cancelBtn"
                        onClick={() => setIsOpen(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Modal;