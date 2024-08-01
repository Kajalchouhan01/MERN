import express from 'express';
import bodyParse from 'express';

const app = express();

app.use(bodyParse.json())



const products =[
    {id:1,title:"iphone",description:"best phone",price:5000},
    {id:2,title:"samsang",description:"unique ",price:9000},
    {id:3,title:"motorola",description:"phone good battry",price:4000},
    {id:4,title:"readme",description:"good battry",price:5000},
];

//  CRUD
// C = create = post
// R = Read = get
// U = update = put
// D = Delete = delete

// routing
app.get("/", (req, res) => {
    res.json({
        kuchhbi: 'me bhej rha hu kuchh bhi', name: "ram",
        age: 20,
        salary: 2000,
        education: {
            UG: "iit",
            12: "cbsc",
            10: "mpbsc"
        },
        message:'your requesed for the home rout',
        success:true
    });
});


app.get("/products", (req, res) => {
    
    res.json({message:'your reuest has been accepted',products, success:true

    });
});
// add product
app.post("/products/add",(req,res)=>{
    // console.log(req.body)
    products.push(req.body)
    res.json({message:'your product has been succeesfully',products})
})

// get product by id(dynamic routing)
app.get("/products/:id",(req,res)=>{
    // console.log(req.params)
    const id= req.params.id
    const productDetail = products.filter((data)=>data.id == id);
    res.json({message:'dynamic routing',productDetail})
})



// update product by id
app.put('/products/update',(req,res)=>{
    const updatedProduct = req.body

    for(let i=0; i<products.length; i++){
        if(updatedProduct.id == products[i].id){
            products[i].title = updatedProduct.title;
            products[i].description = updatedProduct.description;
            products[i].price = updatedProduct.price; 
            break;
        }
       
    }
    res.json({message:"you product has been updated",products,success:true})
})

// delete product by id
app.delete("/products/:id",(req,res)=>{
    const id =req.params.id
    const newProduct =products.filter((data)=>data.id != id)
    res.json({message:'your product has been deleted',newProduct})
})



const port = 1000;


app.listen(port, () => console.log(`Server is running on port ${port}`))