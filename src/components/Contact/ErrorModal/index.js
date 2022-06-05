import './index.scss';

const ErrorModal = ({ setIsOpen, image }) => {
    return (
    <>
        <div className="darkBG-success" onClick={() => setIsOpen(false)} />
        <div className="centered-success">
        <div className="modal-success">
            <div className="modalHeader-success">
            <h5 className="heading-success">Message failed to send!</h5>
            </div>
            <button className="closeBtn-success" onClick={() => setIsOpen(false)}>
            X
            </button>
            <div className="modalContent-success">
            <img src={image} alt="Checkmark"></img>
            <div>Please try again!</div>
            </div>
            <div className="modalActions-success">
            <div className="actionsContainer-success">
                <button
                className="deleteBtn-success"
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

export default ErrorModal;