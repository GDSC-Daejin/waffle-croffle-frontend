import styled from 'styled-components';

export const TodoWrapper = styled.div`
  display: flex;
  background-color: #212121;
  border-radius: 8px;
  width: 430px;
  height: 52px;
  margin: 10px auto;
  padding: 5px 15px;
  color: white;
  align-items: center;
`;
export const TodoImg = styled.img`
  width: 20px;
  margin: auto 7px;
`;
export const TodoText = styled.div`
  display: block;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.deco};
  margin-left: 7px;
  width: 100%;
`;
export const TodoContent = styled.div`
  font-size: 14px;
  padding-bottom: 3px;
`;
export const TodoCategory = styled.div`
  font-size: 12px;
`;
