import { useGenreContext } from "src/hooks/custom";
import { TagsContainer, TagSyled } from "./styled";
import { useEffect, useState } from "react";
import { IGenre } from "src/interfaces/IGenre";

interface ITags {
  genresIds?: number[];
  genres?: {
    id: number;
    name: string;
  }[];
}

const Tags = ({ genresIds, genres }: ITags) => {
  const { moviesGenres } = useGenreContext();
  const [tagsToShow, setTagsToShow] = useState<IGenre[]>([]);

  useEffect(() => {
    if (genresIds) {
      setTagsToShow(
        genresIds
          .map((id) => moviesGenres.filter((genre) => genre.id === id))
          .flat()
      );
    }

    if (genres) {
      setTagsToShow(genres);
    }
  }, [genresIds, moviesGenres, genres]);

  return (
    <TagsContainer>
      {tagsToShow.map((tag) => (
        <TagSyled key={tag.id}>{tag.name}</TagSyled>
      ))}
    </TagsContainer>
  );
};

export default Tags;
