import HomeButton from "../components/back.js";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="text-with-background">
        <h1 className="inline-header">About</h1><h1 className="inline-header highlight-header">me</h1>
        <article className="text-body">
          <h3 className="section-title">Education</h3>
          <p>
            I started university in 2013, after finishing college and working in retail for a year, as a Computer Science Student at Coventry University.<br/>
            As someone who was always intersted in technology, it was only natural I would gravitate towards such a path. I would work on various programming modules, including learning and working on RESTful APIs, multithreated programming and Object Oreintated Programming.<br/>
            After finishing all modules, a year in industry and writing my disseration on the effects of UI and motion sickness in VR gaming, I came out of University with a Computer Science BSc, First Class with honours.
          </p>
          <h4 className="sub-title">Ericsson: September 2015⁠–September 2016</h4>
          <p>
            In between my 2nd and 3rd years at university, I worked as a software developer intern at Ericsson. I worked on a product called MediaFirst. I primarly worked on automated testing, including helping setup the Nightwatch.js Selenium framework, which I will go into more detail about <Link to="/work" className="inline-link"><strong>here</strong></Link>.
            {/* Imbed link here https://www.youtube.com/watch?v=YQ8YlkkVcpc */}
          </p>
          <h3 className="section-title">Work</h3>
          <h4 className="sub-title">TCPLifesystems/iPipeline: September 2017⁠–September 2018</h4>
          <p>
            After I finished university, I worked for TCP Lifesystems (Later iPipeline) as a software developer. I was a primarly a front end developer working with a senior frontend developer in a team of 6-8 people, including back end developers, business analysists and project management.<br/>
            Our team worked on the Zurich UK life insurance system, both B2B and customer facing web systems. After about a year of working here, we successfully released the system on schedule, which is still used to this day.
            {/* Insert zurich UK picture here */}
            {/* insert article on iPipeline here https://uk.ipipeline.com/ipipelines-tcp-lifesystems-ss-g-digital-solution-selected-by-zurich/ */}
          </p>
          <h4 className="sub-title">Jaguar Landrover: September 2018–April 2020</h4>
          <p>
            At JLR, I was primarliy based in the research and developement, working on user experience and infortainment systems. Here, I worked on prototyping various test UIs, including biometric data, displaying live heartrate data in a graph format in the infortainment system.<br/>
            I also worked on creating a wireframe prototype for an automated driving demo. This demo would then be used in Dubai, displaying data on the automated vehicles journey for the VIP passengers, while the car drove autonomously to its destination.<br/>
            {/* Insert JLR dubai car here */}
            I spent some time working for other teams as well, including Classic Works, helping the engineering team working on classic vehicles; Drive Event PR, where I helped organise press events for newly released vehicles and Paint shop SVO, where I worked with the paint shop team in Special Vehicle Operations for cars being released in the next 2 months.
          </p>
          <h4 className="sub-title">General Electric: April 2020⁠–Present</h4>
          <p>
            I am currently a Senior Software Developer at General Electric (GE). I am mostly working on front end web systems, but I have also done full-stack web development work and custom Windows credential provider development.<br/>
            I have worked on my own project as the sole front-end developer, adding in brand new functionality to the product. I am also championing and maintaining Javascript best practises, to make sure everyone in the team can stay up to date with mordern development practises, no matter how simple.<br/>
            Unfortunately, I can't go into much detail on the specifics of my projects, but I go more into the technologies used in the projects section of this website. All of which contribute to Visor, which more details of can be found here.
            {/* Insert https://www.gepowerconversion.com/product-solutions/digital/visor*/}
          </p>
        </article>
        <HomeButton/>
      </div>
    </>
  );
}

export default About;
