import React from 'react'

const ShowProduct = ({ Product ,setProductData}) =>  {
    const filterByCategory=(category)=>{
        const newProduct= movies.filter((data)=>data.category == category)
        console.log(newProduct);
        setMovieData(newProduct)
    }
  return (
    <div style={{textAlign:"center",padding:"10px"}}>
    <button>Fitness</button>
    <button>Electronics</button>
    <button>Accessories</button>
    <button>Home & Kitchen</button>
  
    </div>
  )
}

export default ShowProduct;