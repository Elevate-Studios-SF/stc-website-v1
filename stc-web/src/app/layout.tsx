import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./pixel.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://treatmentsolutions.org"),
  title: "Solutions Treatment Center",
  description: "STC homepage mockup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-gtag"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: true });
                `,
              }}
            />
          </>
        ) : null}
        <Script
          id="ua-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-29476228-1', 'treatmentsolutions.org');
              ga('require', 'displayfeatures');
              ga('send', 'pageview');
            `,
          }}
        />
      </body>
    </html>
  );
}
