import cls from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  iconLink?: string;
}

const Input = ({ placeholder, isError, iconLink, ...props }: InputProps) => (
  <input
    {...props}
    style={{ background: `url(${iconLink}) no-repeat right` }}
    className={isError ? cls.error : ""}
    placeholder={placeholder}
  />
);

export default Input;
