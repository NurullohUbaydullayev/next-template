import { createStore, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { useEffect } from "react";

const initialState = {
  lang: "ru",
};

const count = function reducer(state = initialState, action) {
  switch (action.type) {
    case "en":
      window.localStorage.setItem("lang", "en");
      return { ...state, lang: "en" };
    case "ru":
      window.localStorage.setItem("lang", "ru");
      return { ...state, lang: "ru" };
    case "uz":
      window.localStorage.setItem("lang", "uz");
      return { ...state, lang: "uz" };
    default:
      return state;
  }
};

const combineReducer = combineReducers({ count });

const initialStore = () => {
  return createStore(combineReducer);
};

export const wrapper = createWrapper(initialStore);
