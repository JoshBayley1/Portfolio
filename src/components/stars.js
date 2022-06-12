import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React from 'react';
import styled, {keyframes } from 'styled-components';
import PlanetOne from '../assets/planetOne.png'
import PlanetTwo from '../assets/planetTwo.png'
import PlanetThree from '../assets/planetThree.png'
import PlanetData from "../json/imageData.json"

const planets = [
  PlanetOne,
  PlanetTwo,
  PlanetThree
]

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: white;
  overflow: hidden;
  background: radial-gradient(circle at center, #CED3DC 0%, #2F394D 2%, #181C25 100%);
  height: 100%;
  width: 100%;
  z-index: -1;
`;

function getOrbitDistance(rangeArr) {
  //TODO: Write some logic to make sure bodies don't overlap
  const distance = (Math.floor(Math.random() * 45) + 5);
  console.log("distance final: ", distance);
  return distance;
}

function getOrbitTime(distance) {
  const time = Math.sqrt(Math.pow(distance * 3, 3))/5;
  return time;
}

const getAnimationDetails = (distance) => {
  const orbit = keyframes`
    0%{
      transform:rotate(0deg)
                translate(-${distance}vh)
                rotate(0deg);
    }
    100%{
      transform:rotate(360deg)
                translate(-${distance}vh)
                rotate(-360deg);
    }
  }`
  return orbit;
}

const getSpinDetails = (planet) => {
  const width = planet.size * planet.framesWidth;
  const height = planet.size * planet.framesHeight;
  const spinX = keyframes`
    0%{
      background-position-x: 0px;
    }
    100%{
      background-position-x: -${width}px;
    }
  }`
  const spinY = keyframes`
    0%{
      background-position-y: 0px;
    }
    100%{
      background-position-y: -${height}px;
    }
  }`
  const spin = [spinX, spinY];
  return spin;
}

function GenerateBody(planet, i, distanceArr) {
  const planetImg = planets[i];
  const arrPicker = Math.floor(Math.random() * distanceArr.length);
  const distance = distanceArr[arrPicker];
  const time = getOrbitTime(distance);
  const animation = getAnimationDetails(distance);
  const spin = getSpinDetails(planet);
  const delay = (Math.floor(Math.random() * 1000));
  const bodyName = `orbital-body body-${i}`;
  const element = <OrbitalPath distance={distance} key={i}><OrbitalBody className={bodyName} key={i} animation={animation} spin={spin} planet={planet} animationTime={time} delay={delay} img={planetImg}></OrbitalBody></OrbitalPath>
  const data = {
    "element": element,
    "indexToRemove": arrPicker
  }
  console.log("return data: ", data)
  return data;
}

const OrbitalBody = styled.div`
  position: absolute;
  width: ${props => props.planet.size}px;
  height: ${props => props.planet.size}px;
  animation: ${props => props.animation} ${props => props.animationTime}s linear infinite,
  ${props => props.spin[0]} ${props => props.planet.spinTime/props.planet.framesHeight}s steps(${props => props.planet.framesWidth}) infinite,
  ${props => props.spin[1]} ${props => props.planet.spinTime}s steps(${props => props.planet.framesHeight}) infinite;
  animation-delay: -${props => props.delay}s;
  top:0; bottom:0; left:0;right:0;
  overflow:hidden;
  margin:auto;
  background: url(${props => props.img});
`;

const OrbitalPath = styled.div`
  width:${props => props.distance*2}vh;
  height:${props => props.distance*2}vh;
  //border:1px solid #CCC;
  position:absolute;
  top:0; bottom:0; left:-${props => props.distance}vh;right:0;
  margin:auto;
  border-radius:50%; 
`;

//debugging purposes only
// const OrbitalPath = styled.div`
//   width:${props => props.distance*2}vh;
//   height:${props => props.distance*2}vh;
//   border:1px solid #CCC;
//   position:absolute;
//   top:0; bottom:0; left:-${props => props.distance}vh;right:0;
//   margin:auto;
//   border-radius:50%; 
// `;

function GetBodies() {
  let arr = [];
  let distanceArr = [10, 19, 28, 37, 46];
  PlanetData.forEach(function(planet, i)  {
    console.log("distanceArr before: ", distanceArr);
    const data = GenerateBody(planet, i, distanceArr);
    arr.push(data.element);
    distanceArr.splice(data.indexToRemove, 1);
    console.log("distanceArr after: ", distanceArr);
  })
  return <div className='orbit-container'>{arr}</div>;
}

const Stars = ({ children, ...props }) => (
  <div className='page-container'>
    <Container {...props}>
        {
          GetBodies()
        }
    </Container>
    {children}
  </div>
  
);

export default Stars;