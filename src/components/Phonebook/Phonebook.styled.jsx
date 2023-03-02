import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 15px;
`;
export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-shadow: 1px 1px 2px #a9a9a9;
`;
export const InputName = styled.input`
  width: 79%;
  border: none;
  box-shadow: 1px 2px 3px #000000;
  border-radius: 3px;
  height: 30px;
  margin-left: 40px;
`;
export const Input = styled.input`
  width: 79%;
  margin-left: 20px;
  border: none;
  box-shadow: 1px 2px 3px #000000;
  border-radius: 3px;
  height: 30px;
`;
export const Button = styled.button`
  padding: 5px;
  margin-top: 10px;
  width: 120px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 3px;
  background: #daa520;
  box-shadow: 3px 3px 5px #696969;
  transition: scale 650ms ease, background 650ms ease, color 650ms ease,
    box-shadow 650ms ease;
  &:hover {
    scale: 1.02;
    background: #daa82c;
    box-shadow: 3px 3px 5px #6d6b6b;
    transition: scale 650ms ease, background 650ms ease, color 650ms ease,
      box-shadow 650ms ease;
`;
