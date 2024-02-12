import { ChangeEvent } from "react";
import "./textInput.css";

type Props = {
  text: string;
  onChange: (newText: string) => void;
  onClear: () => void;
};

function TextInput(props: Props) {
  const { text, onChange, onClear } = props;

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <div className="text-input-wrapper">
      <textarea name="text-input" className="text-input" onChange={handleChange} value={text} />
      {text && (
        <div className="clear-icon" onClick={onClear}>
          X
        </div>
      )}
    </div>
  );
}

export default TextInput;
