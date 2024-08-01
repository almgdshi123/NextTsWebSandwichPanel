import SwiperComponent from "@/components/swiper/Swiper";
import "./home.css";
import Content from "@/components/content/Content";
import RequestQuote from "@/components/requestQuote/RequestQuote";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <SwiperComponent></SwiperComponent>
      </div>
      <Content title="home"></Content>
      <RequestQuote />
    </div>
  );
}

export const metadata = {
  title: "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",
  description:
    "اكتشف مجموعتنا المتنوعة من السندوتش بانل عالي الجودة، مع خدمات توريد وتركيب احترافية في جميع أنحاء المملكة. تصفح تشكيلتنا الواسعة من الغرف الجاهزة المصممة لتلبية احتياجاتك.",
  keywords: "سندوتش بانل, غرف جاهزة, تركيب, توصيل, بيع, توريد, المملكة",
  author:
    "   شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة المتخصصة في بيع وتوريد وتركيب السندوتش بانل والغرف الجاهزة",
  other: {
    "og:url": "https://sandwichpanl.com",
    "og:site_name": "   شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",

    "og:type": "website",
  },
  twitter: {
    title: "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",
    card: "summary_large_image",
    image:
      "https://sandwichpanl.com/assets/img/سندوتش-بنل-بافضل-اسعار-واعلى-المواصفات.jpg",
  },
  icons: {
    icon: "/logo.png",
  },
};
