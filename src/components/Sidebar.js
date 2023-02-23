import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import user from '../images/user.jpg';
import logo from '../images/cover.png'

const Nav = styled.div`
  background: #fafafa;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #FFFFFF;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(235, 255, 232) 0px 8px 24px;
  position: fixed;
  top: 0;
  overflow: hidden;
`;

const SidebarWrap = styled.div`
  height: 100%;
  overflow: auto;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // Set "isActive" to true for the first item in SidebarData
  SidebarData[0].isActive = true;

  return (
    <>
      <IconContext.Provider value={{ color: '#000000' }}>
        <Nav>
        <img src={user} style={{ width: '3%', height: '60%', marginLeft:"90%"}}/> <a style={{marginLeft:"2%" , fontWeight:"600"}}>John</a> 
         
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <img src={logo} style={{ width: '50%', height: 'auto', marginLeft:'15%' , marginTop:'10%' ,marginBottom:'10%'}} alt="logo" />
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
