import React from 'react'
import './style.css';

import { Breadcrumb, Pagination, Select } from 'antd';
import { BreadcrumbFix } from './style';
import { IProducts } from './interfaces/typeShop';
import ListProduct from '../../components/ListProduct';

const Shop = () => {
    const dataProduct: IProducts[] = [

        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },
        {
            tenSanPham: 'UNDER "12 ZODIAC" AQUARIUS TEE/ BLUE',
            anh: 'https://api.under.vn/wp-content/uploads/2022/09/UTS013B.jpg',
            giaTien: '250.000'
        },


    ]

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


                <ListProduct data={dataProduct}></ListProduct>

                <div className='Pagination'>
                    <Pagination defaultCurrent={1} total={30} />
                </div>

            </div>
        </>

    )
}

export default Shop