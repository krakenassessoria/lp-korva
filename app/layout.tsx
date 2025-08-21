import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ["latin"], weight: ['300'] });

export const metadata: Metadata = {
  title: "Korvatunturi - Gatzz Fondue & Show",
  description: "Um pedacinho da Broadway no Brasil",
  icons: {
    icon: "/icon.png"
  }
};

export const viewport = {
  themeColor: '#000000',
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>

        {/* Script Planne Widget */}
        <Script
          id="planne-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,t,u,c,v,y) {
                            if(w.plnn)return;
                            y=w.plnn=function(){
                              y.callMethod?y.callMethod.apply(y,arguments):y.queue.push(arguments)
                            };
                            y.queue=[];
                            v=d.createElement(t);
                            v.async=!0;
                            v.src=u;
                            c=d.getElementsByTagName(t)[0];
                            c.parentNode.insertBefore(v,c);
                          })
                          
                          (window,document,'script','https://widget.planne.com.br/widget.js');

                          plnn('init', 'ae11cb31-6e34-4173-9d40-bb0fbab4c995');
                          plnn('parameter', 'action-color', '#bca404');
                          plnn('parameter', 'checkout-page', '/pagamento');
                          plnn('parameter', 'checkout-back-to', '/');
                          plnn('parameter', 'account-page', '/conta');
                        `}}
        />

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W386L7FN');
            `,
          }}
        />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '213776450869227');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={montserrat.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W386L7FN"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
          <Image
            alt="Facebook Pixel"
            height={1}
            width={1}
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=213776450869227&ev=PageView&noscript=1"
          />
        </noscript>
        <div className="flex flex-col w-full h-screen">
          {children}
        </div>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-N3D5WMZ7W8`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N3D5WMZ7W8', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
