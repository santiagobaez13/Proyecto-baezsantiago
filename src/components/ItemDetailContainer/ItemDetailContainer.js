import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"; 
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc, QuerySnapshot, QueryDocumentSnapshot } from "firebase/firestore";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams();  

 

    const productsAdapted = doc(db,'products',itemId)
    getDoc(productsAdapted)
    .then(queryDocumentSnapshot =>{
        console.log(queryDocumentSnapshot)
        const fields = queryDocumentSnapshot.data ()
        const productAdapted ={ id: queryDocumentSnapshot.id,...fields }
        setProduct(productAdapted);
    })
    .catch(error => {
        console.error("Error getting document:", error);
        
}, [itemId]);

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
