import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../../assets/img/bookTest.png";
import TrackVisibility from 'react-on-screen';

// import 'animate.css';

export default observer ( function BannerHome(){
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Library", "Events", "Dates" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
}, [text])

const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
    setDelta(prevDelta => prevDelta / 2);
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setIndex(prevIndex => prevIndex - 1);
    setDelta(period);
  } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setIndex(1);
    setDelta(500);
  } else {
    setIndex(prevIndex => prevIndex + 1);
  }
}


return (
<section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to Reactivities</span>
                <h1>{`Welcome to Anodyne`} <span className="txt-rotate"  data-rotate='[ "Library", "Events", "Dates" ]'><span className="wrap">{text}</span></span></h1>
                  <p style={{color:'pink',fontFamily:'Tuesday night',fontSize:40}}> "The best is when you find a book you can't put down."</p>
                  <button  onClick={() => console.log('connect')}><a href="/activities" style={{color:'white'}}>Let’s Connect</a> <ArrowRightCircle size={25} /></button>
                  <button  onClick={() => console.log('connect')}><a href="/emailactivities" style={{color:'white'}}>Contact Us</a> <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img style={{width:700,height:500}} src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
})