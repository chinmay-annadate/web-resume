import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;

      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <a className="certInfo" target="_blank" href={education.link}>{education.degree}</a><span className="certInfo"> &bull; </span><em className="certDate">{education.graduated}</em>
        <p>{education.description}</p></div>
      })

      // var work = this.props.data.work.map(function(work){
      //   return <div key={work.company}><h3>{work.company}</h3>
      //       <p className="info">{work.title}<span>&bull;</span><em className="date">{work.years}</em></p>
      //       <p>{work.description}</p>
      //   </div>
      // })

      var competitions = this.props.data.competitions.map(function(competitions){
        return <div key={competitions.event}><h3>{competitions.event}</h3>
            <a className="certInfo" target="_blank" href={competitions.link}>{competitions.title}</a>
            <span className='certInfo'> &bull; </span><em className="certDate">{competitions.date}</em>
            <p>{competitions.description}</p>
        </div>
      })

      var pythonCert = this.props.data.pythonCert.map(function(pythonCert){
        return <div key={pythonCert.category}><h3>{pythonCert.category}</h3>
            {/* wingspan */}
            <a className="certInfo" target="_blank" href={pythonCert.link5}>{pythonCert.certification5} {pythonCert.description5}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{pythonCert.years5}</em>
            <br /><a className="certInfo" target="_blank" href={pythonCert.link3}>{pythonCert.certification3} {pythonCert.description3}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{pythonCert.years3}</em>
            <br /><a className="certInfo" target="_blank" href={pythonCert.link2}>{pythonCert.certification2} {pythonCert.description2}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{pythonCert.years2}</em>
            <br /><a className="certInfo" target="_blank" href={pythonCert.link1}>{pythonCert.certification1} {pythonCert.description1}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{pythonCert.years1}</em>
            
            <br />
            {/* hackerrank */}
            <br /><a className="certInfo" target="_blank" href={pythonCert.link4}>{pythonCert.certification4} {pythonCert.description4}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{pythonCert.years4}</em>
            <p></p>
        </div>
      })

      var aiCert = this.props.data.aiCert.map(function(aiCert){
        return <div key={aiCert.category}><h3>{aiCert.category}</h3>
            <a className="certInfo" target="_blank" href={aiCert.link4}>{aiCert.certification4} {aiCert.description4}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{aiCert.years4}</em>
            <br /><a className="certInfo" target="_blank" href={aiCert.link5}>{aiCert.certification5} {aiCert.description5}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{aiCert.years5}</em>
            <br /><a className="certInfo" target="_blank" href={aiCert.link3}>{aiCert.certification3} {aiCert.description3}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{aiCert.years3}</em>
            <br /><a className="certInfo" target="_blank" href={aiCert.link2}>{aiCert.certification2} {aiCert.description2}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{aiCert.years2}</em>
            <br /><a className="certInfo" target="_blank" href={aiCert.link1}>{aiCert.certification1} {aiCert.description1}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{aiCert.years1}</em>
            <br /><a className="certInfo" target="_blank" href={aiCert.link6}>{aiCert.certification6} {aiCert.description6}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{aiCert.years6}</em>
            <p></p>
        </div>
      })

      var projMan = this.props.data.projMan.map(function(projMan){
        return <div key={projMan.category}><h3>{projMan.category}</h3>
            <a className="certInfo" target="_blank" href={projMan.link6}>{projMan.certification6} {projMan.description6}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{projMan.years6}</em>
            <br /><a className="certInfo" target="_blank" href={projMan.link5}>{projMan.certification5} {projMan.description5}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{projMan.years5}</em>
            <br /><a className="certInfo" target="_blank" href={projMan.link4}>{projMan.certification4} {projMan.description4}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{projMan.years4}</em>
            <br /><a className="certInfo" target="_blank" href={projMan.link3}>{projMan.certification3} {projMan.description3}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{projMan.years3}</em>
            <br /><a className="certInfo" target="_blank" href={projMan.link2}>{projMan.certification2} {projMan.description2}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{projMan.years2}</em>
            <br /> <a className="certInfo" target="_blank" href={projMan.link1}>{projMan.certification1} {projMan.description1}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{projMan.years1}</em>
            <p></p>
        </div>
      })

      var cloud = this.props.data.cloud.map(function(cloud){
        return <div key={cloud.category}><h3>{cloud.category}</h3>
            <a className="certInfo" target="_blank" href={cloud.link2}>{cloud.certification2} {cloud.description2}</a><span className='certInfo'> &bull; </span> <em className="certDate">{cloud.years2}</em>
            <br /><a className="certInfo" target="_blank" href={cloud.link1}>{cloud.certification1} {cloud.description1}</a><span className='certInfo'> &bull; </span> <em className="certDate">{cloud.years1}</em>
            <p></p>
        </div>
      })

      var java = this.props.data.java.map(function(java){
        return <div key={java.category}><h3>{java.category}</h3>
            <a className="certInfo" target="_blank" href={java.link1}>{java.certification1} {java.description1}</a><span className='certInfo'> &bull; </span> <em className="certDate">{java.years1}</em>
            <p></p>
        </div>
      })

      var _4g5g = this.props.data._4g5g.map(function(_4g5g){
        return <div key={_4g5g.category}><h3>{_4g5g.category}</h3>
            <a className="certInfo" target="_blank" href={_4g5g.link1}>{_4g5g.certification1} {_4g5g.description1}</a><span className='certInfo'> &bull; </span> <em className="certDate">{_4g5g.years1}</em>
            <p></p>
        </div>
      })

      var ml = this.props.data.ml.map(function(ml){
        return <div key={ml.category}><h3>{ml.category}</h3>
            <a className="certInfo" target="_blank" href={ml.link1}>{ml.certification1} {ml.description1}</a><span className='certInfo'> &bull; </span> <em className="certDate">{ml.years1}</em>
            <p></p>
        </div>
      })

      var quantum = this.props.data.quantum.map(function(quantum){
        return <div key={quantum.category}><h3>{quantum.category}</h3>
            <a className="certInfo" target="_blank" href={quantum.link1}>{quantum.certification1} {quantum.description1}</a><span className='certInfo'> &bull; </span> <em className="certDate">{quantum.years1}</em>
            <p></p>
        </div>
      })

      var blockchain = this.props.data.blockchain.map(function(blockchain){
        return <div key={blockchain.category}><h3>{blockchain.category}</h3>
            <a className="certInfo" target="_blank" href={blockchain.link1}>{blockchain.certification1} {blockchain.description1}</a><span className='certInfo'> &bull; </span> <em className="certDate">{blockchain.years1}</em>
            <p></p>
        </div>
      })

      var dataScience = this.props.data.dataScience.map(function(dataScience){
        return <div key={dataScience.category}><h3>{dataScience.category}</h3>
            <a className="certInfo" target="_blank" href={dataScience.link3}>{dataScience.certification3} {dataScience.description3}</a> <span className='certInfo'> &bull; </span> <em className="certDate">{dataScience.years3  }</em>
            <br /><a className="certInfo" target="_blank" href={dataScience.link2}>{dataScience.certification2} {dataScience.description2}</a><span className='certInfo'> &bull; </span> <em className="certDate">{dataScience.years2}</em>
            <br /><a className="certInfo" target="_blank" href={dataScience.link1}>{dataScience.certification1} {dataScience.description1}</a><span className='certInfo'> &bull; </span> <em className="certDate">{dataScience.years1}</em>
            <p></p>
        </div>
      })

      var C = this.props.data.C.map(function(C){
        return <div key={C.category}><h3>{C.category}</h3>
            <a className="certInfo" target="_blank" href={C.link1}>{C.certification1} {C.description1}</a><span className='certInfo'> &bull; </span> <em className="certDate">{C.years1}</em>
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


      {/* <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div> */}

    
    <div className="row education">
         <div className="three columns header-col">
            <h1><span>Competitions</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {competitions}
               </div>
            </div>
         </div>
      </div>


    <div className="row education">

         <div className="three columns header-col">
            <h1><span>Online Courses</span></h1>
         </div>

         <div className="nine columns main-col">
          {/* {blockchain}<br />
          {_4g5g}<br /> */}
          {projMan}<br />
          {aiCert}<br />
          {java}<br />
          {quantum}<br />
          {ml}<br />
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

            {/* <p>{skillmessage}
            </p> */}

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
