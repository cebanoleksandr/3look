import { setTitleAC } from '../../redux/categoriesReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './AddCategoryForm.scss';

export const AddCategoryForm = () => {
  const newTitle = useAppSelector(state => state.categories.newTitle);
  const dispatch = useAppDispatch();

  return (
    <div className="category-item bg-grey">
      <input
        type="text"
        className="add-input"
        placeholder="Enter Category Name"
        value={newTitle}
        onChange={(e) => dispatch(setTitleAC(e.target.value))}
      />

      <div className="actions">
        <div className="action">
          <div className="switch text-grey">
            <span>Off</span>
  
            <div className="point-inactive"></div>
          </div>
        </div>

        <div className="action">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4021/4021663.png"
            className="remove-category"
            alt="trash"
          />
        </div>

        <div className="action">
          <img
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg"
            className="menu"
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
}

