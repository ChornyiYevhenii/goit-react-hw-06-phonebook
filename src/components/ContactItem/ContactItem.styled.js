import styled from 'styled-components';

export const Button = styled.button`
border-radius:5px;
  border: solid 1px black;
  background-color: #6bb0d6;
  color:black;
  cursor: pointer;
  padding: 2px 5px;
  :hover,
  :focus {
     background-color: white;
  }
  
`;

export const TableRow = styled.tr`
background-color: transparent;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #27996b;
  }
  border: 1px solid green;

`;

export const NumberCeil = styled.td`
  padding: 10px;
  /*   padding-left: 10px;
 */
  text-align: left;
`;

export const NameCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  text-align: center;
  /*   justify-content: center; */
`;

export const ActionCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  text-align: center;
  justify-content: center;
`;
