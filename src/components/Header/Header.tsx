import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as Basket } from "src/shared/assets/icon/cart-svgrepo-com.svg";

import { COLOR_GREEN } from "src/shared/styles/themes/colors";

const HeaderStyle = styled.nav`
  display: flex;
  height: 7rem;
  background: ${COLOR_GREEN};
  overflow: hidden;
  & > .logo {
    position: relative;
    left: 5%;
    color: #ff9605;
    font-family: fantasy;
    padding: 25px;
    cursor: default;
  }

  & > .cart {
    position: relative;
    @media (max-width: 767.98px) {
      margin-left: 20rem;
    }
    padding: 15px;
    height: 7rem;
    width: 7rem;
    margin-left: 120rem;
    cursor: pointer;
  }

  & > .cart:hover {
    background-color: #fefbb3;
    color: black;
  }
`;

interface HeaderType {
  setShowCart: (value: boolean) => void;
}

export default function Header({ setShowCart }: HeaderType) {
  return (
    <HeaderStyle>
      <h1 className="logo">Waroenk Films</h1>
      <Basket className="cart" onClick={() => setShowCart(true)} />
    </HeaderStyle>
  );
}
