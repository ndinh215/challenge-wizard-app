const getTranslationUrl = () => `${import.meta.env.VITE_BASE_API_URL}/ask`;

export type RequestWizardData = {
  question: string;
  type: number;
};
export type RequestWizardResponse = {
  answer?: string;
  type?: number;
  createAt?: string;
  status?: number;
  error?: string;
  timestamp?: string;
};

export const requestWizard = async (params: RequestWizardData): Promise<RequestWizardResponse> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(params),
  };

  const response = await fetch(getTranslationUrl(), requestOptions);
  return response.json();
};
