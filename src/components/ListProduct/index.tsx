import React from 'react'
import './_listProduct.scss'
interface ListProduct {
    data: any[];
}
type Props = {
}
const ListProduct: React.FC<ListProduct> = ({ data }) => {
    return (
        <>

            <div className='ProductContainer'>
                {data.map((item, index) => (
                    <div className='Product'>
                        <a href="/product">
                            <div className='ProductImg'>
                                <img src={item.anh} alt="" />
                            </div>
                            <div className='Title'>
                                <h2>{item.tenSanPham}</h2>
                                <span>{item.giaTien}</span>
                                <span>VND</span>
                            </div>
                        </a>
                    </div>

                ))}
            </div>

        </>

    )
}

export default ListProduct