import React from 'react';
import { useState } from 'react';
import './styles.scss';

const Results = (props) => {

  const [results, setName] = useState('Results');
  return(
    <>
    {/* <section>
      <input data-testid='results-input' onChange={(e)=>{setName(e.target.value)}}></input>
    </section> */}
    <section>
    <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
  </section>
  </>
  )
}

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

export default Results;
