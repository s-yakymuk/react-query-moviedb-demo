export interface ReviewModel extends DraftReviewModel {
  id: string;
  createdDate: string;
}

export interface DraftReviewModel {
  authorName: string;
  title: string;
  text: string;
  rating: number;
  movieId: number;
}
