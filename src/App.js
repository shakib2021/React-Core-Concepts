import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 let actors=['shakib',' habib','siddik','naim','kotta']
 let products=[{Pname:"Shakibshop",price:"$654"},
 {Pname:"otoshop",price:"$54"},
 {Pname:"ooshop",price:"$5004"}]
 let productName=products.map(ProNam=>ProNam.Pname)
  return (
    <div className="App">
      <header   className="App-header">
        <Users></Users>
      <Counter></Counter>

      {/* <Person   name="shakib"  job="jobless"></Person>
      <Person name="hab"></Person>
      <Person name="Gazi" job={actors[0]}></Person> */}
      <ul>
       {actors.map(actor=><li>{actor}</li>)} 
       <h1>Product Name</h1>
        
      </ul>
      <ul>
      {<li>{productName}</li>}
      </ul>

        {products.map(product=><Product name={product.Pname}></Product>)}
      {/* <Product name={products[0].Pname} price={products[0].price} ></Product>
      <Product name={products[1].Pname} price={products[1].price} ></Product>
      <Product name={products[2].Pname} price={products[2].price} ></Product> */}
      {/*  */}

      </header>
    </div>
  );
}

function Users(){
let [user,setUser]=useState([])


useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(res=>res.json())
  .then(data=>setUser(data))

  


})
return(
  <div>
<ul>{user.map(us=> <li>{us.name}</li>)}
</ul>

  </div>
)

}






function Counter(){
let [count,setCount] =useState(20)
let handleIncrease=()=>{
if(count<0){
  alert("uhu")
}
else{
  setCount(count+1)

}
}
let handleDecrease=()=>{
  setCount(count-1)
}
return(<div>
  <h1>Count:{count}</h1>
  <button onClick={handleIncrease} type="submit">InCounter</button>
  <button onClick={handleDecrease} type="submit">DeCounter</button>
</div>

)


}





function Product(props){
let design={
height:'450px',
width:'230px',
background:'white',
borderRadius:'5px',
color:'black',
float:'left'
}


return(
<div style={design}>
  
          <h3 >{props.name}</h3>
           <h1>{props.price}</h1>
           <button type="submit">buy</button>

  
  </div>

  )


}

// //////////
function Person(props){
  let Perso={
    marginTop:"10px ",
    border:'2px solid red'
  }
 return(
   <div style={Perso}>

 <h1>hello react my name is :{props.name}</h1>
<p>job:{props.job}</p>
</div>

 )



}


export default App;
