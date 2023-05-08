import styled, { css } from "styled-components";

const getPositionCss = ($position: "top" | "bottom" | "middle") => {
  switch ($position) {
    case "top":
      return css`
        top: 0;
        border-radius: 0 0 5px 5px;
      `;
    case "bottom":
      return css`
        bottom: 0;
        border-radius: 5px 5px 0 0;
      `;
    case "middle":
      return css`
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;
      `;
  }
};

const S = {
  Backdrop: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.35);
  `,

  ModalContainer: styled.div<{
    $backgroundColor: string;
    $position: "top" | "bottom" | "middle";
  }>`
    position: fixed;
    width: 100%;
    height: 40%;

    ${(props) =>
      css`
        ${getPositionCss(props.$position)}
      `};

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.$backgroundColor};
  `,
};

export default S;
