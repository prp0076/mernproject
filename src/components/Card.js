import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart ,useCart} from './ContextReducer';

export default function Card(props) {
  let options = props.options;
  // console.log(options)
  const priceRef=useRef()
  let priceOptions = Object.keys(options);
  let dispatch = useDispatchCart();
  let fooditem = props.fooditems
  let data=useCart();
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const handleAddtocart= async()=>{
   await dispatch({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price:finalPrice,qty:qty,size:size});
   console.log(data)
  }
  let finalPrice = qty*parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <div> 
        <div>
        <div className="card m-3 p-1" style={{"width": "15rem","maxHeight":"370px"}}>
        <img src={props.fooditem.img} className="card-img-top" alt="..." style={{height:"120px", objectFit:"fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.fooditem.name}</h5>
          <div className='container w-100'>
            <select className='m-2 h-100  bg-success rounded' onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6),(e,i)=>{
                return (
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
            </select>
           <select className='m-2 h-100  bg-success rounded' onChange={(e)=>setSize(e.target.value)} ref={priceRef}>
            {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })}
            {/* <option value="half">Half</option>  */}
          </select>
          <div className='d-inline h-100 fs-5'>
            {finalPrice}/-
          </div> 
          <hr></hr>
          <button className='btn btn-success justify-center ms-2 ' onClick={handleAddtocart}>Add To Cart</button>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}
