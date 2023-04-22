import { memo } from "react";
import { CategoryType } from "@/types/global";

import cls from './NavigationItem.module.css';

interface NavigationItemProps {
  item: CategoryType,
  isActive?: boolean;
  setNavigation: (id: number) => void;
}

const NavigationItem = memo(
  ({ item, isActive, setNavigation }: NavigationItemProps) => {
    const clickHandler = () => {
      setNavigation(item.id);
    };

    return (
      <div
        onClick={clickHandler}
        className={`${cls.item} ${isActive ? cls.active : ""}`}
      >
        {item.name}
      </div>
    );
  }
);

export default NavigationItem;
