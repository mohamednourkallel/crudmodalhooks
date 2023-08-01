import React,{useEffect,useState} from 'react'
import { deleteArticle, fetchArticles } from '../../services/ArticleService';
import { fetchSCategories } from '../../services/ScategorieService';
import ArticleList from '../ArticleList';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
const ArticlesApp = () => {
const [editingProduct, setEditingProduct] = useState(null);
const [products,setProducts]=useState([])
const [scategories,setScategories]=useState([])
useEffect(() => {
listproduits()
listscategories()
},[products])
const listproduits=()=>{
fetchArticles()
.then(res=>setProducts(res.data))
.catch(err=>console.log(err))
}
const listscategories=()=>{
fetchSCategories()
.then(res=>setScategories(res.data))
.catch(err=>console.log(err))
}
const addproduct=(newproduit)=>{
setProducts([newproduit,...products])
}
const deleteProduct = (productId,ref) => {
    confirmAlert({
    title: "Confirm delete...",
    message: " supprimer l' article: " + ref,
    buttons: [
    {
    label: 'Oui',
    onClick: () => deleteArticle(productId)
    .then(res=>
    setProducts(products.filter((product) => product._id !== productId)))
    //.then(console.log("suppression effectuée avec success"))
    .catch(error=>console.log(error))
    },
    {
    label: 'Non',
    }
    ]
    });
    }
const updateProduct = (prmod) => {
setProducts(
products.map((product) =>
product._id === prmod._id ? prmod : product
)
);
setEditingProduct(null);
};
return (
<div>
<ArticleList articles={products} deleteProduct={deleteProduct}/>
</div>

)
}
export default ArticlesApp