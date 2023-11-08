import './AddCategoryModal.scss';

type Props = {
  onRemove: () => void;
  onCancel: () => void;
}

export const AddCategoryModal: React.FC<Props> = ({ onRemove, onCancel }) => {
  return (
    <div className="modal">
      <h2>Delete the Category?</h2>

      <button className="btn btn-block btn-danger mb10" onClick={onRemove}>Delete</button>

      <button className="btn btn-link" onClick={onCancel}>
        <span className="text-danger">Cancel</span>
      </button>
    </div>
  );
}
