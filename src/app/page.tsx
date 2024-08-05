import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1 className={styles.main}>test style</h1>
    </main>
  );
}
