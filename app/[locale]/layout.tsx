import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "../globals.css";

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <head>
        {/* Dynamic hreflang generation for Google */}
        <link rel="alternate" hrefLang="en-us" href={`https://www.irtiqaaiagency.com/en-us`} />
        <link rel="alternate" hrefLang="en-gb" href={`https://www.irtiqaaiagency.com/en-gb`} />
        <link rel="alternate" hrefLang="en-eu" href={`https://www.irtiqaaiagency.com/en-eu`} />
        <link rel="alternate" hrefLang="x-default" href={`https://www.irtiqaaiagency.com/en-us`} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
