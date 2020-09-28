import React from 'react'

export default function Menu({data}) {
    return (
        <div>
            <div id="menu">
    <ul>
        <li style={{backgroundColor:"black"}}><a>Weekly</a>
                <ul style={{ height:170,overflowY:'scroll',width:240}} >
                        <li><a>Chicken 
                        <b style={{fontSize:19}} >
                             DumpStick DumpStick
                            </b> 
                        </a></li>
                        {
                            data && data.map((item)=>(
                                <li><a style={{fontSize:19 , color:'black'}} href="#">{item.name}</a></li>
                            ))
                        }
                </ul>
        </li>   
    </ul>
</div>
        </div>
    )
}
