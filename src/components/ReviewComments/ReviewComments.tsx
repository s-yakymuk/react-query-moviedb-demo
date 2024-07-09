import { format } from "date-fns";

import Loader from "@/components/Loader";

import useReviewComments from "@/hooks/useReviewComments";

import "./ReviewComments.css";

interface Props {
  reviewId: string;
}

const ReviewComments = ({ reviewId }: Props) => {
  const { data: comments, isLoading, isFetched } = useReviewComments(reviewId);

  return (
    <section className="rqe__review-comments">
      {isLoading && <Loader text="Loading comments..." />}
      {isFetched && !comments?.length && (
        <div className="rqe__review-comments-empty">No comments yet</div>
      )}
      {comments?.map((comment) => (
        <div key={comment.id} className="rqe__review-comment">
          <div className="rqe__review-comment-author">
            {comment.authorName}, {format(comment.createdDate, "dd MMM yyyy")}
          </div>
          <p>{comment.text}</p>
        </div>
      ))}
    </section>
  );
};

export default ReviewComments;
