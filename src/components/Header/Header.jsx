import React from 'react'
import img from '../../assets/logo.PNG'

export default function HeaderLayout(props) {
    return (
        <div>
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">
<img src={img} alt="#logo"/>      
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li style={{marginTop:10}}  class="nav-item active">
        <a class="nav-link" href="#">
            <i style={{marginRight:10}} className='fas fa-clock' ></i>
            Make order 24/7
        </a>
      </li>
      <li style={{marginTop:10}}  class="nav-item">
      <a class="nav-link" href="#">
            <i style={{marginRight:10}} className='fas fa-phone ' ></i>
            021 334455 5544
        </a>
      </li>
      <li style={{margin:10}} class="nav-item">
      <button type="button" class="btn btn-outline-primary">Order</button> 
           </li>
      <li style={{margin:10}} class="nav-item dropdown">
        <a class="btn btn-outline-primary  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hi, Vohra!
        </a>
       
      </li>
      
    </ul>
      </div>
</nav>
<div className='d-flex justify-content-end mr-5' >
    <a style={{fontSize:20, marginRight:5}} className='text-dark'   href="#">
        Kitchen base search
    </a>
   

<label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label>
    <a style={{fontSize:20, marginLeft:5}} className='text-dark'  href="#">
        Menu base search
    </a>
</div>
<br/>
<br/>
{props.children}
        </div>
    )
}
