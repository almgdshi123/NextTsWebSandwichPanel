import ProductView from "@/components/contentView/ProductView";
import { dataPageSoe } from "@/components/dataPageSoe";
import { EndIntroDataContent, IntroDataContent } from "@/components/Item/Intro/IntroContent";
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
  metadata.twitter.images.url = productData.data[0].twitter.image;
  metadata.twitter.card = productData.data[0].twitter.card;
  metadata.twitter.images.alt = metadata.openGraph.images.alt =
    productData.data[0].og.alt ??
    "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة";

  return (
    <div>
    {productData.data[0].intro
      ? productData.data[0].intro.map((item, index) => (
          <IntroDataContent introData={item} key={index} />
        ))
      : null}
    <div>
     
      <ProductView dataDetails={productData} />
    </div>
    {productData.data[0]?.endIntro
        ? productData.data[0].endIntro.map((item, index) => (
            <EndIntroDataContent introData={item} key={index} />
          ))
        : null}
    </div>
  );
}
export const metadata ={
  title: "",
  description: "",
  keywords: "",
  author: "",
  openGraph: {
    url: "",
    site_name: "",
    title: "",
    description: "",
    type: "",
    locale: "ar_AR",
    images: {
      url: "",
      alt: " شركة النظم المتطورة ",
    },
  },
  twitter: {
    card: "summary_large_image",
    images: {
      url: "",
      alt: "",
    },
  },

  robots: "index, follow",
};