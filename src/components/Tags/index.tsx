import { useGenreContext } from "src/hooks/custom";
import { TagsContainer, TagSyled } from "./styled";

const Tags = ({ ids }: { ids: number[] }) => {
  const { moviesGenres } = useGenreContext();

  const tagsToShow = ids
    .map((id) => moviesGenres.filter((genre) => genre.id === id))
    .flat();

  return (
    <TagsContainer>
      {tagsToShow.map((tag) => (
        <TagSyled key={tag.id}>{tag.name}</TagSyled>
      ))}
    </TagsContainer>
  );
};

export default Tags;
