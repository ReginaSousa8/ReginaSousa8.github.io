import GenericBackgroundItem from '../Components/GenericBackgroundItem'
import { education, work } from '../Content/Background';

function Background() {
  
    return (
      <div>
        <br/>
      <h1 style={{fontFamily:'Lato', fontSize:'5vh'}}>Work Experience</h1>
      <div style={{width:'80%', marginLeft:'10%'}}>
        {work.map((experience) =>{return(<GenericBackgroundItem date={experience.date} place={experience.place} position={experience.position} description={experience.description}/>)}
        )}
      </div>
      <h1 style={{fontFamily:'Lato', fontSize:'5vh'}}>Education</h1>
      <div style={{width:'80%', marginLeft:'10%'}}>
      {education.map((experience) =>{return(<GenericBackgroundItem date={experience.date} place={experience.place} position={experience.position} description={experience.description}/>)}
        )}
        
      </div>
      </div>

      );
  }
  
  export default Background;