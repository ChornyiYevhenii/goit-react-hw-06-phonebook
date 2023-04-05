import styled from 'styled-components';
import { Field, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px 0;
  text-align: end;

`;

export const Label = styled.label`
font-size: 24px;
font-weight: 500;
padding-bottom: 5px;
`;

export const InputContainer = styled.div`

`;

export const StyledField = styled(Field)`
/* display: flex; */
/* flex-direction: column; */
/* text-align: end; */
margin-top: 5px;
padding: 8px;
background: transparent;
border: 3px solid #6b80d6;
border-radius: 5px;
margin-left: 10px;
font-size: 16px;
&:focus {
  outline: 1px solid #6b25d6;
}
::placeholder {
  text-align: left;
}
`;

export const Button = styled.button`
font-size: 20px;
border-radius:10px;
margin-top: 20px;
color:black;
background-color:#6bb0d6;
padding: 10px 20px;
:hover {
  color: #fff;
  background-color:#27996b;
}     
`;

export const LabelContainer = styled.div`
:not(:last-of-type) {
   padding-bottom: 10px;
}
`;
