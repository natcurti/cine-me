import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMoviesContext, useTvShowContext } from "src/hooks/custom";
import { http_tmdb } from "src/http/http-tmdb";
import {
  ButtonIcon,
  ContainerError,
  ContainerIcons,
  ContainerText,
  IframeStyled,
  MainStyled,
  SectionStyled,
} from "./styled";
import Typography from "src/components/Typography";
import { IStreamingItem } from "src/interfaces/IStreamingItem";
import Tags from "src/components/Tags";
import { PiListPlusBold } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import Button from "src/components/Button";
import { formatDate } from "src/utils/formatDate";

const StreamingDetails = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [typeOfStreaming, setTypeOfStreaming] = useState("");
  const [videoKey, setVideoKey] = useState("");
  const [url, setUrl] = useState("");
  const [streamingItem, setStreamingItem] = useState<IStreamingItem[]>([]);
  const [error, setError] = useState(false);
  const { popularMovies } = useMoviesContext();
  const { popularTvShow } = useTvShowContext();
  const navigate = useNavigate();

  console.log(streamingItem);

  useEffect(() => {
    if (pathname.startsWith("/filmes")) {
      setTypeOfStreaming("movie");
      setUrl(`/movie/${id}/videos`);
      return;
    }
    if (pathname.startsWith("/series")) {
      setTypeOfStreaming("tv");
      setUrl(`/tv/${id}/videos`);
      return;
    }
  }, [pathname, id]);

  useEffect(() => {
    if (url) {
      http_tmdb
        .get(url)
        .then((response) => setVideoKey(response.data.results[0].key))
        .catch(() => setError(true));
    }
  }, [url]);

  useEffect(() => {
    if (videoKey) {
      typeOfStreaming === "movie"
        ? setStreamingItem(
            popularMovies.filter((movie) => movie.id === Number(id))
          )
        : setStreamingItem(
            popularTvShow.filter((serie) => serie.id === Number(id))
          );
      return;
    }
  }, [id, popularMovies, popularTvShow, typeOfStreaming, videoKey]);

  return (
    <MainStyled>
      {!error ? (
        <div>
          <IframeStyled
            src={`https://youtube.com/embed/${videoKey}`}
          ></IframeStyled>
          {streamingItem.length > 0 && (
            <SectionStyled>
              <div>
                <Typography element="h1" variant="h3">
                  {streamingItem[0].title ?? streamingItem[0].name}
                </Typography>
                <Typography element="h2" variant="p">
                  Lançado em:{" "}
                  {streamingItem[0]?.release_date
                    ? formatDate(streamingItem[0]?.release_date)
                    : "Data indisponível."}
                </Typography>
              </div>
              <Tags ids={streamingItem[0].genre_ids} />
              <ContainerIcons>
                <ButtonIcon>
                  <PiListPlusBold size={25} />
                  <Typography element="p1" variant="p">
                    Minha Lista
                  </Typography>
                </ButtonIcon>
                <ButtonIcon>
                  <IoShareSocial size={25} />
                  <Typography element="p1" variant="p">
                    Compartilhar
                  </Typography>
                </ButtonIcon>
                <ButtonIcon>
                  <LuDownload size={25} />
                  <Typography element="p1" variant="p">
                    Download
                  </Typography>
                </ButtonIcon>
              </ContainerIcons>
              <ContainerText>
                <Typography element="h3" variant="h4">
                  Descrição
                </Typography>
                <Typography element="p1" variant="p">
                  {streamingItem[0].overview}
                </Typography>
              </ContainerText>
            </SectionStyled>
          )}
        </div>
      ) : (
        <ContainerError>
          <Typography element="subtitle" variant="p">
            Não foi possível carregar as informações.
          </Typography>
          <Button size="sm" onClick={() => navigate("/")}>
            Voltar
          </Button>
        </ContainerError>
      )}
    </MainStyled>
  );
};

export default StreamingDetails;
