import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';


export const useGenerateSearchUrl = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = useCallback(<T,>(params: T | null) => {
    if (params) {
      navigate({
        pathname: location.pathname,
        search: queryString.stringify(params, { arrayFormat: 'comma' }),
      })
    }
  }, [location.pathname, navigate]);

  return redirect;
};
