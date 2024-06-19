import React from 'react'

const Product = () => {
    const product =[{
        id:1,
        Title:'Vivo',
        price:20000,
        discription:'camara quality is good'
    },
    {
        id:1,
        Title:'oppo',
        price:40000,
        discription:'fetures is more than other mobile'
    },
    {
        id:1,
        Title:'Samsang',
        price:34000,
        discription:'samsang is old mobile'
    },
      
    ]
  return (
    <div>
   
    {product.map((data)=> (<div key={data.id} style={{backgroundColor:'',textAlign:'center',padding:'10px',margin:'10px',
        
    }}>
     
    <h1>{data.Title}</h1>
    <h1>{data.price}</h1>
    <h1>{data.discription}</h1>

    </div>))}
</div>
  )
}

export default Product