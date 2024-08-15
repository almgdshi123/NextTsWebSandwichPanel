import Header from "@/components/header/Header";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Footer from "@/components/footer/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="ar" dir="rtl">
    <head>
    <link rel="apple-touch-icon" href="/logo.png"/>
    <link rel="icon" href="/logo.png"></link>


    </head>
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  </html>

  );
}

