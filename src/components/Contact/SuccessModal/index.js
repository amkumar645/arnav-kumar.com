import './index.scss';


const SuccessModal = ({ setIsOpen, image }) => {
  return (
    <>
      <div className="darkBG-success" onClick={() => setIsOpen(false)} />
      <div className="centered-success">
        <div className="modal-success">
          <div className="modalHeader-success">
            <h5 className="heading-success">Message successfully sent!</h5>
          </div>
          <button className="closeBtn-success" onClick={() => setIsOpen(false)}>
          X
          </button>
          <div className="modalContent-success">
            <img src={image} alt="Checkmark"></img>
            <div>I'll try to get back to you as soon as possible!</div>
          </div>
          <div className="modalActions-success">
            <div className="actionsContainer-success">
              <button
                className="successBtn"
                onClick={() => setIsOpen(false)}
              >
                OK!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;