import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/variables";

interface ModalContentProps {
  height?: string;
}

interface CardContentProps {
  bcgImg: string;
}
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const LoadingWaitText = styled.span`
  font-size: 1.5rem;
  color: rgba(250,0,0,0.7);
  animation: ${fadeIn} 2s ease-in-out infinite;
`;