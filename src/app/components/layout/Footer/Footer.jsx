import styles from "./Footer.module.css";
export default function Footer({ lang, language }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>{language[lang].footer}</p>
    </footer>
  );
}
