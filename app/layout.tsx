import Header from "@/components/header/Header";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Footer from "@/components/footer/Footer";


export const metadata = {
  title: "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",
  description:
    "اكتشف مجموعتنا المتنوعة من السندوتش بانل عالي الجودة، مع خدمات توريد وتركيب احترافية في جميع أنحاء المملكة. تصفح تشكيلتنا الواسعة من الغرف الجاهزة المصممة لتلبية احتياجاتك.",
  keywords: "سندوتش بانل, غرف جاهزة, تركيب, توصيل, بيع, توريد, المملكة",
  author:
    "شركة النظم المتطورة لساندوتش بانل  المتخصصة في بيع وتوريد وتركيب السندوتش بانل والغرف الجاهزة",
    other: {
      'og:url': 'https://sandwichpanl.com',
      'og:site_name': 'شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة المتخصصة في بيع وتوريد وتركيب السندوتش بانل والغرف الجاهزة',
      'og:title':  'شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة',
      'description':"اكتشف مجموعتنا المتنوعة من السندوتش بانل عالي الجودة، مع خدمات توريد وتركيب احترافية في جميع أنحاء المملكة",
      'og:image': 'https://sandwichpanl.com/assets/img/سندوتش-بنل-بافضل-اسعار-واعلى-المواصفات.jpg'
      ,'og:type': 'website',
    }
  ,
  twitter: {
    title:  'شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة',
    card:"summary_large_image",
    image: "https://sandwichpanl.com/assets/img/سندوتش-بنل-بافضل-اسعار-واعلى-المواصفات.jpg",

  },
  icons: {
    icon: "/logo.png",


  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="ar" dir="rtl">
     
      <body >
        <Header />

    
        
        {children}
        <Footer />
        </body>
    </html>
  );
}

