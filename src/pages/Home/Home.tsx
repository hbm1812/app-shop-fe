import React from 'react'
import './style.css'
const Home = () => {
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
