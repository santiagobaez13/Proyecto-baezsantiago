import { useState, useEffect } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList"; 
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); 
  
  useEffect(() => {
    setLoading(true);

    const productsCollection = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(productsCollection)
      .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        console.log(productsAdapted);
        setProducts(productsAdapted);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [categoryId]);

  useEffect(() => {
    document.title = `Ecommerce ${categoryId ? `| ${categoryId}` : ''}`;

    return () => {
      document.title = 'Ecommerce';
    };
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;