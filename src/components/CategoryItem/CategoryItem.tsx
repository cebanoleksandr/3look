import cn from 'classnames';
import React from 'react';
import { updateCategory } from '../../api/category';
import { updateCategoryAC } from '../../redux/categoriesReducer';
import { useAppDispatch } from '../../redux/hooks';
import { Category } from '../../utils/types/category';
import './CategoryItem.scss';

type Props = {
  category: Category;
  openModal: (value: Category | null) => void;
}

export const CategoryItem: React.FC<Props> = ({ category, openModal }) => {
  const dispatch = useAppDispatch();

  const toggleActiveHandler = () => {
    const newCategory: Category = {
      ...category,
      isActive: !category.isActive,
    }

    dispatch(updateCategoryAC(updateCategory(newCategory)));
  }

  return (
    <div className="category-item bg-grey">
      <span className={cn({
        'inactive': !category.isActive
      })}>{ category.title }</span>

      <div className="actions">
        <div className="action">
          {category.isActive ? (
            <div className="switch text-success" onClick={toggleActiveHandler}>
              <span>On</span>
  
              <div className="point"></div>
            </div>
          ) : (
            <div className="switch text-grey" onClick={toggleActiveHandler}>
              <span>Off</span>
  
              <div className="point-inactive"></div>
            </div>
          )}
        </div>

        <div className="action">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4021/4021663.png"
            className="remove-category"
            alt="trash"
            onClick={() => openModal(category)}
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
