import Header from "@/components/header/Header";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Footer from "@/components/footer/Footer";


export const metadata = {
  title: "بيع الساندويش  بانل والغرف الجاهزه",
  description:
    "اكتشف مجموعتنا المتنوعة من السندويش بانل عالي الجودة، مع خدمات توريد وتركيب احترافية في جميع أنحاء المملكة. تصفح تشكيلتنا الواسعة من الغرف الجاهزة المصممة لتلبية احتياجاتك.",
  keywords: "سندويش بانل, غرف جاهزة, تركيب, توصيل, بيع, توريد, المملكة",
  author:
    "شركة الساندويش  بانل المتخصصة في بيع وتوريد وتركيب السندويش بانل والغرف الجاهزة",
  og: {
    url: "https://sandwichpanl.com",
    type: "website",
  },
  twitter: {
    title: "بيع وتوريد السندويش بانل والغرف الجاهزة",
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

