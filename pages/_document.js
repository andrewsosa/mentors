import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

// import 'styles/base.sass';
// import 'styles/bulma.sass';

export default class MyDocument extends Document {
  render() {
    const { buildManifest } = this.props;
    const css = buildManifest.css || [];
    return (
      <html>
        <Head>
          {css.map(file => (
            <link
              rel="stylesheet"
              href={`/_next/${file}`}
              key={file}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
