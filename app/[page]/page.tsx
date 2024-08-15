import ProductView from "@/components/contentView/ProductView";
import { dataPageSoe } from "@/components/dataPageSoe";
export async function generateStaticParams() {
  const paths = dataPageSoe.flatMap((product) =>
    product.data.map((productData) => ({
      page: productData.id.toString(),
    }))
  );

  return paths;
}

export default function Page(props) {
  const page = decodeURIComponent(props.params.page);

  const product = "";

  const productData = dataPageSoe.find((item) => item.href === product);
  if (productData) {
    productData.data = productData.data.filter((item) => item.id === page);
  }
  if (productData?.data) {
    metadata.title = productData.data[0].title;
    metadata.description = productData.data[0].og.description;
    metadata.keywords = productData.data[0].keywords;
    metadata.author = productData.data[0].author;
    metadata.openGraph.url = productData.data[0].og.url;
    metadata.openGraph.site_name = productData.data[0].og.site_name;
    metadata.openGraph.title = productData.data[0].og.title;
    metadata.openGraph.description = productData.data[0].og.description;
    metadata.openGraph.image = productData.data[0].og.image;
    metadata.openGraph.type = productData.data[0].og.type;
    metadata.twitter.title = productData.data[0].title;
    metadata.twitter.image = productData.data[0].twitter.image;
    metadata.twitter.card = productData.data[0].twitter.card;
  }
  return (
    <div>
      <ProductView dataDetails={productData} />
    </div>
  );
}
export const metadata = {
  title: " ",
  description: "",
  keywords: "",
  author: "",
  openGraph: {
    url: "",
    title: "",
    site_name: "",
    description: "",
    image: "",
    type: "",
    locale: "ar_AR",
  },
  twitter: {
    title: "",
    card: "summary_large_image",
    image: "",
  },
};
