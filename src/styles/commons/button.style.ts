import styled from "styled-components";

import { SCREEN } from "@consts/style";

export const Button = styled.button`
  display: none;
  background: transparent;
  border: 0;
  cursor: pointer;

  @media screen and (max-width: ${SCREEN.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    width: fit-content;
    height: fit-content;
  }
`;
