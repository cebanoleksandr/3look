import { Category } from "./types/category";

export const prepareCategories = (categories: Category[], query: string) => {
  let preparedCategories = [...categories];
  const normalizedQuery = query.trim().toLowerCase();

  if (!!query) {
    preparedCategories = preparedCategories
      .filter(category => category.title.toLowerCase().includes(normalizedQuery));
  }

  return preparedCategories;
}
