import { ReactNode } from "react";
import "./container.css";

type Props = {
  children: ReactNode;
};

function Container(props: Props) {
  const { children } = props;
  return (
    <div className="container-wrapper">
      <div className="container">{children}</div>
    </div>
  );
}

export default Container;
