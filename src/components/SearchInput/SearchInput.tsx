import { ChangeEvent, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import queryString from "query-string";

import { useGenerateSearchUrl } from '@/hooks/useGenerateSearchUrl';
import useDebounce from '@/hooks/useDebounce';
import Input from '@/components/Input';

const SearchInput = memo(() => {
  const redirect = useGenerateSearchUrl();
  const location = useLocation();
  const debounce = useDebounce();
  const { t } = useTranslation();

  const { categoryId, search } = queryString.parse(location.search);

  const inputHandler = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;

    redirect({
      categoryId,
      search: searchValue ? searchValue : undefined,
    })
  }, 300)

  return (
    <Input
      defaultValue={search ?? ""}
      iconLink="./public/search.svg"
      placeholder={t("searchGame")}
      onChange={inputHandler}
    />
  );
});

export default SearchInput;
