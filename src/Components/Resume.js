import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;

      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })

      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

      var pythonCert = this.props.data.pythonCert.map(function(pythonCert){
        return <div key={pythonCert.category}><h3>{pythonCert.category}</h3>
            <a className="certInfo" href={pythonCert.link1}>{pythonCert.certification1} {pythonCert.description1}<span>&bull;</span> <em className="certDate">{pythonCert.years1}</em></a>
            <br /><a className="certInfo" href={pythonCert.link2} target="_blank">{pythonCert.certification2} {pythonCert.description2}<span>&bull;</span> <em className="certDate">{pythonCert.years2}</em></a>
            <br /><a className="certInfo" href={pythonCert.link3} target="_blank">{pythonCert.certification3} {pythonCert.description3}<span>&bull;</span> <em className="certDate">{pythonCert.years3}</em></a>
            <br />
            <br /><a className="certInfo" href={pythonCert.link4} target="_blank">{pythonCert.certification4} {pythonCert.description4}<span>&bull;</span> <em className="certDate">{pythonCert.years4}</em></a>
            <p></p>
        </div>
      })

      var cloud = this.props.data.cloud.map(function(cloud){
        return <div key={cloud.category}><h3>{cloud.category}</h3>
            <a className="certInfo" href={cloud.link1}>{cloud.certification1} {cloud.description1}<span>&bull;</span> <em className="certDate">{cloud.years1}</em></a>
            <p></p>
        </div>
      })

      var dataScience = this.props.data.dataScience.map(function(dataScience){
        return <div key={dataScience.category}><h3>{dataScience.category}</h3>
            <a className="certInfo" href={dataScience.link1}>{dataScience.certification1} {dataScience.description1}<span>&bull;</span> <em className="certDate">{dataScience.years1}</em></a>
            <br /><a className="certInfo" href={dataScience.link2}>{dataScience.certification2} {dataScience.description2}<span>&bull;</span> <em className="certDate">{dataScience.years2}</em></a>
            <p></p>
        </div>
      })

      var C = this.props.data.C.map(function(C){
        return <div key={C.category}><h3>{C.category}</h3>
            <a className="certInfo" href={C.link1}>{C.certification1} {C.description1}<span>&bull;</span> <em className="certDate">{C.years1}</em></a>
            <p></p>
        </div>
      })

      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>


    <div className="row work">

         <div className="three columns header-col">
            <h1><span>Online Courses</span></h1>
         </div>

         <div className="nine columns main-col">
          {cloud}<br />
          {dataScience}<br />
          {pythonCert}<br />
          {C}
        </div>
    </div>


      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
