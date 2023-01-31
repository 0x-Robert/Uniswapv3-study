import styled, { css } from "styled-components";
import "./Swap.scss";
import classNames from "classnames";
import Button from "../components/Button";
import React, {useState} from "react";
import Input from "../components/Input"
const SwapTemplate = styled.div`
width: 512px;
height: 512px;

position: relative;  /*추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
background: white;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);

margin 0 auto; /*페이지 중앙에 나타나도록 설정 */


margin-top: 96px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: white;
`;

const InputStyle= styled.button`
margin-top: 96px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
padding-right: 10px;
position: relative;
margin 0 auto;
margin-top: -300px;
margin-bottom: -50px;
`


const InputStyle2= styled.button`
margin-top: 96px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
padding-right: 10px;
position: relative;
margin 0 auto;
margin-top: -100px;
margin-bottom: 62px;
`


function Swap({ children }) {

  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  //<Input autoFocus placeholder="" onChange={onChange} value={value}/>

  return (
    <div>
      <SwapTemplate>{children}</SwapTemplate>
      <InputStyle><Input value={value} onChange={(e)=>{
        setValue(e.target.value)
      }} /></InputStyle>
       <InputStyle2><Input value={value} onChange={(e)=>{
        setValue(e.target.value)
      }} /></InputStyle2>

    </div>
  );
}

export default Swap;
