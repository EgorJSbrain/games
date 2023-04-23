import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '@/components/Button';
import { ButtonColorType, ROUTES } from '@/constants/global';

import cls from './NotFound.module.css'

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={cls.wrapper}>
      <p className={cls.title}>{t("sorry")}</p>
      <p className={cls.info}>{t("pageNotFound")}</p>
      <NavLink to={ROUTES.home}>
        <Button color={ButtonColorType.green}>{t("goTo", { where: "home" })}</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;
