import styled, { css } from "styled-components";

function TextInput(props) {
  return (
    <StyledInput
      padding={props.padding}
      width={props.width}
      height={props.height}
      background={props.background}
      margin={props.margin}
      marginTop={props.marginTop}
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      marginBottom={props.marginBottom}
      textSize={props.textSize}
      textColor={props.textColor}
      fontWeight={props.fontWeight}
      border={props.border}
      radius={props.radius}
    >
      {props.title}
    </StyledInput>
  );
}

const StyledInput = styled.textarea`
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  //margin : ${(props) => props.margin};
  margin: 0 auto;
  display: block;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: ${(props) => props.textSize};
  color: ${(props) => props.textColor};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};

  font-family: "Noto Sans KR", sans-serif;
`;

export default TextInput;
