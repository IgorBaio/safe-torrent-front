import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

// export const Button = styled(Link)`
export const Button = styled.div`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background-color: #007bff;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;