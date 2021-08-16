export interface fetchConfig {
  method: string;
  path: string;
  data?: object | null;
  isBasic?: boolean;
  token?: string;
  formData?: any;
}
export const Fetch = async (fetchCofig: fetchConfig) => {
  const url = `http://localhost:3100${fetchCofig.path}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: fetchCofig.method,
    body:
      fetchCofig.method === "PATCH" || fetchCofig.method === "POST"
        ? JSON.stringify(fetchCofig.data)
        : null,
  });
};
