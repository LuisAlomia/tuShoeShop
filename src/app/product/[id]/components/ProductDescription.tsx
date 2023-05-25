import React from "react";

interface Props {
  description: string;
}

const ProductDescription = ({ description }: Props) => {
  return (
    <div className="mb-10 p-4">
      <p className="card-title mb-4 font-semibold">Descripción</p>
      <p className="text-justify border rounded-md shadow-md p-3">
        {description}
      </p>
    </div>
  );
};

export default ProductDescription;
