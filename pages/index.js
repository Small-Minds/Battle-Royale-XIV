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
          <span className={style.battlefield}>Battle Royale</span>{" "}
          <span className={style.marker}>XIV</span>
        </h1>

        <p className="description" style={{ marginTop: "2px" }}>
          <small>Ottawa's Largest 24-hour Gaming Competition</small>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
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
