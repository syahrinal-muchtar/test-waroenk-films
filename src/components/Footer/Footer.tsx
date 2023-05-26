import React, { useState } from "react";
import { rupiah } from "src/shared/constants/constant";
import { COLOR_GREEN } from "src/shared/styles/themes/colors";
import styled from "styled-components";

const FooterStyle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  text-align: left;
  box-sizing: border-box;
  background-color: ${COLOR_GREEN};
  padding-top: 16px;
  padding-bottom: 16px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 971;
`;

const End = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  box-sizing: border-box;
  padding: 0px 40px;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

interface FooterType {
  subtotal: number;
}

export default function Footer({ subtotal }: FooterType) {
  const [show, setShow] = useState(false);
  return (
    <FooterStyle>
      <End>
        <p>
          <span>Subtotal </span>
          <strong>{rupiah(subtotal)}</strong>
        </p>
      </End>
    </FooterStyle>
  );
}
