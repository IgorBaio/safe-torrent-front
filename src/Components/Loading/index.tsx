import { CircularProgress } from "@material-ui/core";
import {
  LoadingContainer,
  LoadingWaitText,
} from "./styles";
// import { catalog } from "../../data/catalog";

export const Loading = () => {


  return (
    <LoadingContainer>
        <CircularProgress />
        <LoadingWaitText>Aguarde aproximadamente 1 min</LoadingWaitText>
    </LoadingContainer>

  );
};
