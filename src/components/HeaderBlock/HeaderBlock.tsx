import { CSSProperties } from 'react';

import cls from './HeaderBlock.module.css';

interface HeaderBlockProps {
  title: string;
  style?: CSSProperties;
}

const HeaderBlock = ({ title, style }: HeaderBlockProps) => (
  <div className={cls.wrapper} style={style}>
    <p className={cls.title}>{title}</p>
    <>1</>
  </div>
);

export default HeaderBlock;