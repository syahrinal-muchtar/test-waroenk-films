import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { rupiah } from "src/shared/constants/constant";
import { CartListType } from "src/shared/helpers/api";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const CartItem = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 70% 29%;

  & > div {
    text-align: center;
    padding-top: 5px;
    padding-left: 2px;
    padding-right: 2px;
    font-size: 20px;
    border-style: solid;
    border-color: #e6e6ec;
  }

  & > .title {
    text-align: left;
  }

  & > .price {
    text-align: right;
  }

  & > .total {
    text-align: center;
  }
`;

const BtnDelete = styled.span`
  font-size: 1rem;
  color: red;
  text-transform: capitalize;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
  cursor: pointer;
  margin-left: 10px;
`;

interface FilmCartType {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
  cartList: CartListType[];
  subTotal: number;
  removeCart: (id: any, price: any) => void;
  clearCart: () => void;
}

export default function FilmCartType({
  showCart,
  setShowCart,
  cartList,
  subTotal,
  removeCart,
  clearCart,
}: FilmCartType) {
  return (
    <Modal show={showCart} onHide={() => setShowCart(false)} size={"lg"}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          {cartList.map((item) => (
            <CartItem>
              <div className="title">
                {item.title}
                <BtnDelete onClick={() => removeCart(item.id, item.price)}>
                  Delete
                </BtnDelete>
              </div>
              <div className="price">{rupiah(item.price ?? 0)}</div>
            </CartItem>
          ))}
          <CartItem>
            <div className="title total">Subtotal</div>
            <div className="price total">{rupiah(subTotal)}</div>
          </CartItem>
        </>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <Button variant="danger" onClick={() => clearCart()}>
            Clear Cart
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
