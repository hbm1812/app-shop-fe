import React from 'react'
import { Button, Col, MenuProps, Row, Dropdown, Space } from 'antd';
import { DownOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { MenuDropDownText   } from './style';
import './style.css'
const HeaderComponent = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a  rel="noopener noreferrer" href="">
          <MenuDropDownText>ALL</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a  rel="noopener noreferrer" href="">
          <MenuDropDownText>T-SHIRT</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a  rel="noopener noreferrer" href="">
          <MenuDropDownText>HOODIE</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a  rel="noopener noreferrer" href="">
          <MenuDropDownText>SWEATER</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a  rel="noopener noreferrer" href="">
          <MenuDropDownText>PANTS</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a  rel="noopener noreferrer" href="">
          <MenuDropDownText>JACKET</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '7',
      label: (
        <a  rel="noopener noreferrer" href="">
          <MenuDropDownText>ACCESSORIES</MenuDropDownText>
        </a>
      ),
    },
  ];

  return (
    <div className='MenuContainer'>
    
        {/* <Col span={6}>
          <Row justify="space-between">
            <Col span={4}>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <MenuText>SHOP</MenuText>
                  </Space>
                </a>
              </Dropdown>
            </Col>
            <Col span={4}><MenuText>BLOG</MenuText></Col>
            <Col span={4}><MenuText>COLLECTION</MenuText></Col>
            <Col span={4}><MenuText>OUTFIT</MenuText></Col>
          </Row>
        </Col>
        <LogoCol span={12} >
        <img src="https://api.under.vn/wp-content/uploads/2022/09/logo-2.svg" width={120} height={20} alt="" />   
        </LogoCol>
        <Col span={6}>col-8</Col> */}

        <div className="MenuContent">
          <div className='MenuItem'><a href=""><Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    SHOP
                  </Space>
                </a>
              </Dropdown></a></div>
          <div className='MenuItem'><a href="">BLOG</a></div>
          <div className='MenuItem'><a href="">COLLECTION</a></div>
          <div className='MenuItem'><a href="">OUTFIT</a></div>
        </div>
        <div><img src="https://api.under.vn/wp-content/uploads/2022/09/logo-2.svg" width={120} height={20} alt="" /></div>
        <div className="MenuContent">
          <div className='MenuIcon'><SearchOutlined /></div>
          <div className='MenuIcon'><UserOutlined /></div>
          <div className='MenuIcon'><ShoppingCartOutlined /></div>
        </div>
      
    </div>
  )
}

export default HeaderComponent