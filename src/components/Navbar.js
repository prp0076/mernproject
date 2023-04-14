import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Bedge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
export default function Navbar() {
  const navigate = useNavigate();
  const [CartView, setCartView] = useState(false)
  const handleLogout = ()=>{
   localStorage.removeItem("authToken");
   navigate("/login");
  }
  let data=useCart();
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">Fevfood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav me-auto mb-2">
        <li className='nav-item'>
        <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
        <li className='nav-item'>
        <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
        </li>  
        :" "
       }
      </ul>
      
      {(!localStorage.getItem("authToken"))?
        <div className='d-flex'> 
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
          <Link className='btn bg-white text-success mx-1' to="/createuser">Signup</Link>
        </div> 
        :
        <div>
        <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
          My Cart {" "}
          <Bedge pill bg='danger'> {data.length} </Bedge>
        </div>
        {CartView? <Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
        <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
          Logout
        </div>
        </div>
      }
       
    </div>
  </div>
</nav>
    </div>
  )
}
