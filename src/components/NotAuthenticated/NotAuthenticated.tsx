import React from "react";

import "./NotAuthenticated.css";

interface Props {
  error?: unknown;
}

const NotAuthenticated = (props: Props) => {
  const { error } = props;

  return (
    <div className="rqe__no-auth">
      <p>Your MovieDB credentials are missing or incorrect.</p>
      <p>
        Provide them via environment variables - REACT_APP_USERNAME,
        REACT_APP_PASSWORD
      </p>
      <p>
        If you do'nt have an account - please register{" "}
        <a
          href="https://www.themoviedb.org/signup"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
      {!!error && (
        <p>
          Error info: <code>{JSON.stringify(error)}</code>
        </p>
      )}
    </div>
  );
};

export default NotAuthenticated;
