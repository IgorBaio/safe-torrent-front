import { Container } from "../../Components";
import { useNavigate } from "react-router";
// import { catalog } from "../../data/catalog";
import { useEffect, useState } from "react";
import { CatalogResponseType } from "../../functions/types";
import { useIsLoading } from "../../stores/Loading";
import { getShow } from "../../functions/getShows";
import {
  ButtonDownload,
  ButtonDownloadContainer,
  ButtonLabel,
  ContainerButtons,
  Poster,
  TitleShow,
} from "./styles";
import { useShow } from "../../stores/Show";
import { CircularProgress } from "@material-ui/core";
import { ShowModel } from "../../types/ShowTypes";

export const Show = () => {
  const navigate = useNavigate();
  const { setIsLoading, isLoading } = useIsLoading((state) => state);
  console.log('isLoading', isLoading)
  const { showRequest } = useShow((state) => state);

  const [showState, setShowState] = useState<ShowModel>({
    title: "",
    magnetsLinks: [],
  });
  console.log('showState', showState)

  const getShowData = async () => {
    setIsLoading({
      isLoading: true,
    });
    try {
      const showData: ShowModel = await getShow();

      setShowState(showData);
    } catch (error) {}
  };

  useEffect(() => {
    getShowData();
  }, []);

  return (
    <Container>
      <Poster src={showRequest.img} />
      <TitleShow>{showRequest.name}</TitleShow>
      <ContainerButtons>
      {!!showState?.magnetsLinks.length && !isLoading?.isLoading ? (
        showState?.magnetsLinks.map((link) => (
          <ButtonDownloadContainer onClick={()=>{
            window.open(
              link.link,
              '_blank' // <- This is what makes it open in a new window.
              );
          }}>
            <ButtonLabel>{link.label}</ButtonLabel>
            {/* <ButtonDownload>{link.link.slice(0)}</ButtonDownload> */}
          </ButtonDownloadContainer>
        ))
      ) : (
        <CircularProgress />
      )}

      </ContainerButtons>
    </Container>
  );
};
