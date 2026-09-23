import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'PROSPERUS Inteligência Financeira - Checkup & Diagnóstico Bacen',
  description: 'Descubra o motivo real do seu crédito estar negado ou seu CNPJ travado. Diagnóstico técnico e individual do seu histórico no Banco Central por R$ 99,00.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} dark scroll-smooth`}>
      <head>
        {/* 1. Meta Pixel Code (ID: 1107957032177054) */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1107957032177054');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1107957032177054&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* 2. Script de Rastreamento de Visitas e UTMs (/api/track-visit) */}
        <Script id="prosperus-track-visit" strategy="afterInteractive">
          {`
            (function() {
              try {
                var urlParams = new URLSearchParams(window.location.search);
                var trackingData = {
                  page_url: window.location.href,
                  pathname: window.location.pathname,
                  referrer: document.referrer || '',
                  utm_source: urlParams.get('utm_source') || '',
                  utm_medium: urlParams.get('utm_medium') || '',
                  utm_campaign: urlParams.get('utm_campaign') || '',
                  utm_content: urlParams.get('utm_content') || '',
                  utm_term: urlParams.get('utm_term') || '',
                  vid: urlParams.get('vid') || '',
                  src: urlParams.get('src') || '',
                  sck: urlParams.get('sck') || '',
                  screen_resolution: window.screen ? window.screen.width + 'x' + window.screen.height : '',
                  timestamp: new Date().toISOString()
                };

                var endpoint = '/api/track-visit';

                if (navigator.sendBeacon) {
                  var blob = new Blob([JSON.stringify(trackingData)], { type: 'application/json' });
                  navigator.sendBeacon(endpoint, blob);
                } else {
                  fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(trackingData),
                    keepalive: true
                  }).catch(function(err) {
                    console.error('Tracking fetch error:', err);
                  });
                }
              } catch(e) {
                console.error('Tracking script error:', e);
              }
            })();
          `}
        </Script>

        {/* Microsoft Clarity Code */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yme8rmsnp3");
          `}
        </Script>
      </head>
      <body className="bg-[#0B0F19] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}
