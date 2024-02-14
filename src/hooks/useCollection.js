import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

//FIREBASE
import { getCollection } from "../services/firebase.services";

export default function useCollection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { nameCategory } = useParams();

  useEffect(() => {

    if(nameCategory){
    getCollection(nameCategory.toLowerCase())
      .then((documents) => setProducts(documents))      
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    }
  }, [nameCategory]);
  return {
    loading,
    products,
  };
}
