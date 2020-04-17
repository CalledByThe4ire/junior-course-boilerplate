import { createSelector } from 'reselect';

const getProductsFilter = ({ products: { filter } }) => {
  return filter;
};

const getProductsList = ({ products: { list } }) => {
  return list;
};

const getPagination = ({ pagination }) => {
  return pagination;
};

const getProductsFilterCategories = state => {
  const {
    products: {
      filter: { categories }
    }
  } = state;
  return categories;
};

const getProductsFilterActiveCategoriesList = createSelector(
  getProductsFilterCategories,
  categories =>
    Object.keys(categories).filter(category => categories[category].isActive)
);

const filterProductsList = createSelector(
  [getProductsFilter, getProductsFilterActiveCategoriesList, getProductsList],
  (filterParams, activeCategoriesList, productsList) => {
    const {
      price: {
        min: { value: minValue },
        max: { value: maxValue }
      },
      discount: {
        total: { value: discountValue }
      }
    } = filterParams;
    const filteredProducts = productsList.filter(
      ({ price, discount: productDiscount }) =>
        price >= minValue &&
        price <= maxValue &&
        productDiscount >= discountValue
    );

    if (activeCategoriesList.length !== 0) {
      return filteredProducts.filter(({ category }) =>
        activeCategoriesList.includes(category)
      );
    }
    return filteredProducts;
  }
);

const isFilteredProductsListEmpty = createSelector(
  filterProductsList,
  filteredProductsList => filteredProductsList.length === 0
);

const getVisibleProductsList = createSelector(
  [getPagination, filterProductsList],
  (pagination, filteredProducts) => {
    const { currentPage, itemsPerPage } = pagination;
    const lastProductIndex = currentPage * itemsPerPage;
    const firstProductIndex = lastProductIndex - itemsPerPage;
    return filteredProducts.slice(firstProductIndex, lastProductIndex);
  }
);

export {
  getProductsFilter,
  getProductsList,
  getProductsFilterActiveCategoriesList,
  filterProductsList,
  isFilteredProductsListEmpty,
  getVisibleProductsList
};