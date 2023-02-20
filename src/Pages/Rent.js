import React from 'react';
import "../styles/rent.css";
import house1 from "./../Assets/Images/image1.jpg";

const Rent = () => {
  return (
    <div className='rent__home'>
      <div className='search'>
        <h1 className='search__heading'>
          Search properties to rent
          </h1>
          <div className='search__box'>
              <input type="text" placeholder="Search with search bar" />
           <span>
           <i class="ri-arrow-drop-down-line"></i>
    
            </span>  
            </div>
            
      </div>

      {/* Search box ends */}
     

      <form action='' className='fiter__form'>


  <div className='filter__box'>
    <span>Location</span>
    <input type="text" placeholder='NewYork,USA'/>


  </div>
  <div className='filter__box'>
    
  <span>When</span>
    
    <input type="text" placeholder='Select Move-in Date'/>
  <span className='icon'><i class="ri-calendar-2-line"></i></span>
    
 </div>
 <div className='filter__box'>

    <span>Price</span>
    
      <input type="text" placeholder='$500-$2,500'/>
      <span className='icon'>
        <i class="ri-arrow-drop-down-line"></i></span>
 </div>

 <div className='filter__box'>
  <span>Property Type</span>
  <input type="text" placeholder='Houses'/>
  <span className='icon'>
        <i class="ri-arrow-drop-down-line"></i></span>

</div>
<div className='search__btn'>
<button>Search</button>
</div>


</form>


    
     
      {/* filtering ends */}



      <div className='products'>
        <div className='product'>
          
           <img src={house1} alt="house"/>
         
        </div>
        <div className='product'>
          
          <img src={house1} alt="house"/>
        
       </div>
       <div className='product'>
          
          <img src={house1} alt="house"/>
        
       </div>
      

      </div>
    </div>



  )
};

export default Rent;
