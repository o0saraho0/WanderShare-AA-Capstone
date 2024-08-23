import "./SubComponents.css"

const ConfirmDeleteModal = ({ onDelete, onClose }) => (
    <div className="confirm-deletion">
      <h2>You are about to delete 1 itinerary</h2>
      <p>Keep in mind that deleted itinerary can not be retrieved.</p>
      <div className="inline" style={{gap: "5%"}}>
      <button  onClick={onDelete}>Yes, delete</button>
      <button onClick={onClose}>No, keep it</button>
      </div>
    </div>
);

export default ConfirmDeleteModal;