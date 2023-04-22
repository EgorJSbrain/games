import { memo, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from "query-string";

import { getCategories } from '@/store/actions/categories';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { categoriesSelector } from '@/store/selectors/categories';
import { useGenerateSearchUrl } from '@/hooks/useGenerateSearchUrl';
import HeaderBlock from '@/components/HeaderBlock';
import NavigationItem from '@/components/NavigationItem';

import cls from './Navigation.module.css';

const Navigation = memo(() => {
  const dispatch = useAppDispatch();
  const redirect = useGenerateSearchUrl();
  const location = useLocation();

  const { categoryId, search } = queryString.parse(location.search);

  const categories = useAppSelector(categoriesSelector);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const navigationHandler = useCallback((category: number) => {
    redirect({
      search,
      categoryId: category === 0 ? undefined : category,
    })
  }, [search])

  return (
    <div className={cls.wrapper}>
      <HeaderBlock title="Categories" style={{ marginBottom: "12px" }} />
      <>
        {categories.map((category) => (
          <NavigationItem
            key={category.id}
            setNavigation={navigationHandler}
            item={category}
            isActive={categoryId ? category.id === +(categoryId) : category.id === 0}
          />
        ))}
      </>
    </div>
  );
});

export default Navigation;
