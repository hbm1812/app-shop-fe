import React from 'react'
import './style.css'
import { INewCollectionData } from './interfaces/typeHome'
import ListProduct from '../../components/ListProduct'
const Home = () => {

  const NewCollectionData: INewCollectionData[] = [

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
  return (
    <>
      <div className='body'>

        <div className='Contaner'>
          <div>
            <video className="video" autoPlay muted loop src="https://api.under.vn/wp-content/uploads/2022/09/UNDER-LOOKBOOK-FINAL.mp4"></video>
          </div>
        </div>

        <div className='NewCollection'>

          <p>NEW COLLECTION</p>

          <ListProduct data={NewCollectionData}></ListProduct>


        </div>

        <a href="">
          <div className='ButtonContain'>

            <div className='Btn'>
              <p>Xem thêm</p>
            </div>

          </div>
        </a>

        <div className='Banner'>
          <img src="https://under.vn/_next/image?url=https%3A%2F%2Fapi.under.vn%2Fwp-content%2Fuploads%2F2022%2F09%2FOJS9769-scaled.jpg&w=3840&q=75" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
