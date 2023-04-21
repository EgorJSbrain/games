import { NavLink } from 'react-router-dom';
import Button from '@/components/Button';
import { ButtonColorType, ROUTES } from '@/constants/global';

import cls from './NotFound.module.css'

const NotFound = () => <div className={cls.wrapper}>
  <p className={cls.title}>Sorry!!!</p>
  <p className={cls.info}>PAGE NOT FOUND</p>
  <NavLink to={ROUTES.home}>
    <Button color={ButtonColorType.green}>Go to home</Button>
  </NavLink>
</div>

export default NotFound;
