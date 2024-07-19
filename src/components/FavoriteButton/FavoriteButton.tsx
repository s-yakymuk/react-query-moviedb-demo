import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

import useMarkFavorite from "@/hooks/useMarkFavorite";
import useFavoriteMovies from "@/hooks/useFavoriteMovies";

import { MovieDetailsModel, MovieModel } from "@/models";

interface Props {
  movie: MovieModel | MovieDetailsModel;
}

const FavoriteButton = ({ movie }: Props) => {
  const { mutate: markFavorite } = useMarkFavorite();
  const { data: movieIds = [], isLoading } = useFavoriteMovies();
  const isFavorite = movieIds.includes(movie.id);

  return (
    <Button
      type="text"
      shape="circle"
      disabled={isLoading}
      icon={isFavorite ? <StarFilled /> : <StarOutlined />}
      aria-label={`${isFavorite ? "Unmark" : "Mark"} ${
        movie.title
      } as Favorite`}
      onClick={() =>
        markFavorite({ media_id: movie.id, favorite: !isFavorite })
      }
    />
  );
};

export default FavoriteButton;
