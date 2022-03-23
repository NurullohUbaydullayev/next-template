import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const layout = ({ children }) => {
  const langValue = useRef();

  const dispatch = useDispatch();

  const {
    count: { lang },
  } = useSelector((state) => state);

  function getLang() {
    dispatch({ type: window.localStorage.getItem("lang") || "uz" });
  }

  langValue.current = getLang;

  useEffect(() => {
    langValue.current();
  }, []);

  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default layout;
