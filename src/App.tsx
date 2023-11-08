import React, { useState } from 'react';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { CategoryList } from './components/CategoryList/CategoryList';
import { AddCategoryModal } from './components/AddCategoryModal/AddCategoryModal';
import { BackDrop } from './components/BackDrop/BackDrop';
import { removeCategory } from './api/category';
import { deleteCategoryAC } from './redux/categoriesReducer';
import { useAppDispatch } from './redux/hooks';
import { Category } from './utils/types/category';

export const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [query, setQuery] = useState('');
  const [isAddForm, setIsAddForm] = useState(false);
  const dispatch = useAppDispatch();

  const removeHandler = (categoryId: number) => {
    removeCategory(categoryId);
    setSelectedCategory(null);
    dispatch(deleteCategoryAC(categoryId));
  }

  return (
    <div className="app">
      <Header query={query} changeQuery={setQuery} />

      <div className="container">
        <CategoryList
          openModal={setSelectedCategory}
          query={query}
          onAdd={setIsAddForm}
          isAddForm={isAddForm}
        />
      </div>

      {!!selectedCategory && (
        <>
          <AddCategoryModal
            onRemove={() => removeHandler(selectedCategory.id)}
            onCancel={() => setSelectedCategory(null)}
          />
          
          <BackDrop onClick={() => setSelectedCategory(null)} />
        </>
      )}

      {isAddForm && (
        <Footer onAdd={setIsAddForm} />
      )}
    </div>
  );
}
