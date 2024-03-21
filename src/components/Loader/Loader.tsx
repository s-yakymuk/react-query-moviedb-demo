import classnames from "classnames";

import "./Loader.css";

interface Props {
  isSlim?: boolean;
  className?: string;
  fontSize?: number | string;
  isBlocking?: boolean;
  isFullScreen?: boolean;
  text?: string;
}

const Loader = (props: Props) => {
  const {
    fontSize = 40,
    isBlocking,
    isFullScreen,
    isSlim = true,
    className,
    text,
  } = props;
  return (
    <div
      className={classnames("rqe__loader", className, {
        "rqe__loader--blocking": isBlocking,
        "rqe__loader--fullscreen": isFullScreen,
      })}
    >
      <div className="rqe__loader-spinner-container">
        <div
          style={{ fontSize }}
          className={classnames("rqe__loader-spinner", {
            "rqe__loader-spinner--slim": isSlim,
          })}
        />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Loader;
