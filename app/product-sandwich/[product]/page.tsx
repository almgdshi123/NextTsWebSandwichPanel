import Content from "@/components/content/Content";
import { dataContent } from "@/components/dataContent";

  

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
    metadata.other={
      'og:url':product.og.url,
      'og:site_name':product.og.site_name,
      'og:title':product.og.title,
      'og:description':product.og.description,
      'og:image':product.og.image,
      'og:type':product.og.type,
    }
   
    metadata.twitter.title = product.twitter.title;
    metadata.twitter.image = product.twitter.image;
    metadata.twitter.card = product.twitter.card;

  } 
  return (
    <div>
<Content  title={productName}></Content>
    </div>
  );
}
export const metadata = {
  title: '',
  description: '',
  keywords:'',
  author: '',
  other: {
    
  },
  twitter: {
    title: '',
    card:"summary_large_image",
    image:""

  },

};
  