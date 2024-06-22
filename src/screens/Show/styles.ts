import styled from "styled-components";

export const Poster = styled.img`
  width: 393px;
  height: 309px;
  position: absolute;
  top: 25px;
`;

export const TitleShow = styled.span`
  position: absolute;
  top: 349px;
  font-size: 18px;
  font-weight: 700;
  color: rgba(250, 0, 0, 0.7);
  align-self: center;
`;

export const ContainerButtons = styled.div`
  position: absolute;
  top:400px;
`;

export const ButtonDownloadContainer = styled.div`
  width: 80%;
  max-width: 375px;
  border-radius: 10px;
  box-shadow: 2px 8px 12px 4px rgba(14, 4, 200, 1);
  background-color: rgba(250, 0, 0, 0.5);
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 20px;
`;

export const ButtonLabel = styled.span`
  font-size: 14px;
  font-weight: 900;
  margin-bottom: 10px;
  color: rgba(14,4,38,1);
`;

export const ButtonDownload = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
