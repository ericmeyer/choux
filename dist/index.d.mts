type Options = {
    bearerToken?: string;
    queryParams?: Record<string, string>;
    url: string;
};
declare function get(options: Options): void;

export { get };
