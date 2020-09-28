import React from 'react'
import Menu from '../Menu/Menu'

export default function CustomCard({title,imgUrl,data}) {
    return (
        <div>
            <div class="card-img-overlay box d-flex justify-content-center" style={{height:275,width:280,margin:5}}>
  <img height={240} width={80} class="card-img-top" src={imgUrl} alt="Card image" />
  <div class="card-body">  
    <p class="card-title text text-left p-2 d-flex align-items-center" style={{justifyContent:'space-between',fontSize:20}} >

    <Menu data={data} />

    {/* <button className='btn btn-primary' style={{height:40}}  >Order</button> */}
    </p>

  </div>
</div>
        </div>
)
}
