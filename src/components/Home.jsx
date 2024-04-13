import React from 'react'
import  background from '../../public/background.png'
import  haz from '../../public/haz.jpg'
import  panel from '../../public/panel.jpg'
import  nyaralo from '../../public/nyaralo.jpg'

export const Home = () => {
  return (
    <div className='container home'>
        <header className='container shadow d-flex '>
            <h1 className='mt-3'>Ingatlaniroda</h1>
        </header>
        <main className=' mt-3 col-12'>
            <h4>Ingatlanok minden kategóriában</h4>
            <div className="row">
                <div className="myCard col-md-4 p-2 rounded">
                    <img src={haz} alt="haz" className="img-fluid myimg rounded" />
                    <p>Házak</p>
                </div>
                <div className="myCard col-md-4 p-2 rounded ">
                    <img src={panel} alt="lakas" className="img-fluid myimg rounded " />
                    <p>Lakások</p>
                </div>
                <div className="myCard col-md-4 p-2 rounded ">
                    <img src={nyaralo} alt="nyaralo" className="img-fluid myimg rounded " />
                    <p>Nyaralók</p>
                </div>
            </div>
        </main>
        <footer>
            <hr />
            <p className='footer'>© 2024 JF project. All rights reserved.</p>
        </footer>
    </div>
  )
}
