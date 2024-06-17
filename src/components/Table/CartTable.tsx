import React, { useContext } from 'react';
import {  Image, Space, Table, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table;

interface DataType {
    key: React.Key;
    anh: string;
    tensanpham: string;
    gia: string;
    soluong: number;
    thanhtien: string;
}

const data: DataType[] = [
    {
        key: '1',
        anh: 'https://under.vn/_next/image?url=https%3A%2F%2Fapi.under.vn%2Fwp-content%2Fuploads%2F2022%2F09%2FUTS013A.jpg&w=3840&q=75',
        tensanpham: 'UNDER Official Logo Tee/ Black - L',
        gia: '230.000 VND',
        soluong: 1,
        thanhtien: '230.000 VND'
    },
    {
        key: '1',
        anh: 'https://under.vn/_next/image?url=https%3A%2F%2Fapi.under.vn%2Fwp-content%2Fuploads%2F2022%2F09%2FUTS013C.jpg&w=3840&q=75',
        tensanpham: 'UNDER Official Logo Tee/ Green - M',
        gia: '230.000 VND',
        soluong: 1,
        thanhtien: '230.000 VND'
    }

];

const CartTable= () => {
    // const { anh, tensanpham, gia, soluong, thanhtien } = useContext(CartContext);
    return(
        <Table dataSource={data}>
        <ColumnGroup title="Sản phẩm">
       
            <Column dataIndex="anh"
                key="anh"
                render={(_: any, record: DataType) => (
                    <Image
    
                        width={100}
                        src='https://under.vn/_next/image?url=https%3A%2F%2Fapi.under.vn%2Fwp-content%2Fuploads%2F2022%2F09%2FUTS013C.jpg&w=3840&q=75'
                        style={{marginLeft:50 }}
                    />
                )}
            />
    
            <Column dataIndex="tensanpham" key="tensanpham"  />
        </ColumnGroup>
        <Column title="Giá" dataIndex="gia" key="gia" />
        <Column title="Số lượng" dataIndex="soluong" key="soluong" />
    
        <Column
            title="Xóa"
            key="action"
            render={(_: any, record: DataType) => (
                <DeleteOutlined />
            )}
        />
        <Column title="Thành tiền" dataIndex="thanhtien" key="thanhtien" />
    </Table>
       );
      
    
};
   
export default CartTable;