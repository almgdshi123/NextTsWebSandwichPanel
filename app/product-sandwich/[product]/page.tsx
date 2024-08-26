import Content from "@/components/content/Content";
import EndContent from "@/components/content/EndContent";
import { dataContent } from "@/components/dataContent";
import { EndIntroDataContent, IntroDataContent } from "@/components/Item/Intro/IntroContent";

import SwiperPage from "@/components/swiper/SwiperPage";

export async function generateStaticParams() {
  const data = dataContent.map((product) => ({ product: product.href }));
  return data;
}

export default function Page(props) {
  const productName = decodeURIComponent(props.params.product);
  const product = dataContent.find((product) => product.href === productName);
  if (product) {
    metadata.title = product.titleMeat;
    metadata.description = product.description;
    metadata.keywords = product.keywords;
    metadata.author = product.author;
    metadata.openGraph.url = product.og.url;
    metadata.openGraph.site_name = product.og.site_name;
    metadata.openGraph.title = product.og.title;
    metadata.openGraph.description = product.og.description;
    metadata.openGraph.images.url = product.og.image;
    metadata.twitter.images.alt = metadata.openGraph.images.alt =
      product.og.alt ?? " شركة النظم المتطورة ";
    metadata.openGraph.type = product.og.type;

    metadata.twitter.images.url = product.twitter.image;
    metadata.twitter.card = product.twitter.card;
  }
  return (
    <div>
      <div className="text-center">
        <h1>{product?.titleMeat}</h1>
      </div>
      {product?.intro
        ? product.intro.map((item, index) => (
            <IntroDataContent introData={item} key={index} />
          ))
        : null}

      <Content title={productName}></Content>
  
        {product?.swiper ? <SwiperPage data={product?.swiper}></SwiperPage> : null}
        {product?.endIntro
        ? product.endIntro.map((item, index) => (
            <EndIntroDataContent introData={item} key={index} />
          ))
        : null}

      <EndContent content={product?.Page}></EndContent>

    </div>
  );
}

export const metadata = {
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
