import { requestWizard, RequestWizardResponse } from "$api/wizard.tsx";
import { useState } from "react";

function useRequestTransition() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<RequestWizardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getData = async (question: string, type: number) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await requestWizard({ question, type });
      if (response.answer) {
        setData(response);
        setError(null);
      }

      if (response.error) {
        setData(null);
        setError(response.error);
      }
    } catch (e) {
      setError("Unknown error");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getData };
}

export default useRequestTransition;
