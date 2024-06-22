import styled from "styled-components";
import { colors } from "../utils/variables";

interface ModalContentProps {
  height?: string;
}

interface CardContentProps {
  bcgImg: string;
}

export const Card = styled.div`
  width: 80%;
  max-width: 375px;
  border-radius: 10px;
  box-shadow: 2px 8px 12px 4px rgba(250, 0, 0, 0.5);
  background-color: rgba(14,4,38,1);
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const Background = styled.img`
  width: 100%;
  min-height: 175px;
  max-height: 230px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ShowInfos = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  background-color: rgba(14,4,38,1);
  border-radius: 10px;
`;

export const ShowName = styled.h2`
  margin: 10px 0;
  font-size: 18px;
  color: rgba(200,0,58,0.7);
  text-align: center;
  background-color: rgba(14,4,38,1);
`;
