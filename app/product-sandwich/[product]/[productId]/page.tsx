import EndContent from "@/components/content/EndContent";
import ProductView from "@/components/contentView/ProductView";
import { dataDetails } from "@/components/dataDetails";
import {
  EndIntroDataContent,
  IntroDataContent,
} from "@/components/Item/Intro/IntroContent";
import SwiperPage from "@/components/swiper/SwiperPage";
export async function generateStaticParams() {
  const paths = dataDetails.flatMap((product) =>
    product.data.map((productData) => ({
      product: product.href,

      productId: productData.id,
    }))
  );

  return paths; // Or 'blocking' if you know all paths
}

export default async function Page(props) {
  let productDataFilter: { data: any[] } = { data: [] };

  const productId = decodeURIComponent(props.params.productId);
  const product = decodeURIComponent(props.params.product);

  const productData = dataDetails.find((item) => item.href === product);
  if (productData) {
    // الانتظار حتى العثور على المنتج الذي يطابق 'page'
    await new Promise<void>(async (resolve) => {
      while (!productData.data.some((item) => item.id == productId)) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // تأخير نصف ثانية (500 ميلي ثانية)

      }
      productDataFilter.data = productData.data.filter((item) => item.id == productId);
      resolve();
    });
  
    const productDetails = productData.data.find((item) => item.id === productId);
  
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
      <ProductView dataDetails={productDataFilter} />

      {productDataFilter.data[0].intro
        ? productDataFilter.data[0].intro.map((item, index) => (
            <IntroDataContent introData={item} key={index} />
          ))
        : null}

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
 export let metadata = {
  title: " ",
  description: "",
  metadataBase: new URL("https://sandwichpanel.com"), // قم بتحديثه بعنوان موقعك الفعلي

  keywords: "",
  author: "",
  openGraph: {
    url: "",
    title: "",
    site_name: "",
    description: "",
    images: {
      url: "you_url_here",
      alt: "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",
    },
    type: "",
    locale: "ar_AR",
  },
  twitter: {
    title: "",
    card: "summary_large_image",
    images: {
      url: "you_url_here",

      alt: "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",
    },
    robots: "index, follow",
  },
};
