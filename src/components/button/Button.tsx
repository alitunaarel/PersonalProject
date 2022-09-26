import { FC } from "react";
import { ButtonContainer, ButtonWrapper, ButtonLabel } from "./Button.styles";
import { ButtonTypes } from "./Button.types";

const Button: FC<ButtonTypes> = (props) => {
  const {
    color,
    onClick,
    disabled,
    width,
    height,
    border,
    label,
    dataId = "button-component",
  } = props;

  const onClickHandler = disabled ? () => null : onClick;

  return (
    <ButtonWrapper onClick={onClickHandler}>
      <ButtonContainer
        height={height}
        width={width}
        color={color}
        borderRadius={border}
        data-Id={dataId}
      >
        <ButtonLabel>{label}</ButtonLabel>
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default Button;
