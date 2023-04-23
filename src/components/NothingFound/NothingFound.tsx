import { EmptyIcon } from '@/icons/EmptyIcon';
import { useTranslation } from 'react-i18next';

import cls from './NothingFound.module.css';

const NothingFound = () => {
  const { t } = useTranslation();

  return (
  <div className={cls.wrapper}>
    <p className={cls.message}>{t("nothingFound")}</p>
    <EmptyIcon />
  </div>
  )};

export default NothingFound;
