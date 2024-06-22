import { Card, Container } from "../../Components";
import { useNavigate } from "react-router";
// import { catalog } from "../../data/catalog";
import { ShowInfos, ShowName } from "../../Components/ShowCard";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Container>
       <Card
              onClick={() => {
                navigate("/catalog")
              }}
            >
              <ShowInfos>
                <ShowName>Catálogo</ShowName>
              </ShowInfos>
            </Card>
       {/* <Card
              onClick={() => {
                // window.location.href = show.url;
              }}
            >
              <ShowInfos>
                <ShowName>Stream</ShowName>
              </ShowInfos>
            </Card> */}
    </Container>
  );
};
