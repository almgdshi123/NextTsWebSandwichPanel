import ProductView from "@/components/contentView/ProductView";
import { dataDetails } from "@/components/dataDetails";
export async function generateStaticParams() {
  const paths = dataDetails.flatMap((product) =>
    product.data.map((productData) => ({
      product: product.href,

      productId: productData.id.toString(),
    }))
  );

  return paths; // Or 'blocking' if you know all paths
}

export default function Page(props) {
  const { productId } = props.params;

  const product = dataDetails.find((product) =>
    product.data.find((data) => data.id == productId)
  );
  if (!product) return null;
  metadata.title = product.data[0].title;
  metadata.description = product.data[0].description;
  metadata.keywords = product.data[0].keywords;
  metadata.author = product.data[0].author;
  metadata.og.url = product.data[0].og.url;
  metadata.og.type = product.data[0].og.type;
  metadata.twitter.title = product.data[0].title;

  return (
    <div>
      <ProductView data={product} />
    </div>
  );
}
export const metadata = {
  title: " ",
  description: "",
  keywords: "",
  author: "",
  og: {
    url: "",
    type: "",
  },
  twitter: {
    title: "",
  },
};
