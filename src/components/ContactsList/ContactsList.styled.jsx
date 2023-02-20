import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 10px;
`;
export const ListItem = styled.li`
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  background: #fff;
`;
export const BoxContactsList = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: row;
  margin-left: auto;
`;
export const Name = styled.p`
  max-width: 45%;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
`;
export const Numbur = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
`;
export const BtnDelete = styled.button`
  padding: 5px;
  width: 100px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
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
  }
`;
