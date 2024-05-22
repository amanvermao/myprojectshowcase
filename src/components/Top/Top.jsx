import React from 'react'
import './Top.css'

const Top = () => {
  return (
    <>
      <div className="top-contaner">
        <div className="top-text">
          <span>my freelance work</span>
        </div>
        <div className="top-main">
          <div className="box1">
            <div className="r-box">
              <img className='top-imgs' src="src/assets/Top/img1.png" alt="" />
              <div className="dark-layer">
              </div>
             
              <div className="box-detail">
                <div className="box-detail-r">
                  <span className='box-detail-r-heading'>The Skin Clinic</span><br />
                  <span>HTML,CSS,JavaScript,Bootstrap,Email.js</span>

                </div>
                
                <a href="https://drujjvalajadhav.com/" target='blank'><div className="box-detail-l">
                  <div className="arrow-wrapper">
                    <i className="arrow fa-solid fa-arrow-right"></i>
                  </div>
                </div></a>
              </div>
             

            </div>
            <div className="l-box">
              <img className='top-imgs' src="src/assets/Top/img2.png" alt="" />

              <div className="dark-layer">
              </div>
            
            <div className="box-detail">
                <div className="box-detail-r">
                  <span className='box-detail-r-heading'>Orthodontist Website</span><br />
                  <span>HTML,CSS,JavaScript,Bootstrap,Email.js</span>

                </div>
                <a href="https://drsukhman.in/" target='blank'>
                <div className="box-detail-l">
                  <div className="arrow-wrapper">
                    <i className="arrow fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                </a>
              </div>
           
            </div>
          </div>

          <div className="box-2">
            <div className="c-box">
              <img className='top-imgs' src="src/assets/Top/img3.png" alt="" />
              <div className="dark-layer">
              </div>
            
             <div className="box-detail">
                <div className="box-detail-r">
                  <div> <span className='box-detail-r-heading'>Article Posting Website UI</span><br />
                    <span>HTML,CSS,JavaScript,Bootstrap,firebase</span></div>

                </div>
               <a href="https://www.linkedin.com/in/aman-verma-243530220/recent-activity/all/" target='blank'>
               <div className="box-detail-l">
                  <div className="arrow-wrapper">
                    <i className="arrow fa-solid fa-arrow-right"></i>
                  </div>
                </div>
               </a>
              </div>
           
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Top
