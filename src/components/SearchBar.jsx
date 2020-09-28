import React from 'react'

export default function SearchBar(props) {
  const { filterChange } = props;  
  return (
        <div className='d-flex justify-content-center' >
            <div className='w-50' >
            <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">
        <i className='fas fa-search' ></i>
    </span>
  </div>
  <input placeholder='Search'  type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
  <div class="input-group-append">
    <span onClick={()=>filterChange(true)} class="input-group-text">
    <i onClick={()=>filterChange(true)}  className='fas fa-filter' ></i>
    </span>
  </div>
            </div>
</div>
<div style={{marginLeft:30}} >
<button type="button" class="btn btn-outline-primary">Continue
<i className='fas fa-arrow' ></i>
</button> 
</div>
        </div>
    )
}
