import { AlertTypes } from "@/constants/global";

import cls from './Alert.module.css'

interface AlertProps {
  statusType: AlertTypes;
  message: string;
}

const Alert = ({ message, statusType }: AlertProps) => (
  <div className={`${cls.alert} ${cls[statusType]}`}>{message}</div>
);

export default Alert;
