import ProductView from "@/components/contentView/ProductView";
import {dataPageSoe} from "@/components/dataPageSoe";
export async function generateStaticParams() {
  const paths = dataPageSoe.flatMap((product) =>
    product.data.map((productData) => ({

      page: productData.id.toString(),
    }))
  );

  return paths; // Or 'blocking' if you know all paths
}

export default function Page(props) {

 const page=decodeURIComponent(props.params.page);
     
 const product = "";
 



  const productData = dataPageSoe.find((item) => item.href === product);
  if (productData) {
    productData.data = productData.data.filter((item) => item.id == page);
  }
  if (!productData) return null;
  metadata.title = productData.data[0].title;
  metadata.description = productData.data[0].description;
  metadata.keywords = productData.data[0].keywords;
  metadata.author = productData.data[0].author;
  metadata.other = {
    "og:url": productData.data[0].og.url,
    "og:site_name": productData.data[0].og.site_name,
    "og:title": productData.data[0].og.title,
    "og:description": productData.data[0].og.description,
    "og:image": productData.data[0].og.image,
    "og:type": productData.data[0].og.type,
  }
 
  metadata.twitter.title = productData.data[0].title;
  metadata.twitter.image = productData.data[0].twitter.image;
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
  other: {
    
  },
  twitter: {
    title: "",
    card: "summary_large_image",
    image: "",
  },
};
