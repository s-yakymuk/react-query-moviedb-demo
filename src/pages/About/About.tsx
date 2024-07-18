const About = () => {
  return (
    <article>
      <h1>About</h1>
      <p>
        <a
          href="https://react-query.tanstack.com/"
          target="_blank"
          rel="noreferrer"
        >
          React-query
        </a>{" "}
        demo created by{" "}
        <a href="https://github.com/s-yakymuk" target="_blank" rel="noreferrer">
          @s-yakymuk
        </a>
      </p>
      <p>
        All of the queries will be in <code>inactive</code> state, while you are
        on this page
      </p>
      <p>Serhii Yakymuk © 2021-2024</p>
    </article>
  );
};

export default About;
