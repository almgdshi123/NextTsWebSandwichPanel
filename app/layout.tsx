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
     
      <body >
        <Header />

    
        
        {children}
        <Footer />
        </body>
    </html>
  );
}

