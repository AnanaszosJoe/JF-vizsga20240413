import React from 'react'
import {properties} from '../data'
import { SinglePropertie } from './SinglePropertie.jsx'

export const Properties = () => {
  return (
    <div>
      <h3 className='properties'>Aktuális ingatlan kínálatunk</h3>
      <div className="container d-flex justify-content-center gap-3 flex-wrap">

        {properties.map(obj=>
        <SinglePropertie key={obj.id} {...obj}/>
        )}
      </div>
    </div>
  )
}

