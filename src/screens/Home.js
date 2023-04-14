import React ,{useEffect,useState}from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function () {
  const [foodcat,setFoodCat]=useState([]); 
  const [fooditem,setFooditem]=useState([]); 
  const [search ,setSearch]=useState([])
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
       <div> 
       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption ' style={{zIndex:"10"}}>
    <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x700/?burger" style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?pizza" style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?noodles" style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </div>

        <div className='container'>
          {foodcat!==[] ? foodcat.map((data)=>{
            return (
              <div className='row mb-3'>
              <div key={data._id} className='fs-4 m-3'>{data.CategoryName}</div>
              <hr />
              {fooditem !==[] ? fooditem.filter((item)=>(item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleString()))) 
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
