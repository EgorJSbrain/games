import { memo, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { gamesSelector } from "@/store/selectors";
import { getGames } from "@/store/actions/games";
import Navigation from "@/components/Navigation";
import HeaderBlock from "@/components/HeaderBlock";
import GameItem from "@/components/GameItem";
import NothingFound from "@/components/NothingFound";

import cls from './GamesContent.module.css';
import { useTranslation } from "react-i18next";

const GamesContent = memo(() => {
  const games = useAppSelector(gamesSelector);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getGames());
  }, []);

  const { categoryId, search } = queryString.parse(location.search);

  const filtredGames = useMemo(() => {
    let filtredGames = games;
    if (!categoryId && !search) {
      filtredGames = games;
    }

    if (categoryId) {
      filtredGames = games.filter(game => game.categoryIds.includes(+(categoryId)))
    }

    if (search) {
      filtredGames = filtredGames
        .filter(game => game.name.toLowerCase().includes((search as string).toLowerCase()))
    }

    return filtredGames;
  }, [games, categoryId, search]);


  return (
    <div className={cls.wrapper}>
      <main className={cls.gamesList}>
        <HeaderBlock style={{ marginBottom: '12px' }} title={t("games")} />

        {!filtredGames.length && <NothingFound />}
        {!!filtredGames.length && filtredGames.map(game => <GameItem item={game} key={game.code} />)}
      </main>
      <Navigation />
    </div>
  );
})

export default GamesContent;
