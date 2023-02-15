import React from 'react';
import MyMenu from '../components/MyMenu/MyMenu';
import MyFooter from '../components/MyFooter/MyFooter';
import MyHeader from '../components/MyHeader/MyHeader';
import MyModal from '../components/MyModal/MyModal';
import NavPanel from '../components/NavPanel/NavPanel';
import data from '../data.js';


function Menu() {

    const menu = {
        backgroundColor: '#F1EEDB',
      };

  return (
    <div>
      <MyHeader/>
      <NavPanel/>
      <div style={menu}>
        <MyMenu coffee={data}/>
      </div>
      <MyModal coffee={data[0]}/>
      <MyFooter/>
    </div>
  );
}

export default Menu;
