// ready
import React from 'react';
import SmallCard from "./SmallCard";

/*  Cada set de datos es un objeto literal */
function ContentRowDb() {

// Total Card Products
const [products, setProducts] = React.useState([]);
React.useEffect(() => {
    let url = "http://localhost:3000/api/products";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (!data.error){
            setProducts(data.info.total);
        }else{
            setProducts([]);
        }
    })
    .catch(e => console.log(e));
})
let totalProducts = {
    color: "success",
    title: "Total Productos",
    quantity: products,
    icon: "fa-clipboard-list"
}
////////////////////////////////
// Total Card Users
const [users, setUsers] = React.useState([]);
React.useEffect(() => {
    let url = "http://localhost:3000/api/users";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (!data.error){
            setUsers(data.info.total);
        }else{
            setUsers([]);
        }
    })
    .catch(e => console.log(e));
})
let totalUsers = {
    color:  "success",
    title: "Total Usuarios",
    quantity: users,
    icon: "fa-user-check"
}
////////////////////////////////
// Total Card Categories
const [categories, setCategories] = React.useState([]);
React.useEffect(() => {
    let url = "http://localhost:3000/api/products";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (!data.error){
            setCategories(8); //Sum of the categories
        }else{
            setCategories([]);
        }
    })
    .catch(e => console.log(e));
})
let totalCategories = {
    color: "success",
    title: "Total Categorías",
    quantity: categories,
    icon: "fas fa-award"
}


let cardProps = [totalProducts, totalUsers, totalCategories];


return (
    <React.Fragment>
    {/*<!-- Content Row -->*/}
    <div className="row">
        {
            cardProps.map((product,index)=>{
                return <SmallCard  {...product}  key= {index}/>
            })
        }      
    </div>
    </React.Fragment>
)
}
export default ContentRowDb;
