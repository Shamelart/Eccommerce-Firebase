import { useParams } from "react-router-dom";
import { getDocumentById } from "../services/firebase.services";
import { useEffect, useState } from "react";

export default function useDocument() {
  const [document, setDocument] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { id, nameCategory } = useParams();

  useEffect(() => {
      getDocumentById(nameCategory.toLowerCase(), id)
      .then((data) => setDocument(data))
      .catch((error) => setError(error.message)).finally(() => setLoading(false));

  }, [nameCategory, id]);

  return {document, loading, error}
}
