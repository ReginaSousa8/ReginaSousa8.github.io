import Activities from '../Components/Activities';
import Publications from '../Components/Publications';
import Projects from '../Components/Projects';
import { Divider } from 'antd';

function Research() {
  return (
    <div>
      <Publications/>
      <Divider/>
      <Projects/>
      <Divider/>
      <Activities/>
    </div>
  );
}

export default Research;

