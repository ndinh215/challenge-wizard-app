import "./button.css";
import LoadingIcon from "../loading/LoadingIcon";

type Props = {
  text: string;
  onClick: () => void;
  loading: boolean;
};

function PrimaryButton(props: Props) {
  const { text, onClick, loading } = props;
  return (
    <button className="button primary-button" onClick={onClick}>
      {loading ? <LoadingIcon /> : text}
    </button>
  );
}

export default PrimaryButton;
