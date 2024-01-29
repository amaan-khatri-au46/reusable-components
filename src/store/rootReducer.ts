/** @format */

import { combineReducers, CombinedState, AnyAction, Reducer } from "redux";

import RtkQueryService from "@/services/RtkQueryService";

import auth, { AuthState } from "./slices/auth";
import base, { BaseState } from "./slices/base";
import global, { GlobalState } from "./slices/global/globalSlice";
import locale, { LocaleState } from "./slices/locale/localeSlice";
import stock, { StockState } from "./slices/stock";
import theme, { ThemeState } from "./slices/theme/themeSlice";

export type RootState = CombinedState<{
  auth: CombinedState<AuthState>;
  base: CombinedState<BaseState>;
  locale: LocaleState;
  theme: ThemeState;
  stock: CombinedState<StockState>;
  global: CombinedState<GlobalState>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [RtkQueryService.reducerPath]: any;
}>;

export interface AsyncReducers {
  [key: string]: Reducer<any, AnyAction>;
}

const staticReducers = {
  auth,
  base,
  locale,
  theme,
  global,
  stock,
  [RtkQueryService.reducerPath]: RtkQueryService.reducer,
};

const rootReducer =
  (asyncReducers?: AsyncReducers) => (state: RootState, action: AnyAction) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    });
    return combinedReducer(state, action);
  };

export default rootReducer;
