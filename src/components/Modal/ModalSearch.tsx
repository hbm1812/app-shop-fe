import { Modal } from 'antd'
import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import CartContext from '../../pages/Cart/CartContext';

type Props = {

    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    isModalOpen: boolean;
  }

const ModalSearch = (props: Props) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext not found</div>;
  }

  const { cartItems, removeItemFromCart } = cartContext;
    const { isModalOpen, setIsModalOpen } = props;



  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    
      </Modal>
      </>
  )
}

export default ModalSearch