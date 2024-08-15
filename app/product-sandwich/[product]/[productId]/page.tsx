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
  const productId = decodeURIComponent(props.params.productId);
  const product = decodeURIComponent(props.params.product);

  const productData = dataDetails.find((item) => item.href === product);
  if (productData) {
    productData.data = productData.data.filter((item) => item.id == productId);
  }
  if (!productData) return null;
  metadata.title = productData.data[0].title;
  metadata.description = productData.data[0].og.description;
  metadata.keywords = productData.data[0].keywords;
  metadata.author = productData.data[0].author;
  metadata.openGraph.url = productData.data[0].og.url;
  metadata.openGraph.site_name = productData.data[0].og.site_name;
  metadata.openGraph.title = productData.data[0].og.title;
  metadata.openGraph.description = productData.data[0].og.description;
  metadata.openGraph.images.url = productData.data[0].og.image;
  metadata.openGraph.type = productData.data[0].og.type;
  metadata.twitter.title = productData.data[0].title;
  metadata.twitter.images.url = productData.data[0].twitter.image;
  metadata.twitter.card = productData.data[0].twitter.card;

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
    images: 
    {
      url: "you_url_here",
      alt: "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",



    },
    type: "",
    locale: "ar_AR",
  },
  twitter: {
    title: "",
    card: "summary_large_image",
    images: 
      {
        url: "you_url_here",
       
        alt: "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",

 
      }
  },
};
