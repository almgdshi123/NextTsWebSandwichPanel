import EndContent from "@/components/content/EndContent";
import ProductView from "@/components/contentView/ProductView";
import { dataPageSoe } from "@/components/dataPageSoe";
import { EndIntroDataContent, IntroDataContent } from "@/components/Item/Intro/IntroContent";
import SwiperPage from "@/components/swiper/SwiperPage";
import { a, data } from "framer-motion/client";
export async function generateStaticParams() {
  const paths = dataPageSoe.flatMap((product) =>
    product.data.map((productData) => ({
      page: productData.id,
    }))
  );

  return paths;
}

export  default async function Page(props) {
  const page = decodeURIComponent(props.params.page);

  let productDataFilter: { data: any[] } = { data: [] };

  const product = "";

  const productData = dataPageSoe.find((item) => item.href == product);

  if (productData) {
    await new Promise<void>(async (resolve) => {
      while (!productData.data.some((item) => item.id == page)) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // تأخير نصف ثانية (500 ميلي ثانية)
      }
      productDataFilter.data=productData.data.filter((item) => item.id == page);

      resolve();
    });
  
    const productDetails = productData.data.find((item) => item.id === page);
  
    if (productDetails) {
      metadata.title = productDetails.title;
      metadata.description = productDetails.og.description;
      metadata.keywords = productDetails.keywords;
      metadata.author = productDetails.author;
      metadata.openGraph.url = productDetails.og.url;
      metadata.openGraph.site_name = productDetails.og.site_name;
      metadata.openGraph.title = productDetails.og.title;
      metadata.openGraph.description = productDetails.og.description;
      metadata.openGraph.images.url = productDetails.og.image;
      metadata.openGraph.type = productDetails.og.type;
      metadata.twitter.images.url = productDetails.twitter.image;
      metadata.twitter.card = productDetails.twitter.card;
      metadata.twitter.images.alt = metadata.openGraph.images.alt =
        productDetails.og.alt ?? "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة";
    } else {
      return null;
    }
  } else {
    return null;
  }
  

  return (
    <div>
    {productDataFilter.data[0].intro
      ? productDataFilter.data[0].intro.map((item, index) => (
          <IntroDataContent introData={item} key={index} />
        ))
      : null}
    <div>
     
      <ProductView dataDetails={productDataFilter} />
    </div>
    {productDataFilter.data[0]?.swiper ? (
        <SwiperPage data={productDataFilter.data[0]?.swiper}></SwiperPage>
      ) : null}
    {productDataFilter.data[0]?.endIntro
        ? productDataFilter.data[0].endIntro.map((item, index) => (
            <EndIntroDataContent introData={item} key={index} />
          ))
        : null}
         <EndContent content={productDataFilter.data[0]?.Page}></EndContent>
    </div>
  );
}
export let metadata ={
  title: "",
  metadataBase: new URL("https://sandwichpanel.com"), // قم بتحديثه بعنوان موقعك الفعلي

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