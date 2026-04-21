import { useParams } from "react-router-dom";

export default function Gid({ language, lang, setLang }) {
  const guides = language[lang].guides;

  const { slug } = useParams();
  const gid = guides.find((gid) => gid.url === slug);

  return (
    <>
      <h3>{gid.name}</h3>
    </>
  );
}
