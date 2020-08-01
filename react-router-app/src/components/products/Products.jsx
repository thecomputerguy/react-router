import React from 'react'
import { Link, Route } from 'react-router-dom'
import Product from '../product/Product'

const Products = ({match}) => {
    const productData = [
  {
    id: 1,
    name: "NIKE Liteforce Blue Sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    status: "Available",
  },
  {
    id: 2,
    name: "Stylised Flip Flops and Slippers",
    description:
      "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
    status: "Out of Stock",
  },
  {
    id: 3,
    name: "ADIDAS Adispree Running Shoes",
    description:
      "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
    status: "Available",
  },
  {
    id: 4,
    name: "ADIDAS Mid Sneakers",
    description:
      "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
    status: "Out of Stock",
  },
];

    function matchedProductData(id){
        const product = productData.find(item => item.id === +id)
        return product
    }
    
    const linkList = productData.map(item => (<li key={item.id}><Link to={`${match.url}/${item.id}`}>{item.name}</Link></li>))
    return (
        <div>
            <h3>Products</h3>
            <ul>{linkList}</ul>
            <Route path={`${match.path}/:id`} render={(props) => (<Product data={matchedProductData(props.match.params.id)} {...props}></Product>)}></Route>
            <Route exact={true} path={match.path} render={() => (<div>Please select a product.</div>)}></Route>
        </div>
    )
}

export default Products
