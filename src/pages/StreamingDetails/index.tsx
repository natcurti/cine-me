import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { http_tmdb } from "src/http/http-tmdb";
import {
  ButtonIcon,
  ContainerError,
  ContainerIcons,
  ContainerText,
  IframeStyled,
  MainStyled,
  SectionMoviesToYou,
  SectionDetails,
  Container,
  ContainerCards,
} from "./styled";
import Typography from "src/components/Typography";
import { IStreamingItem } from "src/interfaces/IStreamingItem";
import Tags from "src/components/Tags";
import { PiListPlusBold } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import Button from "src/components/Button";
import { formatDate } from "src/utils/formatDate";
import Card from "src/components/Card";

const StreamingDetails = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [typeOfStreaming, setTypeOfStreaming] = useState<"movie" | "tv">();
  const [videoKey, setVideoKey] = useState("");
  const [url, setUrl] = useState("");
  const [streamingItem, setStreamingItem] = useState<IStreamingItem>({});
  const [recommendations, setRecommendations] = useState<IStreamingItem[]>([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  console.log(streamingItem);

  useEffect(() => {
    if (pathname.startsWith("/filmes")) {
      setTypeOfStreaming("movie");
      setUrl(`/movie/${id}`);
      return;
    }
    if (pathname.startsWith("/series")) {
      setTypeOfStreaming("tv");
      setUrl(`/tv/${id}`);
      return;
    }
  }, [pathname, id]);

  useEffect(() => {
    if (url) {
      http_tmdb
        .get(`${url}/videos`)
        .then((response) => setVideoKey(response.data.results[0].key))
        .catch(() => setError(true));

      http_tmdb
        .get(`${url}`)
        .then((response) => setStreamingItem(response.data))
        .catch(() => setError(true));

      http_tmdb
        .get(`${url}/recommendations`)
        .then((response) =>
          setRecommendations(response.data.results.slice(0, 6))
        )
        .catch(() => setError(true));
    }
  }, [url]);

  return (
    <MainStyled>
      {!error ? (
        <>
          {Object.keys(streamingItem).length > 0 && (
            <Container>
              <SectionDetails>
                <IframeStyled
                  src={`https://youtube.com/embed/${videoKey}`}
                ></IframeStyled>
                <div>
                  <Typography element="h1" variant="h3">
                    {streamingItem.title ?? streamingItem.name}
                  </Typography>
                  <Typography element="h2" variant="p">
                    Lançado em:{" "}
                    {streamingItem.release_date
                      ? formatDate(streamingItem.release_date)
                      : "Data indisponível."}
                  </Typography>
                </div>
                {streamingItem.genres ? (
                  <Tags genres={streamingItem.genres} />
                ) : (
                  <Tags genresIds={streamingItem.genre_ids} />
                )}
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
                  <p>{streamingItem.overview}</p>
                </ContainerText>
              </SectionDetails>
              <SectionMoviesToYou>
                <Typography element="h3" variant="h4">
                  Relacionados
                </Typography>
                <ContainerCards>
                  {recommendations.map((item) => (
                    <Card
                      itemToShow={item}
                      type={typeOfStreaming}
                      key={item.id}
                    />
                  ))}
                </ContainerCards>
              </SectionMoviesToYou>
            </Container>
          )}
        </>
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
