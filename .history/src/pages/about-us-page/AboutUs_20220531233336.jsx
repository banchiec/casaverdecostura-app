import React from 'react'
import {  GiAmpleDress} from 'react-icons/gi' 
import {FiMapPin} from "react-icons/fi" 
import {MdOutlineSupportAgent} from "react-icons/md" 
import "./AboutUs.css"
import { Container, Row, Col } from 'react-bootstrap'
export const AboutUs = () => { 
  return (
    <Container>
      <Row>
        <Row>
          <h3>Contacta Con CASAVERDECOSTURA</h3>
          <h4>Tienes alguna duda? Contáctanos para visitar nuestra tienda, consultar sobre algún producto o concertar una cita</h4>
        </Row>
        <Row>
          <Col xs={12} >
            <div className='contact-content-item'>
              <div className='contacts-content_icon'><GiAmpleDress className="icon"/></div>
              <div className='contacts-content_title'>¡Hablemos!</div>
              <div className='contacts-content_phone'><p>Teléfono +34 910 646 998</p></div> 
              <div className='contacts-content_whatsapp'><p>Whatsapps: + 34 610 600 745 </p></div> 
              <div className='contacts-content_gmail'><a href="mailto:casaverdecostura@.es">casaverdecostura@.es</a></div> 
            </div>
          </Col>
          <Col xs={12}>
          </Col>
          <Col xs={12}>
          </Col>
        </Row>
      </Row>
      <div className='contacts-container'>
          <div className='contacts-title'><h3>Contacta Con CASAVERDECOSTURA</h3></div> 
          <div className='contacts-subtitle'><h4>Tienes alguna duda? Contáctanos para visitar nuestra tienda, consultar sobre algún producto o concertar una cita</h4></div>  
          <div className='contacts-content'> 
              <div className='contact-content-item'>
                <div className='contacts-content_icon'><GiAmpleDress className="icon"/></div>
                <div className='contacts-content_title'>¡Hablemos!</div>
                <div className='contacts-content_phone'><p>Teléfono +34 910 646 998</p></div> 
                <div className='contacts-content_whatsapp'><p>Whatsapps: + 34 610 600 745 </p></div> 
                <div className='contacts-content_gmail'><a href="mailto:casaverdecostura@.es">casaverdecostura@.es</a></div> 
              </div>
              <div className='contact-content-item'>
              <div className='contacts-content_icon'><FiMapPin className='icon'/></div>
              <div className='contacts-content_title'><p>Visitanos</p></div>
              <div className='contacts-content_direction'><p>Goya 127<br/> 28009 Madrid</p></div> 
              <div className='contacts-content_time'>L-V 10:30-14:30, 16:30-20:30<br/>Sabados: 10:30-15:00<p></p></div> 
              </div>
              <div className='contact-content-item'>
              <div className='contacts-content_icon'><MdOutlineSupportAgent className='icon'/></div>
              <div className='contacts-content_title'><p>ATENCION AL CLIENTE</p></div>
              <div className='contacts-content_gmail'><a href="mailto:casaverdecostura@.es">casaverdecostura@.es</a></div> 
              </div>                          
          </div> 
          <div className='how-to-reach_us'>
              <a href='https://www.google.es/maps/place/Casaverde+costura/@40.4247188,-3.6727799,17z/data=!3m1!4b1!4m5!3m4!1s0xd4228b025371a57:0x5ba7c57729cc6b59!8m2!3d40.4247158!4d-3.6706092?hl=es'>Como llegar?</a>
          </div>
      </div>
   </Container>
  )
}
  
  