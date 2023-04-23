import { useTranslation } from 'react-i18next';
import { GameType } from '@/types/global';
import { ButtonColorType } from '@/constants/global';
import { createDomElementForIframe } from '@/utils/createDomElementForIframe';
import Button from '@/components/Button';

import cls from './GameItem.module.css';

interface GameItemProps {
  item: GameType;
}

const GameItem = ({ item }: GameItemProps) => {
  const { t } = useTranslation();

  const playGameHandler = () => {
    createDomElementForIframe();

    // @ts-ignore
    window.comeon.game.launch(item.code);
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.avatarWrapper}>
        <img src={item.icon} />
      </div>

      <div className={cls.info}>
        <p className={cls.gameName}>{item.name}</p>
        <p className={cls.description}>{item.description}</p>
        <div className={cls.btnWrapper}>
          <Button onClick={playGameHandler} color={ButtonColorType.green}>{t("play")}</Button>
        </div>
      </div>
    </div>
  )
}

export default GameItem;