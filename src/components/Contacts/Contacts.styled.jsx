import styled from 'styled-components';
import { BiSolidTrash } from 'react-icons/bi';
export const List = styled.ul`
  list-style: none;
  margin: 30px auto 60px auto;
  padding: 0;
  width: 600px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 560px;
  height: 70px;
  border-radius: 12px;
  background-color: #9f94ab7f;
  box-shadow: 9px -1px 8px 1px rgba(0, 0, 0, 0.76);
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
export const Name = styled.span`
  font-size: 30px;
  font-weight: 500;
`;
export const Number = styled.span`
  font-size: 28px;
  font-weight: 500;
  font-style: italic;
`;
export const Button = styled.button`
  display: block;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: rgba(30, 0, 255, 0.496);
  transition: box-shadow 250ms ease-in;
  &:hover,
  &:focus {
    box-shadow: 3px 1px 32px 0px rgba(28, 18, 227, 1);
  }
`;
export const TrashIcon = styled(BiSolidTrash)`
  height: 24px;
  width: 24px;
  fill: #000000ae;
  pointer-events: none;
`;
