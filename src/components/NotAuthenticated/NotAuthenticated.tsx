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
        Provide them via environment variables in <code>.env.local</code> file -
        VITE_MOVIE_DB_USERNAME, VITE_MOVIE_DB_PASSWORD
      </p>
      <p>
        If you don't have an account - please register{" "}
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
