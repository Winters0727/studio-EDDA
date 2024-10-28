import { Helmet } from "react-helmet";

import META from "@consts/meta";

import type { FC } from "react";

const Meta: FC = () => {
  return (
    <>
      <Helmet>
        <meta name="title" content={META.title} />
        <meta name="description" content={META.description} />
        <meta name="url" content={META.url} />
        <meta name="viewport" content={META.viewport} />
        {META.author && <meta name="author" content={META.author} />}
        {META.themeColor && (
          <meta name="theme-color" content={META.themeColor} />
        )}
      </Helmet>
      {META.openGraph && (
        <Helmet>
          <meta name="og:title" content={META.openGraph.title} />
          <meta name="og:description" content={META.openGraph.description} />
          <meta name="og:image" content={META.openGraph.image} />
          <meta name="og:url" content={META.openGraph.url} />
          <meta name="og:type" content={META.openGraph.type} />
          {META.openGraph.locale && (
            <meta name="og:locale" content={META.openGraph.locale} />
          )}
        </Helmet>
      )}
      {META.twitter && (
        <Helmet>
          <meta name="twitter:card" content={META.twitter.card} />
          <meta name="twitter:title" content={META.twitter.title} />
          <meta name="twitter:description" content={META.twitter.description} />
          <meta name="twitter:image" content={META.twitter.image} />
          <meta name="twitter:site" content={META.twitter.site} />
          {META.twitter.creator && (
            <meta name="twitter:creator" content={META.twitter.creator} />
          )}
        </Helmet>
      )}
    </>
  );
};

export default Meta;
