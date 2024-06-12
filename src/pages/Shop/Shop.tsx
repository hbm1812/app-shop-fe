import React from 'react'
import './style.css';

import { Breadcrumb, Pagination, Select } from 'antd';
import { BreadcrumbFix } from './style';

const Shop = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

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
                                },

                            ]}
                        />
                    </div>
                    <div className='Select'>

                        <div className='TitleSelect'>
                            <span>Bộ lọc</span>
                        </div>
                        <Select
                            defaultValue="Sản phẩm mới nhất"
                            style={{ width: 240, height: 33 }}
                            onChange={handleChange}
                            options={[
                                { value: '0', label: 'Sản phẩm mới nhất' },
                                { value: '1', label: 'Giá thấp nhất' },
                                { value: '2', label: 'Giá cao nhất' },
                                { value: '3', label: 'Bán chạy nhất' },
                            ]}
                        />
                    </div>
                </div>

                {/* Sản phẩm hang 1 */}
                <div className='ProductContainer'>
                    <div className='Product'>
                        <a href="/product">
                            <div className='ProductImg'>
                                <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg" alt="" />
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
                                <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS013A.jpg" alt="" />
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
                                <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS013C.jpg" alt="" />
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
                                <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS026_2-1.jpg" alt="" />
                            </div>
                            <div className='Title'>
                                <h2>UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE</h2>
                                <span>250.000</span>
                                <span>VND</span>
                            </div>
                        </a>
                    </div>

                    


                </div>

                {/* Sản phẩm hang 2 */}
                <div className='ProductContainer'>
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

                {/* Sản phẩm hang 3 */}
                <div className='ProductContainer'>
                    <div className='Product'>
                        <a href="">
                            <div className='ProductImg'>
                                <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS021_1.jpg" alt="" />
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
                                <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS020_2-1.jpg" alt="" />
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
                                <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS019_2-1.jpg" alt="" />
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
                                <img src="https://api.under.vn/wp-content/uploads/2022/09/UTS018_2-1.jpg" alt="" />
                            </div>
                            <div className='Title'>
                                <h2>UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE</h2>
                                <span>250.000</span>
                                <span>VND</span>
                            </div>
                        </a>
                    </div>

                    


                </div>

                <div className='Pagination'>
                    <Pagination defaultCurrent={1} total={30} />;
                </div>
                
            </div>
        </>

    )
}

export default Shop