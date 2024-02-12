import "./result.css";

type Props = {
  text: string;
};

function Result(props: Props) {
  const { text } = props;
  return <div className="result">{text}</div>;
}

export default Result;
