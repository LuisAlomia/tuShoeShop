import { Review } from "@/types/review.type";
import React from "react";

type Prop = {
  reviews: Review[];
};

const ProductReview = ({ reviews }: Prop) => {
  return (
    <div className="mb-10 p-4">
      <p className="card-title mb-4 font-semibold">Reseñas</p>
      {reviews.map((review: Review) => (
        <div key={review.id} className="mb-2 border rounded-md shadow-md p-3">
          <p className="font-semibold capitalize">{review.name}</p>
          <p className="text-justify">{review.message}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductReview;
