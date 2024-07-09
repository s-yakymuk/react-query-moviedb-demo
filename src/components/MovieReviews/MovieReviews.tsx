import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Loader from "@/components/Loader";
import MovieReview from "@/components/MovieReview";

import useMovieReviews from "@/hooks/useMovieReviews";

import "./MovieReviews.css";

interface Props {
  movieId: number;
}

const MovieReviews = ({ movieId }: Props) => {
  const { data: reviews, isLoading, isFetched } = useMovieReviews(movieId);

  return (
    <div className="rqe__movie-reviews">
      <div className="rqe__movie-reviews-header">
        <h2>Reviews</h2>
        <Button type="primary" icon={<PlusCircleOutlined />}>
          Add Review
        </Button>
      </div>
      {isLoading && <Loader text="Loading reviews..." />}
      {isFetched && !reviews?.length && (
        <div className="rqe__movie-reviews-empty">No Reviews</div>
      )}
      {reviews?.map((review) => (
        <MovieReview key={review.id} review={review} />
      ))}
    </div>
  );
};

export default MovieReviews;
