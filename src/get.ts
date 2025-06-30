import axios from 'axios';

type Options = {
  bearerToken?: string;
  queryParams?: Record<string, string>;
  url: string;
};

export function get(options: Options): void {
  const { bearerToken, queryParams, url } = options;

  const headers: Record<string, string> = {};
  if (bearerToken) {
    headers['Authorization'] = `Bearer ${bearerToken}`;
  }
  axios.get(url, {
    headers: headers,
    params: queryParams
  });
}
