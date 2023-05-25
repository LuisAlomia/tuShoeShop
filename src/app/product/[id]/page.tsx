import Container from "@/components/Container";
import ProductImages from "./components/ProductImages";
import ProductDescription from "./components/ProductDescription";
import ProductDetail from "./components/ProductDetail";
import { fectchProductById } from "@/services/fectchProductById";
import ProductReview from "./components/ProductReview";

type Porp = {
  params: {
    id: string;
  };
};

const page = ({ params }: Porp) => {
  const data = fectchProductById(
    params.id.replaceAll("%", " ").replaceAll("20", "")
  );

  return (
    <Container>
      <article>
        {data && (
          <div className="mb-8">
            <div className="flex justify-center items-center gap-4 mb-8 max-[700px]:flex-col">
              <div className="mx-auto">
                <ProductImages image={data.image} />
              </div>
              <ProductDetail data={data} />
            </div>
            <ProductDescription description={data.description} />
            <ProductReview reviews={data.review} />
          </div>
        )}
      </article>
    </Container>
  );
};

export default page;
