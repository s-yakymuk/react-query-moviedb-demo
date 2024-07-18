import { useState } from "react";
import { format } from "date-fns";
import { Button } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  StarFilled,
} from "@ant-design/icons";

import { ReviewModel } from "@/models";
import { usePrefetchReviewComments } from "@/hooks/useReviewComments";

import ReviewComments from "../ReviewComments";

import "./MovieReview.css";

interface Props {
  review: ReviewModel;
}

const MovieReview = ({ review }: Props) => {
  const [areCommentsOpen, setAreCommentsOpen] = useState(false);
  const prefetchReviewComments = usePrefetchReviewComments();

  return (
    <section className="rqe__movie-review">
      <div>
        <StarFilled /> {review.rating}/10
      </div>
      <h3>{review.title}</h3>
      <div className="rqe__movie-review-author">
        {review.authorName}, {format(review.createdDate, "dd MMM yyyy")}
      </div>
      <p>{review.text}</p>
      <Button
        type="text"
        onClick={() => setAreCommentsOpen(!areCommentsOpen)}
        onMouseEnter={() => prefetchReviewComments(review.id)}
        icon={areCommentsOpen ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      >
        {areCommentsOpen ? "Hide" : "Show"} Comments
      </Button>
      {areCommentsOpen && <ReviewComments reviewId={review.id} />}
    </section>
  );
};

export default MovieReview;
