import Content from "@/components/content/Content";
import { dataContent } from "@/components/dataContent";

  

export async function generateStaticParams() {
    const data = dataContent.map((product) => ({ product: product.href }));
    return data;
}

export default function Page(props) {
const product = dataContent.find((product) => product.href === props.params.product);
if (product) {
    metadata.title = product.titleMeat;
    metadata.description = product.description;
  } 


  return (
    <div>
<Content  title={props.params.product}></Content>
    </div>
  );
}
export const metadata = {
  title: ' ',
  description: '',     }
  