import React from 'react'

export default function RenderMenu(props) {
    return (
        <div className='mt-5' >
            <div className='d-flex justify-content-center flex-wrap' >
                <a  style={{fontSize:25, color:'black'   }} className={'m-5'}  href="#">DAILY Menu | </a>  
                <a style={{fontSize:25 , color:'black'}} className={'m-5'} href="#">WEEKLY MENU | </a>  
                <a  style={{fontSize:25 , color:'black'}} className={'m-5'} href="#">FROZEN MENU | </a>  
                <a  style={{fontSize:25 , color:'black'}} className={'m-5'} href="#">OCCASIONS MENU</a> 
            </div>
            {props.children}
        </div>
    )
}
