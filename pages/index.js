import Head from "next/head";
import style from "../css/index.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Battle Royale XIV</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
        <h1 className="title">
          <span className={style.battlefield}>Battle&nbsp;Royale</span>{" "}
          <span className={style.marker}>XIV</span>
        </h1>

        <p className="description" style={{ marginTop: "2px" }}>
          <small>
            <span>Ottawa's&nbsp;Largest</span>
            <span className={style.timespan}>{" 24-hour "}</span>
            <span>Gaming&nbsp;Competition</span>
          </small>
        </p>

        <div className="grid">
          <a href="" className="card">
            <h3>Sponsor Us &rarr;</h3>
            <p>
              Get your technology or gaming brand featured in our event and
              event advertising.
            </p>
          </a>

          <a href="" className="card">
            <h3>Register &rarr;</h3>
            <p>
              Sign up for a chance to win cash prizes. Most of your ticket will
              be donated to charity.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://smallminds.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &#129504; Small Minds
        </a>
      </footer>
    </div>
  );
}
