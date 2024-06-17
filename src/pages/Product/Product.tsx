import React, { useContext } from 'react'
import { BreadcrumbFix } from './style'
import './style.css'
import { Button, Col, Flex, Row } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import CartContext from '../Cart/CartContext'

const product = {   stock:10, id: 1, name: 'UNDER Higher Tee/ White', price: 230000, quantity: 1, image: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg' }
// const product = { stock:5, id: 2, name: 'UNDER Official Logo Tee/ Black - M', price: 230000, quantity: 1, image: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013A.jpg'}
;

const Product = () => {
    const [isThongTinSanPham, setIsThongTinSanPham] = React.useState(true);
    const [isHuongDanLuaSize, setIsHuongDanLuaSize] = React.useState(true);


    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <div>Error: CartContext not found</div>;
    }

    const { addItemToCart } = cartContext;
    return (
        <>
            <div className='Body'>
                <div className='BreadcrumbAndSelectContainer'>
                    <div className='Breadcrumb'>
                        <BreadcrumbFix
                            separator=">"
                            items={[
                                {
                                    title: 'Trang chủ',
                                    href: '/',
                                },
                                {
                                    title: 'Shop',
                                    href: '/',
                                },
                                {
                                    title: 'UNDER Higher Tee / White',

                                },

                            ]}
                        />
                    </div>
                </div>


                <div className='Container'>
                    <div className='ContentLeft'>
                        <div className='MainImage'>
                            <img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-01.jpg" alt="" />
                        </div>
                        <div className='ListImage'>
                            {/* <div className='SmallImage'> <img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-01.jpg" alt="" /></div>
                            <div className='SmallImage'> <img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-01.jpg" alt="" /></div>
                            <div className='SmallImage'> <img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-01.jpg" alt="" /></div>
                            <div className='SmallImage'> <img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-01.jpg" alt="" /></div>
                            <div className='SmallImage'> <img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-01.jpg" alt="" /></div>
                            <div className='SmallImage'> <img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-01.jpg" alt="" /></div> */}

                            <ul className="thumbnail-list">
                                <li><img src="https://api.under.vn/wp-content/uploads/2022/04/under-higher-tee-white-UTS010B.jpg" alt="Thumbnail 1" className="thumbnail" data-large-image-src="https://api.under.vn/wp-content/uploads/2022/04/under-higher-tee-white-UTS010B.jpg" /></li>
                                <li><img src="https://api.under.vn/wp-content/uploads/2022/04/under-higher-tee-white-UTS010B_2.jpg" alt="Thumbnail 1" className="thumbnail" data-large-image-src="https://api.under.vn/wp-content/uploads/2022/04/under-higher-tee-white-UTS010B_2.jpg" /></li>
                                <li><img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-01.jpg" alt="Thumbnail 1" className="thumbnail" data-large-image-src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-01.jpg" /></li>
                                <li><img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-05.jpg" alt="Thumbnail 1" className="thumbnail" data-large-image-src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-05.jpg" /></li>
                                <li><img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-08.jpg" alt="Thumbnail 1" className="thumbnail" data-large-image-src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-08.jpg" /></li>
                                <li><img src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-06.jpg" alt="Thumbnail 1" className="thumbnail" data-large-image-src="https://api.under.vn/wp-content/uploads/2022/04/Higher-trang-06.jpg" /></li>

                            </ul>

                        </div>

                    </div>
                    <div className='ContentRight'>
                        <h1>{product.name}</h1>
                        <div className='Price'>
                            <span>{product.price}</span>
                            <span>.000 VND</span>
                        </div>

                        <div className='Size'>
                            <h2>Size:</h2>
                            <Flex gap="small" wrap >
                                <Button style={{ width:80, borderRadius:0 }}>M</Button>
                                <Button style={{ width:80, borderRadius:0 }}>L</Button>
                                <Button style={{ width:80 , borderRadius:0}}>XL</Button>
                            </Flex>

                        </div>

                        <div className='SoLuong'>
                            <span>Số lượng:</span>
                            <div className='Count'>
                                <button id="decrementButton">-</button>
                                <span id="numberDisplay">1</span>
                                <button id="incrementButton">+</button>
                            </div>

                        </div>

                        <div className='BtnAddToCart'>
                        <button onClick={() => addItemToCart(product)}>THÊM VÀO GIỎ HÀNG</button>
                        </div>


                        <div className='Collapse'>
                            <button onClick={() => setIsThongTinSanPham(!isThongTinSanPham)}>
                                <RightOutlined /> <span>Thông tin sản phẩm</span>
                            </button>
                            {!isThongTinSanPham && (
                                <div className="ThongTinSanPham">
                                    <hr />
                                    <br />
                                    <p>Thương hiệu: UNDER </p>
                                    <p>Mã sản phẩm: UTSO10B</p>
                                    <p>Chất liệu: 100% Cotton (230gsm)</p>
                                    <p>Màu sắc: Wite (Trắng)</p>
                                    <p>Size: M/L/XL</p>
                                </div>
                            )}
                        </div>

                        <div className='Collapse'>
                            <button onClick={() => setIsHuongDanLuaSize(!isHuongDanLuaSize)}>
                                <RightOutlined /> <span>Hướng dẫn lựa size</span>
                            </button>
                            {!isHuongDanLuaSize && (
                                <div className="HuongDanLuaSize">
                                    <hr />
                                    <img src="https://api.under.vn/wp-content/uploads/2022/07/New_Size_chart-copy.jpg" alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <hr />
                <div className='Collection'>

                    <p>SẢN PHẨM BẠN QUAN TÂM</p>

                    <div className='CollectionContainer'>
                        <div className='Product'>
                            <a href="">
                                <div className='ProductImg'>
                                    <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS025_2-1.jpg" alt="" />
                                </div>
                                <div className='Title'>
                                    <h2>UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE</h2>
                                    <span>250.000</span>
                                    <span>VND</span>
                                </div>
                            </a>
                        </div>

                        <div className='Product'>
                            <a href="">
                                <div className='ProductImg'>
                                    <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS024_2-1.jpg" alt="" />
                                </div>
                                <div className='Title'>
                                    <h2>UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE</h2>
                                    <span>250.000  <span> VND</span> </span>

                                </div>
                            </a>
                        </div>

                        <div className='Product'>
                            <a href="">
                                <div className='ProductImg'>
                                    <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS025_2-1.jpg" alt="" />
                                </div>
                                <div className='Title'>
                                    <h2>UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE</h2>
                                    <span>250.000</span>
                                    <span>VND</span>
                                </div>
                            </a>
                        </div>

                        <div className='Product'>
                            <a href="">
                                <div className='ProductImg'>
                                    <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS024_2-1.jpg" alt="" />
                                </div>
                                <div className='Title'>
                                    <h2>UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE</h2>
                                    <span>250.000</span>
                                    <span>VND</span>
                                </div>
                            </a>
                        </div>


                    </div>


                </div>
            </div>
        </>

    )
}


export default Product

