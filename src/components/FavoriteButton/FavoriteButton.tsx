import React from "react";
import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

import useMarkFavorite from "hooks/useMarkFavorite";
import useFavoriteMovies from "hooks/useFavoriteMovies";

interface Props {
  id: number;
}

const FavoriteButton = ({ id }: Props) => {
  const { mutate: markFavorite } = useMarkFavorite();
  const { data: movieIds = [], isLoading } = useFavoriteMovies();
  const isFavorite = movieIds.includes(id);

  return (
    <Button
      type="ghost"
      shape="circle"
      disabled={isLoading}
      icon={isFavorite ? <StarFilled /> : <StarOutlined />}
      onClick={() => markFavorite({ media_id: id, favorite: !isFavorite })}
    />
  );
};

export default FavoriteButton;
