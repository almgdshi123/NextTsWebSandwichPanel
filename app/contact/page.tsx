import RequestQuote from "@/components/requestQuote/RequestQuote";

export default function page() {
  return (
    <div>
      <RequestQuote></RequestQuote>
    </div>
  )
}

  export const metadata = {
    title: 'طلب عرض أسعار | ألواح الساندوتش بانل',
    description: 'قدم طلبك الآن للحصول على عرض أسعار مخصص لألواح الساندوتش بانل. تواصل معنا لاستكشاف خيارات العزل الحراري والصوتي المتاحة لمشروعك في السعودية.',
    keywords: 'طلب عرض أسعار, ساندوتش بانل, السعودية, عزل حراري, عزل صوتي, بناء مبتكر, توفير الطاقة',
    author: 'شركة الساندوتش بانل لحلول العزل الحراري والصوتي',
    other: {
      'og:url': 'https://sandwichpanl.com/contact',
      'og:site_name': 'شركة الساندوتش بانل لطلبات عرض الأسعار',
      'og:title': 'طلب عرض أسعار لألواح الساندوتش بانل',
      'description': 'املأ نموذج طلب عرض الأسعار لدينا واحصل على استشارة مجانية لاختيار أفضل حلول العزل لمشروعك.',
      'og:image': 'https://sandwichpanl.com/assets/img/quote-request-banner.jpg',
      'og:type': 'website',
    },
    twitter: {
      title: 'طلب عرض أسعار | ألواح الساندوتش بانل',
      card: 'summary_large_image',
      image: 'https://sandwichpanl.com/assets/img/quote-request-banner.jpg',
    },
  };
  