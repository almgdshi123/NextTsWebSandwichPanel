import EndContent from "@/components/content/EndContent";
import Intro from "@/components/Item/Intro/Intro";

export default function page() {
  return (
    <div>
      <div className="text-center">
        <h1>صفحة الإرشادات والنصائح الخاصة بموقعنا !</h1>
      </div>
      <Intro
        txtone={"ماذا ستجدون في هذه الصفحة؟"}
        txttwo={null}
        txtthree={
          "مرحبًا بكم في صفحة الإرشادات والنصائح الخاصة بموقعنا! هنا نقدم لكم مجموعة من المعلومات القيمة التي تساعدكم في استخدام منتجاتنا بأفضل شكل ممكن. سواء كنتم تبحثون عن نصائح حول اختيار المنتج الأنسب، أو تعليمات حول كيفية التثبيت والصيانة، ستجدون هنا كل ما تحتاجونه. "
        }
        txtfour={null}
        txtfive={[
          {
            title: "مقالات إرشادية",
            description:
              " اكتشفوا مقالات تفصيلية حول كيفية استخدام منتجاتنا لتحقيق أفضل أداء. ستجدون نصائح حول اختيار المنتجات، ومقارنات بين مختلف الخيارات المتاحة، وكيفية الاستفادة القصوى منها في مشاريعكم.",
          },
          {
            title: "نصائح عامة",
            description:
          "قدم لكم مجموعة من النصائح التي تهدف إلى تسهيل استخدام المنتجات، مثل نصائح حول الصيانة الدورية، وطرق الحفاظ على جودة المنتجات لأطول فترة ممكنة.",
          },
          {
            title: "دروس تعليمية:",
            description:
            " دروس تعليمية مرئية مثل الفيديوهات والرسوم البيانية، التي توضح لكم الخطوات الصحيحة لتثبيت واستخدام منتجاتنا بشكل صحيح وآمن."
          },
          {
            title:  "إرشادات السلامة",
            description:"تعرفوا على أهم الإرشادات التي يجب اتباعها لضمان السلامة عند استخدام منتجاتنا. نحرص على تقديم تعليمات واضحة تضمن استخدام المنتجات بطريقة آمنة وسليمة."
          }
          ,    {
            title:  "إجابة على الأسئلة الشائعة",
            description:"نوفر لكم قسمًا خاصًا للإجابة على الأسئلة الأكثر شيوعًا. إذا كان لديكم أي استفسار، يمكنكم العثور على الإجابة هنا بكل سهولة."
          }
        ]}
      />
            <EndContent content={[15, 16,23,26,27,28,29,30,31,32,37]}></EndContent>

      
    </div>
  );
}
export const metadata = {
  title: "صفحة الإرشادات والنصائح الخاصة بموقعنا!", 
   metadataBase: new URL("https://sandwichpanel.com"), // قم بتحديثه بعنوان موقعك الفعلي

  description:
    "اكتشف نصائح وإرشادات تفصيلية لاستخدام منتجاتنا. نوفر لك مقالات ودروسًا مع مجموعة شاملة من الإرشادات لضمان تحقيق أقصى استفادة من منتجاتك والنجاح في مشاريعك.",
  keywords:
    "ساندوتش بانل, عزل حراري, عزل صوتي, تصاميم مبتكرة, بناء سريع, توفير الطاقة, السعودية",
  author: "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",
  openGraph: {
    url: "https://sandwichpanl.com/product-sandwich/",
    title: "صفحة الإرشادات والنصائح - شركة النظم المتطورة",
    site_name: "شركة النظم المتطورة لساندوتش بانل والغرف الجاهزة",
    description:
      "استكشف نصائح وإرشادات حول استخدام منتجاتنا بكفاءة. نوفر لك مقالات تعليمية ودروسًا لضمان تحقيق أقصى استفادة من منتجاتك.",
    type: "website",
    images: {
      url: "https://sandwichpanl.com/assets/img/إرشادات-استخدام-ساندوتش-بانل.jpg",
      alt: "نصائح وإرشادات لاستخدام الساندوتش بانل",
    },
    locale: "ar_AR",
  },
  twitter: {
    title: "صفحة الإرشادات والنصائح - شركة النظم المتطورة",
    card: "summary_large_image",

  },
  robots: "index, follow",
};
