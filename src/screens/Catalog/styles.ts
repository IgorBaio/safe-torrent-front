import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 120px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  /* border: 2px solid rgba(140, 140, 140, 0.6);
  box-shadow: 2px 4px 8px 4px rgba(140, 140, 140, 0.6); */
  position: absolute;
  top:25px;
  background-color: #0E0412;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  color: rgba(140,140,140,0.6);
  background-color: #0E0412;
  box-shadow: 2px 4px 8px 4px rgba(140,140,140,0.6);
  border: 1px solid rgba(140,140,140,0.6);
  border-radius: 10px;

  &:focus {
    box-shadow: 2px 4px 8px 4px  rgba(250, 0, 0, 0.6), 0 0 5px rgba(0, 123, 255, 0.5);
    color: rgba(250, 0, 0, 0.6);
  }

  
`;

export const PaginationContainer = styled.div`
  position:fixed;
  bottom: 0;
  width: 90%;
  background-color: rgba(14,4,38,1);
  z-index: 11;
  padding: 10px;
  color: rgba(140, 140, 140, 0.6);
  
  border-radius: 10px;
  display: flex;
  justify-content: center;

`;

export const SearchButtonContainer = styled.div`
  width: 48px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(140,140,140,0.6);
  cursor: pointer;
  box-shadow: 2px 4px 8px 4px rgba(140,140,140,0.6);
  border: 1px solid rgba(140,140,140,0.6);
  border-radius: 10px;
  margin: 5px;

  &:hover {
    box-shadow: 2px 4px 8px 4px  rgba(250, 0, 0, 0.6);
    color: rgba(250, 0, 0, 0.6);
  background-color: rgba(250, 0, 0, 0.6);

  }
`