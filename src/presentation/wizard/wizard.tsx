import "./wizard.css";
import TextInput from "./components/textInput";
import ResultBox from "./components/resultBox";
import PrimaryButton from "$components/button/PrimaryButton";
import { ChangeEvent, useState, useEffect } from "react";
import useRequestTransition from "./hooks/useRequestTransition.tsx";

const TYPES = [
  {
    id: 0,
    name: "Default",
  },
  {
    id: 1,
    name: "Translation",
  },
  {
    id: 2,
    name: "Interpreter",
  },
];

function Wizard() {
  const [question, setQuestion] = useState<string>("");
  const [type, setType] = useState<number>(TYPES[0].id);
  const { data, getData, loading, error } = useRequestTransition();

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  function handleClearQuestion() {
    setQuestion("");
  }

  function handleSubmit() {
    if (!loading) {
      getData(question, type);
    }
  }

  function handleChangeType(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setType(parseInt(value));
  }

  return (
    <div className="translation-wrapper">
      <div>
        <div>Choose type</div>
        <select value={type} onChange={handleChangeType} className="select-type">
          {TYPES.map(option => {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <TextInput text={question} onChange={setQuestion} onClear={handleClearQuestion} />
      </div>
      <div>
        <PrimaryButton text="Submit" onClick={handleSubmit} loading={loading} />
      </div>

      <ResultBox text={data?.answer || ""} />
    </div>
  );
}

export default Wizard;
