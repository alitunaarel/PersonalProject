import styled from "styled-components";

export const ButtonWrapper = styled.div<{ disabled?: boolean }>`
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  height: 2.5rem;
  width: fit-content;
`;

export const ButtonContainer = styled.button.attrs(
  (props: {
    color?: string;
    height?: string;
    width?: string;
    border?: string;
    borderRadius?: string;
  }) => {
    const color = () => {
      if (props.color) return props.color;
      return "#6e6e6e";
    };
    const width = () => {
      if (props.width) return props.width;
      return "auto";
    };
    const height = () => {
      if (props.height) return props.height;
      return "auto";
    };
    return {
      width: width(),
      color: color(),
      height: height(),
      borderRadius: props.borderRadius || "0.25rem",
    };
  }
)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-weight: 600;
  padding: 0 1.25rem;
  min-height: 2.5rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  margin: 2.5rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
`;

export const ButtonLabel = styled.span`
  display: flex;
`;
