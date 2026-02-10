import React, { useState, useEffect } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: unknown;
};

export function useFetch<T>(url: string, options?: FetchOptions) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });
  useEffect(() => {
    if (!url) {
      setState({ data: null, loading: false, error: null });
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setState({ data: null, loading: true, error: null });

        const res = await fetch(url, {
          signal: controller.signal,
          method: options?.method ?? "GET",
          headers: options?.headers,
          body: options?.body ? JSON.stringify(options.body) : undefined,
        });

        if (!res.ok) {
          throw new Error("Request failed");
        }
        const data: T = await res.json();
        setState({ data, loading: false, error: null });
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;

        if (err instanceof Error) {
          setState({ data: null, loading: false, error: err.message });
        } else {
          setState({ data: null, loading: false, error: "Unknown error" });
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, options?.method, options?.headers, options?.body]);
  React.useDebugValue(state.data);
  console.log(state.data);

  return state;
}
