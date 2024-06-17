import React, { useContext } from 'react'
import './style.css'
import { Button, Input, Pagination } from 'antd'
import CartTable from '../../components/Table/CartTable'
import CartContext from './CartContext'
import { DeleteOutlined } from '@ant-design/icons'


const Cart: React.FC = () => {

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext not found</div>;
  }

  const { cartItems, removeItemFromCart, updateItemQuantity } = cartContext;

  const handleQuantityChange = (itemId: number, quantity: number, stock:number) => {
    if(quantity>stock)  quantity=stock;
    updateItemQuantity(itemId, quantity);
 
    
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (

    <div className='CartBody'>
      <h1>GIỎ HÀNG</h1>
      <div className="BackgroundWhite">
        <div className='CartContainer'>
          <div className='Voucher'>
            <b>MÃ GIẢM GIÁ:</b> <span> Chưa có mã giảm giá nào được áp dụng</span>
            <div className='VoucherInput'>
              <Input placeholder="Coupon" style={{ width: 300, height: 55, marginTop: 10, borderRadius: 0 }} />
              <Button type="primary" style={{
                backgroundColor: "#000000",
                height: 55,
                marginTop: 10,
                width: 105,
                borderRadius: 0
              }}>Áp dụng</Button>
            </div>
          </div>

          <div className='ListCart'>
            <div className='ListProductCart'>

              <table className='ant-table'>
                <thead className="ant-table-thead">
                  <tr>
                    <th className='ant-table-cell'>Sản phẩm</th>
                    <th className='ant-table-cell'>Giá</th>
                    <th className='ant-table-cell'>Số lượng</th>
                    <th className='ant-table-cell'>Xóa</th>
                    <th className='ant-table-cell'>Thành tiền</th>
                  </tr>
                </thead>
                <tbody className="ant-table-tbody">
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td className='ant-table-cell ant-table-cell-row-hover' style={{ display:'flex',textAlign:'center'}}>
                        <span style={{ width:'50%' }}><img src={item.image} alt={item.name} style={{ width: '100px', height: '130px' }} /></span>
                        
                        <div className='item-name'>
                          <a >{item.name} </a>
                          <span >Số lượng tồn kho: {item.stock}</span>
                        </div>
                      </td>
                      <td className='ant-table-cell ant-table-cell-row-hover'>{item.price.toLocaleString()} VND</td>
                      <td className='ant-table-cell ant-table-cell-row-hover'>
                        <input
                          type="number"
                          value={item.quantity}
                          style={{ width:68, height:31, textAlign:"center", fontSize:16 }}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value), item.stock)}
                          min="1"
                        />
                      </td>
                      <td className='ant-table-cell ant-table-cell-row-hover'>
                        <img style={{ width:30 }}  src="https://under.vn/images/icon/delete.svg" onClick={() => removeItemFromCart(item.id)} alt="" />
                     
      
                      </td>
                      <td className='ant-table-cell ant-table-cell-row-hover' style={{ width:'20%' }}>{(item.price * item.quantity).toLocaleString()} VND</td>
                    </tr>
                  ))}
                </tbody>
              </table>


            </div>
            <div className='CartPrice'><span>Tổng:</span> <h1>{totalAmount.toLocaleString()} VND</h1></div>
            <div className='CartButton'>
              <div>
                <a href="/shop">
                  <Button type="primary" style={{
                    backgroundColor: "#000000",
                    height: 55,
                    marginTop: 10,
                    width: 172,
                    borderRadius: 0
                  }}>Tiếp tục mua hàng</Button>
                </a>

              </div>

              <div> <a href=""><Button type="primary" style={{
                backgroundColor: "#000000",
                height: 55,
                marginTop: 10,
                width: 122,
                borderRadius: 0
              }}>Thanh toán</Button></a></div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart