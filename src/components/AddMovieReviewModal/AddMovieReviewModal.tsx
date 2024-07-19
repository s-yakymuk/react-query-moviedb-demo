import { useEffect } from "react";
import { Modal, Input, Form } from "antd";

import { DraftReviewModel } from "@/models";

import useAddMovieReview from "@/hooks/useAddMovieReview";

interface Props {
  movieId: number;
  isOpen: boolean;
  onClose: () => void;
}

const getDraftReview = (movieId: number): DraftReviewModel => ({
  movieId,
  authorName: "",
  title: "",
  text: "",
  rating: 0,
});

const MovieReviews = ({ movieId, isOpen, onClose }: Props) => {
  const [form] = Form.useForm();
  const { mutate: addMovieReview } = useAddMovieReview(onClose);

  useEffect(() => {
    if (isOpen) {
      form.resetFields();
    }
  }, [isOpen, movieId, form]);

  return (
    <Modal
      title="Add Movie Review"
      open={isOpen}
      onCancel={onClose}
      onOk={() => form.submit()}
    >
      <Form<DraftReviewModel>
        name="add-movie-review"
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={getDraftReview(movieId)}
        onFinish={(values) => addMovieReview({ ...values, movieId })}
        autoComplete="off"
      >
        <Form.Item<DraftReviewModel>
          label="Author"
          name="authorName"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<DraftReviewModel>
          label="Rating"
          name="rating"
          getValueFromEvent={(e) => Number(e.target.value)}
          rules={[{ required: true, message: "Rating is required" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item<DraftReviewModel>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter review title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<DraftReviewModel>
          label="Review"
          name="text"
          rules={[{ required: true, message: "Review text is required" }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MovieReviews;
