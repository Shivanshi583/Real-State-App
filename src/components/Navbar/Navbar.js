import React from 'react';
import { NavLink,Link} from 'react-router-dom';
import './navbar.css';
import logo from '../../Assets/Images/Logo.png';



const nav__links=[
  {
    path:'/',
    display:'Rent'
  },
  {
    path:'/buy',
    display:'Buy'
  },
  {
    path:'/sell',
    display:'Sell'
  }
  
]


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
        <img src={logo} alt="logo"/>
        <h3>Estatery</h3>
        </div>

        <div className='navigation'>
        <ul className='menu'>

{
  nav__links.map((item,index)=>(
    <li className='nav__item' key={index}>
      <NavLink to={item.path}  
       className={(navClass)=>navClass.isActive? 'nav__active':''}  >{item.display}</NavLink>
    </li>
  ))
}
</ul>

     <div className='nav'>
     <div className='nav__tab'>
       <Link>Manage Property</Link>
       <span className='arrow'>
       <i class="ri-arrow-drop-down-line"></i>
       </span> 
     </div>
     <div className='nav__tab'>
       <Link>Resources</Link>
       <span className='arrow'>
       <i class="ri-arrow-drop-down-line"></i>
       </span> 
     </div>
     </div>
        </div>
        {/* Navigation menu ends */}

        <div className='sign__menu'>
          <button className='btn__one'>Login</button>
          <button className='btn__two'>Sign up</button>
        </div>
     

    </div>
  )
}

export default Navbar;
