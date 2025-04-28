import useFetchApi from "@/hooks/useFetchApi.hook";
import React from "react";

interface WithImageFetchProps extends React.HtmlHTMLAttributes<HTMLElement> {
  images: Array<string>;
}

function withImageFetch(
  Component: React.ComponentType<WithImageFetchProps>,
  numberOfData: number = 3
) {
  return function WrappedComponent(
    props: React.HtmlHTMLAttributes<HTMLElement>
  ) {
    const result = useFetchApi({
      dataFetch: {
        url: `https://dog.ceo/api/breeds/image/random/${numberOfData}`,
        options: {
          method: "GET",
        },
      },
    });

    return <Component images={result} {...props} />;
  };
}

export default withImageFetch;
