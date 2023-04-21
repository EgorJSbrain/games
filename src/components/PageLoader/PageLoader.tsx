import Loader from '@/components/Loader';

import cls from './PageLoader.module.css';

const PageLoader = () =>
  <div className={cls.wrapper}>
    <Loader />
  </div>

export default PageLoader;
