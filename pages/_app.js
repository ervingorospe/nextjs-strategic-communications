import '../styles/globals.css'
import Script from 'next/script'
import PageLayout from 'layouts/page-layout'

function MyApp({ Component, pageProps }) {
  
  return (
    <PageLayout navigationFields={pageProps.navigationFields}>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${pageProps.analyticsId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${pageProps.analyticsId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default MyApp

// bg-primary-100
// bg-primary-200
// bg-primary-500
// bg-primary-400
// max-w-prose
// max-w-screen-sm
// max-w-screen-md
// max-w-screen-lg
// max-w-screen-xl
// max-w-screen-2xl
// max-w-full
// max-w-xs
// max-w-sm
// max-w-md
// max-w-lg
// max-w-xl
// max-w-2xl
// max-w-4xl
// max-w-5xl
// max-w-6xl
// max-w-7xl



