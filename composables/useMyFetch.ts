export const useMyFetch: typeof useFetch = (request, opts?) => {
    // @ts-ignore
    const config = useRuntimeConfig();

    return useFetch(request, {
        baseURL: process.env.BASE_URL,
        ...opts,
        lazy: false
    });
};
