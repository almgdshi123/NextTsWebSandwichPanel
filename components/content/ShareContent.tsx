// ShareButton.js
"use client";

export default function ShareButton(data: {
  title: string;
  description: string;
  href: string;
  id: string;
}) {
  const shareContent = () => {
    if (navigator.share) {
      navigator
        .share({
          title: data.title,
          text: data.description,
          url:
            window.location.href + `product-sandwich/${data.href}/${data.id}`,
        })
        .then(() => console.log("Content shared successfully"))
        .catch((error) => console.log("Error sharing content", error));
    } else {
      console.log("Web Share API not supported in this browser");
    }
  };

  return (
    <button aria-label="مشاركة" className="menu-btn" onClick={shareContent}>
      <i className="ri-share-line"></i>
    </button>
  );
}
