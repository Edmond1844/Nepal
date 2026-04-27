import style from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children, ...props }) {
  return (
    <div className={style.layout}>
      <Header {...props} />
      <main className={style.layout__content}>{children}</main>
      <Footer lang={props.lang} language={props.language} />
    </div>
  );
}
