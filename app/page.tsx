import SwiperComponent  from"@/components/swiper/Swiper"
import './home.css'
import Content from "@/components/content/Content";
import Head from "next/head";

export default function Home() {
  return (

   
    <div>
          <Head>
    <meta name="og:url" content={metadata.og.url} />
    <meta name="og:site_name" content={metadata.og.site_name} />
    <meta name="og:title" content={metadata.og.title} />
    <meta name="og:description" content={metadata.og.description} />
    <meta name="og:image" content={metadata.og.image} />
    <meta name="og:type" content={metadata.og.type} />
  </Head>
    <div className="home-container">

        <SwiperComponent></SwiperComponent>
    </div>
   <Content  title="home"></Content> 
  </div>


  );
}

export const metadata = {
  title: "بيع الساندوتش  بانل والغرف الجاهزه",
  description:
    "اكتشف مجموعتنا المتنوعة من السندوتش بانل عالي الجودة، مع خدمات توريد وتركيب احترافية في جميع أنحاء المملكة. تصفح تشكيلتنا الواسعة من الغرف الجاهزة المصممة لتلبية احتياجاتك.",
  keywords: "سندوتش بانل, غرف جاهزة, تركيب, توصيل, بيع, توريد, المملكة",
  author:
    "شركة الساندوتش  بانل المتخصصة في بيع وتوريد وتركيب السندوتش بانل والغرف الجاهزة",
  og: {
    url: "https://sandwichpanl.com",
    site_name: "شركة الساندوتش بانل المتخصصة في بيع وتوريد وتركيب السندوتش بانل والغرف الجاهزة",
    title: "بيع وتوريد السندوتش بانل والغرف الجاهزة",
    description:"اكتشف مجموعتنا المتنوعة من السندوتش بانل عالي الجودة، مع خدمات توريد وتركيب احترافية في جميع أنحاء المملكة",
    image: "https://sandwichpanl.com/assets/img/سندوتش-بنل-بافضل-اسعار-واعلى-المواصفات.jpg",
    type: "website",
  },
  twitter: {
    title: "بيع وتوريد السندوتش بانل والغرف الجاهزة",
    card:"summary_large_image",
    image: "https://sandwichpanl.com/assets/img/سندوتش-بنل-بافضل-اسعار-واعلى-المواصفات.jpg",

  },
  icons: {
    icon: "/logo.png",


  },
};