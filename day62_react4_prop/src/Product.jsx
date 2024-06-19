import React from 'react'

const Product = ({Title,discription,imgsrc,price}) => {
  return (
    <div  style={{
        textAlign:'center',
        width:'80%',
        margin:'auto',
        border:'1px solid yellow',
        padding:'10px',
        marginBottom:'10px',
    }}>
        <h3>{Title}</h3>
        <h3>{discription}</h3>
        <h3>img src={}</h3>
        <h3>{price}</h3>
        

    </div>
  )
}

export default Product