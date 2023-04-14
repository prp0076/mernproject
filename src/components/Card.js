import React from 'react'

export default function Card(props) {
  let options = props.options;
  console.log(options)
  let priceOptions = Object.keys(options)
  return (
    <div> 
        <div>
        <div className="card m-3 p-1" style={{"width": "15rem","maxHeight":"370px"}}>
        <img src="https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906__340.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.foodname}</h5>
          <div className='container w-100'>
            <select className='m-2 h-100  bg-success rounded'>
              {Array.from(Array(6),(e,i)=>{
                return (
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
            </select>
           <select className='m-2 h-100  bg-success rounded' >
            {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })}
            {/* <option value="half">Half</option>  */}
          </select>
          <div className='d-inline h-100 fs-5'>
            Total Price
          </div> 
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}
