import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import logo from '../images/cover.png';

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
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  box-shadow: rgba(235, 255, 232) 0px 8px 24px;
  position: fixed;
  top: 0;
  

`;

const SidebarWrap = styled.div`
  width: 100%;
  
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#9C9C9C' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar} >
          <SidebarWrap>
            
              <img src={logo} style={{width:'80%',height:'10%' , padding:"10px"}}></img>
           
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
