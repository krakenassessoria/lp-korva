import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"], display: "swap" });

// >>> AJUSTE AQUI <<<
const SITE_URL = "https://korva.gatzz.com.br";
const OG_IMAGE = "https://korva.gatzz.com.br/og-korva.jpg"; // 1200x630 em /public
// JSON-LD helpers (ajuste conforme necessário)
// Temporada atual (datas em ISO 8601 com timezone -03:00)
const SEASON_START = "2025-10-05T00:00:00-03:00"; // início 05/10/2025
const SEASON_END = "2026-01-31T23:59:00-03:00";   // fim 31/01/2026
// Preços "a partir de"
const LUNCH_PRICE = "198.00"; // Almoço R$ 198,00
const DINNER_PRICE = "398.00"; // Jantar R$ 398,00

export const metadata: Metadata = {
  title: "Korvatunturi — Show em Gramado | Gatzz Fondue & Show",
  description:
    "Korvatunturi no Gatzz: espetáculo para todas as idades que mistura teatro, dança e acrobacias, com sequência de fondue premium — uma experiência imperdível em Gramado.",
  // robots em UMA LINHA
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  // keywords: show + atração + restaurante/fondue + família + Gramado/Serra
  keywords: [
    "Korvatunturi",
    "show em Gramado",
    "jantar com show Gramado",
    "fondue premium Gramado",
    "atrações em Gramado",
    "o que fazer em Gramado à noite",
    "programação Gramado",
    "Serra Gaúcha atrações",
    "show para família Gramado",
    "Gatzz Fondue & Show",
    "restaurante com show Gramado",
    "teatro em Gramado",
    "dança e acrobacias Gramado",
    "experiência gastronômica Gramado",
    "Gramado turismo",
    "Gramado RS",
    "Serra Gaúcha turismo",
    "melhor fondue de Gramado",
    "show infantil Gramado",
    "programação cultural Gramado",
    "Gramado com crianças",
    "roteiro em Gramado",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Korvatunturi - Gatzz Fondue & Show",
    title: "Korvatunturi — Show para toda a família em Gramado",
    description:
      "Teatro, dança e acrobacias com fondue premium: a noite que você estava procurando em Gramado.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Korvatunturi — Gatzz Fondue & Show em Gramado" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korvatunturi — Show em Gramado | Jantar com fondue premium",
    description:
      "Experiência completa no Gatzz: espetáculo premiado e sequência de fondue. Reserve já.",
    images: [OG_IMAGE],
  },
  icons: { icon: "/icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD (Event) — usa grade oficial: sextas (jantar 19h), sábados (almoço 12h). Ajuste se mudar.
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${SITE_URL}#event`,
    name: "Korvatunturi — Gatzz Fondue & Show",
    description:
      "Espetáculo que mistura teatro, dança e acrobacias, com sequência de fondue premium no Gatzz, em Gramado. Classificação: livre.",
    image: [OG_IMAGE],
    startDate: SEASON_START,
    endDate: SEASON_END,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    audience: { "@type": "Audience", audienceType: "Families" },
    isAccessibleForFree: false,
    location: {
      "@type": "Place",
      name: "Gatzz Fondue & Show",
      address: { "@type": "PostalAddress", addressLocality: "Gramado", addressRegion: "RS", addressCountry: "BR" }
    },
    organizer: { "@type": "Organization", name: "Gatzz Fondue & Show", url: SITE_URL },
    performer: { "@type": "PerformingGroup", name: "Korvatunturi" },
    // Horários recorrentes (grade atual do site do Korva no Gatzz):
    eventSchedule: [{
      "@type": "Schedule",
      byDay: ["https://schema.org/Friday"],
      startTime: "19:00",
    },{
      "@type": "Schedule",
      byDay: ["https://schema.org/Saturday"],
      startTime: "12:00",
    }],
    // Ofertas com preço e validade
    offers: [
      {
        "@type": "Offer",
        priceCurrency: "BRL",
        price: LUNCH_PRICE,
        validFrom: SEASON_START,
        validThrough: SEASON_END,
        url: `${SITE_URL}/#venda`,
        availability: "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        priceCurrency: "BRL",
        price: DINNER_PRICE,
        validFrom: SEASON_START,
        validThrough: SEASON_END,
        url: `${SITE_URL}/#venda`,
        availability: "https://schema.org/InStock"
      }
    ]
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />

        {/* Planne */}
        <Script id="planne-widget" strategy="afterInteractive">{`
          (function(w,d,t,u,c,v,y){if(w.plnn)return;y=w.plnn=function(){y.callMethod?
          y.callMethod.apply(y,arguments):y.queue.push(arguments)};y.queue=[];
          v=d.createElement(t);v.async=!0;v.src=u;c=d.getElementsByTagName(t)[0];
          c.parentNode.insertBefore(v,c)})(window,document,'script','https://widget.planne.com.br/widget.js');
          plnn('init','ae11cb31-6e34-4173-9d40-bb0fbab4c995');
          plnn('parameter','action-color','#bca404');
          plnn('parameter','checkout-page','/pagamento');
          plnn('parameter','checkout-back-to','/');
          plnn('parameter','account-page','/conta');
        `}</Script>

        {/* GTM / Pixel / GA4 */}
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W386L7FN');
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','213776450869227'); fbq('track','PageView');
        `}</Script>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-N3D5WMZ7W8" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config','G-N3D5WMZ7W8',{ page_path: window.location.pathname });
        `}</Script>
      </head>

      <body className={montserrat.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W386L7FN"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}
          />
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=213776450869227&ev=PageView&noscript=1"
          />
        </noscript>
        <div className="flex flex-col w-full min-h-screen">{children}</div>
      </body>
    </html>
  );
}

