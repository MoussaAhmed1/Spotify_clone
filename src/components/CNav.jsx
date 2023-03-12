import React from 'react'
import './css/Nav.css'
import { logo1 } from '../assets/images/imgsImport'
export default function CNav() {
  return (
    <nav>
        <div className="nav content">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="logo">
                  <img src={logo1} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}
