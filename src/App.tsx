import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { ToastContainer, toast } from "react-toastify";
import GlobalStyle from "./shared/styles/base/global";
import { CartListType } from "./shared/helpers/api";

const Header = loadable(() => import("./components/Header/Header"));
const FilmList = loadable(() => import("./components/FilmList/FilmList"));
const FilmDetail = loadable(() => import("./components/FilmDetail/FilmDetail"));
const Footer = loadable(() => import("./components/Footer/Footer"));
const FilmCart = loadable(() => import("./components/FilmCart/FilmCart"));

export default function App() {
  const [subtotal, setSubtotal] = useState<number>(0);
  const [cartList, setCartList] = useState<CartListType[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const AddCart = (id?: number, title?: string, price = 0) => {
    setCartList([...cartList, { id, title, price }]);
    setSubtotal(subtotal + price);
    toast("Add Cart Succesfully!");
  };

  const removeCart = (id: number, price: number) => {
    setCartList((items) => items.filter((item) => item.id !== id));
    setSubtotal(subtotal - price);
    toast("Delete Item Succesfully!");
  };

  const clearCart = () => {
    setCartList([]);
    setSubtotal(0);
    setShowCart(false);
    toast("Clear Cart Succesfully!");
  };

  return (
    <Fragment>
      <Header setShowCart={setShowCart} />
      <Routes>
        <Route path="/film/:id" element={<FilmDetail AddCart={AddCart} />} />
        <Route path="/" element={<FilmList AddCart={AddCart} />} />
      </Routes>
      <Footer subtotal={subtotal} />
      <GlobalStyle />
      <ToastContainer autoClose={500} hideProgressBar />
      <FilmCart
        showCart={showCart}
        setShowCart={setShowCart}
        cartList={cartList}
        subTotal={subtotal}
        removeCart={removeCart}
        clearCart={clearCart}
      />
    </Fragment>
  );
}
