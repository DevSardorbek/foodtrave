import React from 'react'
import NavbarTop from "../../components/navbar/NavbarTop"
import NavbarBotttom from '../../components/navbar/NavbarBottom'
import Lines from '../../components/lines/Lines'
import adminimg from "../../assets/images/adminimg.png"
import "../../sass/__admin.scss"
import line from "../../assets/images/liness/Group - 5/Vector.png"
import Footer from '../../components/footer/Footer'
import { Navigate } from 'react-router-dom'

const Admin = () => {
  return (
    <>
      <NavbarTop/>
      <NavbarBotttom/>
      <Lines/>
      <div className='admin_panel_section'>
        <div className="container">
          <div className="admin_panel_wrapper">
            <div className="admin_panel_info">
              <h2>Admin panel</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                rerum quod. Tempora magni autem a voluptatibus neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus
                suscipit voluptatum eius perferendis amet!.
              </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                  architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus
                  libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                  blanditiis quod aspernatur! Iusto?
                </p>
                <div className='vendors'>
                    <div className='vendor'>
                      <div className='ven'>
                        <h1>0.1</h1>
                        <h3>K</h3>
                      </div>
                        <p>Vendors</p>
                    </div>
                    <div className='vendor'>
                      <div className='ven'>
                        <h1>23</h1>
                        <h3>K</h3>
                      </div>
                        <p>Customers</p>
                    </div>
                    <div className='vendor'>
                      <div className='ven'>
                        <h1>2</h1>
                        <h3>K</h3>
                      </div>
                        <p>Products</p>
                    </div>
                </div>
            </div>
            <div className="admin_panel_img">
              <img src={adminimg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='card_section'>
        <div className="container">
          <div className="card_wrapper">
            <div className="card">
                <img src={line} alt="" />
                <h3>Product Packing</h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipisicing.</p>
            </div>
            <div className="card">
                <img src={line} alt="" />
                <h3>24X7 Support</h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipisicing.</p>
            </div>
            <div className="card">
                <img src={line} alt="" />
                <h3>Delivery in 5 Days</h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipisicing.</p>
            </div>
            <div className="card">
                <img src={line} alt="" />
                <h3>Payment Secure</h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Admin