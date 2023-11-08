import { Category } from "../utils/types/category";

let categoriesFromServer: Category[] = [
  { id: 1, title: 'Popular', isActive: true },
  { id: 2, title: 'New', isActive: true },
  { id: 3, title: 'NFT Paris', isActive: true },
  { id: 4, title: 'NFT London', isActive: false },
  { id: 5, title: 'GM', isActive: true },
  { id: 6, title: 'GN', isActive: false },
  { id: 7, title: 'New Year', isActive: true },
  { id: 8, title: 'NFT Celebration', isActive: true },
  { id: 9, title: 'Other', isActive: true },
];

export const getAll = () => {
  return categoriesFromServer;
}

export const getCategoryById = (categoryId: number) => {
  return categoriesFromServer.find(category => category.id === categoryId) || null;
}

export const removeCategory = (categoryId: number) => {
  categoriesFromServer = categoriesFromServer.filter(category => category.id !== categoryId);
}

export const createCategory = (title: string) => {
  const newCategory = {
    title,
    isActive: false,
    id: +new Date(),
  }
  categoriesFromServer.push(newCategory);

  return newCategory;
}

export const updateCategory = (category: Category) => {
  categoriesFromServer = categoriesFromServer.map(item => {
    if (item.id === category.id) {
      return category;
    }

    return item;
  })

  return category;
}
