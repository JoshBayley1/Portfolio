import HomeButton from "../components/back.js";

const Fun = () => {
    return (
      <>
        <div className="text-with-background">
        <h1 className="inline-header">My</h1><h1 className="inline-header highlight-header">projects</h1>
          <article className="text-body">
            <h4 className="sub-title">Signal Selection Client — Project during employment at General electric</h4>
            <p>
              My largest project so far at GE was the development of a front end web-based client that would be added to a part
              of a larger embedded system. I was the sole front end developer on this and worked in a small team: one back end
              developer and a project manager. I decided to use HTML, CSS and Javascript for this as this needed to seamlessly fit
              into the system.
            </p>
            <ul>
                <li>I developed the client to be capable of efficient data handling with large quantities of data, up to 10000 signals all with data.</li>
                <li>I often liaised with stakeholders and openly discussed the design and technical options to achieve the best possible product.</li>
                <li>I set up an automated testing framework with Nightwatch.js to ensure I developed a more reliable product.</li>
              </ul>
            <h4 className="sub-title">Driverless car HMI — Project at Jaguar Landrover</h4>
            <p>
              I was involved in a project to develop the screen interface that would be used on a driverless car test that was held
              in Dubai. I developed a front-end wireframe in Qt that would then implement data from the vehicle. There would
              be various screens available, with the data shown changing depending on the section of the route. I was the sole
              developer for this project before handing the development over to another developer.
            </p>
            <h4 className="sub-title">SSG Life Insurance System — Major Project at TCP Lifesystems</h4>
            <p>
              I was part of a team that developed the system for a client: Zurich (UK). I was a front-end developer, working both
              on customer-facing and business-facing web-based software. This was an SSG web-based project that was
              developed in MVC architecture. The time spent on this project greatly improved my understanding of working in
              Scrum and agile methodology, working in a team of 3-4 developers and 2 business analysts.
            </p>
            <ul>
                <li>The project was successfully launched, with myself playing a major role in a customer-facing product.</li>
                <li>I adapted quickly since this was a project I was involved in from the start of my employment.</li>
                <li>I worked on a variety of technologies, both front-end and back.</li>
              </ul>
            <h4 className="sub-title">Portfolio Webpage</h4>
            <p>
              Well, you're looking at one of my projects! Albeit, smaller than others, this is a personal task for me. I wanted to showcase myself, my skills and my history all in one place, but with more detail than a CV could provide.<br/>
              I also wanted to learn React.JS for my own personal development and so I can test and potentially drive its implementation in future projects at work. At this point I thought "why not both?", and here is the result!<br/>
              Using React.JS and less, I've created a simple website to showcase my work, projectsand skills.
              {/* TODO: Add link to contact page */}
            </p>
          </article>
          <HomeButton/>
        </div>
      </>
    );
  }
  
  export default Fun;
  