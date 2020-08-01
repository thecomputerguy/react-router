import React from 'react'

const Product = ({data, match}) => {
    return (
        <div>
            <h3>Product id: {data.id}</h3>
            <p>Name: {data.name}</p>   
            <p>Description: {data.description}</p>
            <p>match: {JSON.stringify(match)}</p>
        </div>
    )
}

export default Product
