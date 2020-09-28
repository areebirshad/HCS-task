import React, { useState } from 'react';
import './App.css';
import HeaderLayout from './components/Header/Header';
import SearchBar from './components/SearchBar';
import RenderMenu from './components/RenderMenu/RenderMenu';
import CustomCard from './components/Card/CustomCard';
import { useSelector } from 'react-redux';
import FilterComponent from './components/FilterComponent/FilterComponent';

function App() {
  debugger;
  const [isOpenFilter,setIsOpenFilter]=useState(false);
  const getData = (state)=>{
    return [...state.menureducer.data];
  }
  const checkData =(state)=>{
    return [...state.menureducer.checkData];
  }
  const data = useSelector(getData);
  const check = useSelector(checkData);
  debugger;
   return (
    <div className="App">
      <HeaderLayout>
        {
          isOpenFilter ? <FilterComponent checkDataData={check} filterChange={setIsOpenFilter} /> : <SearchBar filterChange={setIsOpenFilter} /> 

          
        }
        <RenderMenu>
<div className='row' >
  <div className='col-md-2' ><h3 style={{color:'#D70F64'}}><b>Kanna </b></h3><h3></h3>Kitchen </div>
  <div style={{ overflowY:'scroll',height:400 , flexWrap:'wrap',justifyContent:'center'}} className='col-md-8 d-flex' > 
  {
    data &&  data.map((item)=>(
      <CustomCard data={check} title={item.title} imgUrl={item.imgUrl}   />
    ))
  }
  
  {/* </div> */}
  </div>
  <div className='col-md-2' ></div>
</div>
        </RenderMenu>
      </HeaderLayout>
    </div>
  );
}

export default App;
