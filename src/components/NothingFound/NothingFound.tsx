import { EmptyIcon } from '@/icons/EmptyIcon';

import cls from './NothingFound.module.css';

const NothingFound = () => (
  <div className={cls.wrapper}>
    <p className={cls.message}>Nothing found</p>
    <EmptyIcon />
  </div>
  );

export default NothingFound;
