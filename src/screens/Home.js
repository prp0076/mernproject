import React ,{useEffect,useState}from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Caraousal from '../components/Caraousal'

export default function () {
  const [foodcat,setFoodCat]=useState([]); 
  const [fooditem,setFooditem]=useState([]); 
  const loaddata = async ()=>{
    let response = await fetch("http://localhost:5000/api/fooddata",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setFooditem(response[0]);
    setFoodCat(response[1]);
  }
  useEffect(()=>{
    loaddata();
  },[])

  return (
    <div>
        <Navbar/>
       <div> <Caraousal/></div>

        <div className='container'>
          {foodcat!==[] ? foodcat.map((data)=>{
            return (
              <div className='row mb-3'>
              <div key={data._id} className='fs-4 m-3'>{data.CategoryName}</div>
              <hr />
              {fooditem !==[] ? fooditem.filter((item)=>item.CategoryName === data.CategoryName)
              .map(filteritems=>{
                
                return (
                  <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                    <Card foodname={filteritems.name} options={filteritems.options[0]}
                    imgsrc={filteritems.img}></Card>
                  </div>
                )
              }) : "No Such Data Found"}
              </div>
            )
          }):""
          }
          {/* <Card/> */}
          
        </div>

        <Footer/>
    </div>
  )
}
