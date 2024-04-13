import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const SinglePropertie = ({id, category, imageUrl, createAt, rooms, area,sellerName}) => {
  return (
    <div>
        <Card
  style={{
    width: '18rem',
    height: '550px'
  }}
>
  <img
    alt={id}
    src={imageUrl}
  />
  <CardBody style={{display:'flex', flexDirection:'column', justifyContent:'space-between', width:'100%'}}>
    <CardTitle tag="h5" >
      {category}
    </CardTitle>
    <CardSubtitle      className="mb-2 text-muted"
      tag="h6"
    >
      A hirdetés feladásának dátuma: {createAt}
    </CardSubtitle>
    <CardText  style={{width:'100%',
    padding: '0'}}>
        Szobák száma: {rooms}
        <br />Alapterület: {area} m<sup>2</sup>  
    </CardText>

  </CardBody>
    <Button style={{backgroundColor:'gray', width:'100%',
    padding: '0'}}>
      Eladó: {sellerName} <MailOutlineIcon />
    </Button>
</Card>
    </div>
  )
}
