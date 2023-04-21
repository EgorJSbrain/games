import cls from './Loader.module.css';

const LOADER_COEFFICIENT = 10;

interface LoaderProps {
  size?: number
}

const Loader = ({ size = 64 }: LoaderProps) =>
  <div style={{
    width: size,
    height: size,
    border: `${size / LOADER_COEFFICIENT}px solid #f3f3f3`,
    borderTop: `${size / LOADER_COEFFICIENT}px solid #8EB50D`,
  }} className={cls.loader}></div>

export default Loader;
