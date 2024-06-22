import styled from "styled-components";
import { colors } from "../utils/variables";

interface ModalContentProps{
    height?: string;
}

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 11;
`;

export const ModalContent = styled.div<ModalContentProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    height: ${({height}) => height || "50%"};
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000;
    color: ${colors.blue_text};
    position: relative;
    overflow-y: auto;
`;