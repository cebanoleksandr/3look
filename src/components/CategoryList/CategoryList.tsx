import { useEffect } from 'react';
import { getAll } from '../../api/category';
import { setCategoriesAC } from '../../redux/categoriesReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { prepareCategories } from '../../utils/helpers';
import { Category } from '../../utils/types/category';
import { AddCategoryForm } from '../AddCategoryForm/AddCategoryForm';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import './CategoryList.scss';

type Props = {
  openModal: (value: Category | null) => void;
  onAdd: (value: boolean) => void;
  query: string;
  isAddForm: boolean;
}

export const CategoryList: React.FC<Props> = ({ openModal, query, onAdd, isAddForm }) => {
  const categories = useAppSelector(state => state.categories.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategoriesAC(getAll()));
  }, []);

  const addCategoryHandler = () => {
    onAdd(true);
  }

  const onDragEnd = (result: any) => {
    console.log('Moved');
  }

  return (
    <div className="categories">
      <button className="btn btn-block btn-secondary mb10" onClick={addCategoryHandler}>
        + Create a category
      </button>

      <div>
        {isAddForm && (
          <AddCategoryForm />
        )}

        {prepareCategories(categories, query).map(category => (
          <CategoryItem key={category.id} category={category} openModal={openModal} />
        ))}
      </div>
    </div>
  );
}
