import { Background, Card, Container } from "../../Components";
import { Button, CircularProgress, TablePagination } from "@material-ui/core";
import {
  ButtonsContainer,
  PaginationContainer,
  SearchButtonContainer,
  SearchContainer,
  SearchInput,
} from "./styles";
import { useNavigate } from "react-router";
import { colors } from "../../utils/variables";
// import { catalog } from "../../data/catalog";
import { ShowInfos, ShowName } from "../../Components/ShowCard";
import { useEffect, useState } from "react";
import { getCatalog } from "../../functions/getCatalog";
import {
  CatalogResponseType,
  ShowCatalogType,
} from "../../functions/types";
import Pagination from "@mui/material/Pagination";
import { useIsLoading } from "../../stores/Loading";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";
import { useShow } from "../../stores/Show";
import { Loading } from "../../Components/Loading";

export const Catalog = () => {
  const navigate = useNavigate();

  const [catalog, setCatalog] = useState<CatalogResponseType>({
    totalElementsInPage: 0,
    totalPages: 0,
    content: [],
  });
  const [page, setPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const { setIsLoading, isLoading } = useIsLoading((state) => state);
  const { setShowRequest } = useShow((state) => state);

  const getCatalogData = async () => {
    setIsLoading({
      isLoading: true,
    });
    try {
      const catalogData: CatalogResponseType = await getCatalog({
        page: page.toString(),
        search,
      });

      setCatalog(catalogData);
    } catch (error) {}
  };

  useEffect(() => {
    getCatalogData();
  }, [page, search]);

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          placeholder="Buscar"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchButtonContainer>
          <Search
            style={{
              color: "rgba(14,4,38,0.6)",
            }}
            onClick={() => setSearch(searchInput)}
          />
        </SearchButtonContainer>
      </SearchContainer>

      <ButtonsContainer>
        {!!catalog?.content.length && !isLoading?.isLoading ? (
          catalog?.content.map((show: ShowCatalogType) => (
            <Card
              onClick={() => {
                // window.location.href = show.url;
                setShowRequest({
                  url: show.url,
                  img: show.poster,
                  name: show.title
                })
                navigate('/show')
              }}
            >
              <Background src={show.poster} />
              <ShowInfos>
                <ShowName>{show.title}</ShowName>
              </ShowInfos>
            </Card>
          ))
        ) : (
          <Loading />
        )}
      </ButtonsContainer>

      {!!catalog?.totalPages && (
        <PaginationContainer>
          <Pagination
            count={catalog?.totalPages}
            showFirstButton
            showLastButton
            color="secondary"
            variant="outlined"
            style={{
              color: "red",
            }}
            size="small"
            onChange={(_, value) => setPage(value)}
          />
        </PaginationContainer>
      )}
    </Container>
  );
};
