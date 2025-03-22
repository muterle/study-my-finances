import styled from "styled-components";

export const ButtonElement = styled.button<{
  $borderRadius: string;
  $size: string;
  $width: string;
}>`
  width: ${(props) =>
    props.$borderRadius === "rounded" ? (props.$size === "sm" ? "40%" : "48px") : props.$width};
  height: ${(props) =>
    props.$borderRadius === "rounded" && (props.$size === "sm" ? "40%" : "48px")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) =>
    props.$borderRadius !== "rounded" && (props.$size === "sm" ? "5px" : "11px")};
  outline: none;
  border: none;
  border-radius: ${(props) =>
    props.$borderRadius === "sm" ? "5px" : props.$borderRadius === "md" ? "11px" : "50%"};
  font-weight: 600;
  background-color: ${(props) => props.theme.COLORS.buttonBackground};
  color: ${(props) => props.theme.COLORS.buttonColor};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.COLORS.buttonHover};
  }
`;
