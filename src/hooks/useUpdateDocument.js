import { updateDocument } from "../services/firebase.services";

export default function useUpdateDocument() {
  
  const updateStock = async (id, category, stock) => {
    try {
        await updateDocument(category.toLowerCase(), id, stock);
        console.log(stock)
        return true;
    } catch(error){
        throw new Error (error.message);
    }
  };
  return updateStock;
}
