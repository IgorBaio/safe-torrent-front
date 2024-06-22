import styled from "styled-components";
import { TabBarIconProps } from "./types";
import { colors } from "../../utils/variables";

export const TabBarContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #e0e0e0;
`;

export const TabBarContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const TabBarIcon = styled.img<TabBarIconProps>`
    width: 20px;
    height: 20px;
    cursor: pointer;
    padding: 10px;
    border-radius: 15%;
    background-color: ${({focused}: TabBarIconProps) => focused ? colors.grey_1 : 'transparent' };
`;