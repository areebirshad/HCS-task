import React from 'react'

export default function FilterComponent(props) {
  const { filterChange , checkDataData } = props;  

    return (
        <div>
            <div className='w-50 mx-auto' >
            <div class="input-group">
                <div class="input-group-prepend">
                <button onClick={()=>filterChange(false)} class="btn btn-outline-secondary" type="button">Search</button>
                <button class="btn btn-outline-secondary" type="button">
                    <i className='fas fa-list' ></i>
                </button>
        </div>
  <input type="text"   class="form-control" placeholder="Filters" aria-label="" aria-describedby="basic-addon1" />
</div>
<div class="card mb-5" style={{width: '100%'}}>
  {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
  <div class="card-body">
    <h5 class="card-title text-left">Kitchen</h5>
    <div className='row d-flex flex-wrap' >
        
    <div  className='col-md-4' >
    {
        checkDataData && checkDataData.map((item)=>(
<p>
            <input style={{margin:'5px'}} onClick={()=> console.log(item.name)} type="checkbox" aria-label="Checkbox for following text input"/>
            {item.name}
            <br/>
</p>
        ))
    }


    </div>
    <div className='col-md-4' >

    {
        checkDataData && checkDataData.map((item)=>(
<p>
            <input style={{margin:'5px'}} onClick={()=> console.log(item.name)} type="checkbox" aria-label="Checkbox for following text input"/>
            {item.name}
            <br/>
</p>
        ))
    }
    </div>
    <div className='col-md-4' >
    {
        checkDataData && checkDataData.map((item)=>(
<p>
            <input style={{margin:'5px'}} onClick={()=> console.log(item.name)} type="checkbox" aria-label="Checkbox for following text input"/>
            {item.name}
            <br/>
</p>
        ))
    }
    </div>
    </div>
  </div>
</div>
            </div>
        </div>
    )
}
