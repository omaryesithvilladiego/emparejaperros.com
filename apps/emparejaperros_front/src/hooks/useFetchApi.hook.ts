import { useEffect, useState } from "react";

export interface IDataFetch {
  url: string;
  options: {
    method: string;
    headers?: HeadersInit;
  };
  body?: object;
  params?: Record<string, string>;
}

export interface IReturnProps {
  error?: string | null | Error;
  data?: Array<string>;
}

export interface IProps {
  dataFetch: IDataFetch;
}

const useFetchApi = ({ dataFetch }: IProps): Array<string> => {
  const [data, setData] = useState<Array<string>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${dataFetch.url}`, {
          ...dataFetch.options,
          body: dataFetch.body ? JSON.stringify(dataFetch.body) : undefined,
        });
        if (!response.ok) {
          // eslint-disable-next-line no-console
          console.log(response.statusText);
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();

        setData(result.message);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
          // eslint-disable-next-line no-console
          console.log(err.message);
        } else {
          setError(String(err));
          // eslint-disable-next-line no-console
          console.log(String(err));
        }
      }
    };

    fetchData();
  }, []);

  if (error) throw new Error(error);
  if (!data) throw new Error("No se pudo obtener la data");
  return data;
};

export default useFetchApi;
