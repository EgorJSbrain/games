import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LoginData } from "@/types/global";
import { AlertTypes, ButtonColorType, ROUTES } from "@/constants/global";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login } from "@/store/actions/auth";
import { authErrorSelector, authLoadingSelector } from "@/store/selectors";
import { AUTH_FAILURE } from "@/store/types";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Alert from "@/components/Alert";

import cls from './LogIn.module.css';

const LogIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const error = useAppSelector(authErrorSelector);
  const isLoading = useAppSelector(authLoadingSelector);

  const [data, setData] = useState<LoginData | null>(null);

  const isDisableBtn = !data?.password || !data?.username || isLoading;

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await dispatch(login(data));

    if (response.player) {
      navigate(ROUTES.home);
    }
  }

  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value
    })
  }, [data]);

  const onFocusHandler = useCallback(() => {
    dispatch({ type: AUTH_FAILURE, payload: '' });
  }, []);

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>{t("LogIn")}</h1>
      <form className={cls.form} onSubmit={submitHandler}>
        <div className={cls.formContent}>
          <Input
            iconLink="./public/user.svg"
            name="username"
            placeholder={t("userName")}
            onFocus={onFocusHandler}
            isError={!!error}
            onChange={inputHandler}
          />
          <Input
            type="password"
            name="password"
            iconLink="./public/lock.svg"
            placeholder={t("password")}
            onFocus={onFocusHandler}
            isError={!!error}
            onChange={inputHandler}
          />
          {error && <Alert message={error} statusType={AlertTypes.error} />}
        </div>

        <Button
          isDisabled={isDisableBtn}
          color={ButtonColorType.grey}
          style={{ marginTop: "24px" }}
          type="submit"
        >
          {t("LogIn")}
        </Button>
      </form>

      <NavLink className={cls.link} to={ROUTES.home}>
        {t("goTo", { where: "about us" })}
      </NavLink>
    </div>
  );
};

export default LogIn;