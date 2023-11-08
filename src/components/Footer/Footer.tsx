import { createCategory, getAll } from '../../api/category';
import { setCategoriesAC, setTitleAC } from '../../redux/categoriesReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './Footer.scss';

type Props = {
  onAdd: (value: boolean) => void;
}

export const Footer: React.FC<Props> = ({ onAdd }) => {
  const title = useAppSelector(state => state.categories.newTitle);
  const dispatch = useAppDispatch();

  const saveChangesHandler = () => {
    if (!title.trim()) {
      return;
      // show error alert
    }

    onAdd(false);
    createCategory(title);
    dispatch(setCategoriesAC(getAll()));
  }

  const cancelHandler = () => {
    onAdd(false);
    dispatch(setTitleAC(''));
  }

  return (
    <footer className="footer bg-primary">
      <div className="footer-container">
        <div className="btns-container">
          <button className="btn btn-block btn-success" onClick={saveChangesHandler}>
            Save Changes
          </button>
        </div>

        <div className="btns-container">
          <button className="btn btn-block btn-grey" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </footer>
  );
}
