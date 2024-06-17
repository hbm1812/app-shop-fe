import React, { useContext, useState } from 'react'
import { Button, Col, MenuProps, Row, Dropdown, Space, Badge } from 'antd';
import { DownOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { MenuDropDownText } from './style';
import './style.css'
import ModalSearch from '../Modal/ModalSearch';
import CartContext from '../../pages/Cart/CartContext';



const HeaderComponent = () => {

  const cartContext = useContext(CartContext);


  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a rel="noopener noreferrer" href="/shop">
          <MenuDropDownText>ALL</MenuDropDownText>
        </a>
      ),

    },
    {
      key: '2',
      label: (
        <a rel="noopener noreferrer" href="">
          <MenuDropDownText>T-SHIRT</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a rel="noopener noreferrer" href="">
          <MenuDropDownText>HOODIE</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a rel="noopener noreferrer" href="">
          <MenuDropDownText>SWEATER</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a rel="noopener noreferrer" href="">
          <MenuDropDownText>PANTS</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a rel="noopener noreferrer" href="">
          <MenuDropDownText>JACKET</MenuDropDownText>
        </a>
      ),
    },
    {
      key: '7',
      label: (
        <a rel="noopener noreferrer" href="">
          <MenuDropDownText>ACCESSORIES</MenuDropDownText>
        </a>
      ),
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='MenuContainer'>

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
        <div className='MenuLogoContainer'><a href="/"><img src="https://api.under.vn/wp-content/uploads/2022/09/logo-2.svg" width={120} height={20} alt="" /></a></div>
        <div className="MenuContent">
          <div className='MenuIcon'>
            <SearchOutlined onClick={showModal} />
            <ModalSearch setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}></ModalSearch>
          </div>

          <div className='MenuIcon'><a href="/login"><UserOutlined /></a></div>
          <div className='MenuIcon'><a href="/cart">
            <Badge count={  cartContext?.cartItems.length} showZero>
              <ShoppingCartOutlined style={{ fontSize: 25 }} />
            </Badge></a></div>
        </div>

      </div>

    </>
  )
}

export default HeaderComponent