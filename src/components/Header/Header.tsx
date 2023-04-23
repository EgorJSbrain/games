import { CSSProperties, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { userSelector } from '@/store/selectors';
import Button from '@/components/Button';
import SearchInput from '@/components/SearchInput';
import { logout } from '@/store/actions/auth';

import cls from './Header.module.css';

interface HeaderProps {
  style: CSSProperties
}

const Header = memo(({ ...props }: HeaderProps) => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const logoutHandler = () => {
    const username = user.name.split(' ')[0];

    dispatch(logout({
      username: username.toLowerCase(),
    }))
  }

  return (
    <header className={cls.wrapper} {...props}>
      <div className={cls.userBlock}>
        <div className={cls.userInfoWrapper}>
          <img className={cls.avatar} src={user.avatar} />

          <div>
            <p className={cls.username}>{user.name}</p>
            <p className={cls.userinfo}>{user.event}</p>
          </div>
        </div>

        <Button style={{ maxWidth: '96px'}} onClick={logoutHandler}>{t("logout")}</Button>
      </div>

      <div className={cls.searchBlock}>
        <SearchInput />
      </div>
    </header>
  );
})

export default Header;