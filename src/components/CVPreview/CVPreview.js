import React, { Component } from 'react';
import GeneralInfoItem from './GeneralInfoItem';
import PracticalExpItem from './PracticalExpItem';
import EducationalExpItem from './EducationalExpItem';


class CVPreview extends Component {

  constructor(props){
    super(props);
    this.text = `
    Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Ea beatae obcaecati totam in quis accusamus 
    cupiditate modi consequatur molestiae harum ipsam quo, 
    sint officia esse perspiciatis alias incidunt aut accusantium.
    `;
  }


  render() {
    return (
      <div className="preview-container">

        <div className="general-info">

          <GeneralInfoItem 
            firstName={'John'}
            lastName={'Doe'}
            role={'Front End Developer'}
            address={'Street 123, NY'}
            phone={'123 45 67 890'}
            email={'john.doe@example.com'}
            />
            
        </div>

        <div className="practical-exp">
          <h2>Experience <div className='underline'></div></h2>
          
          <PracticalExpItem
            companyName={'Company Name'}
            city={'City Name'}
            year={'YYYY-MM - YYYY-MM'}
            role={'Company Role'}
            desc={this.text} />

          <PracticalExpItem
            companyName={'Company Name'}
            city={'City Name'}
            year={'YYYY-MM - YYYY-MM'}
            role={'Company Role'}
            desc={this.text} />

          <PracticalExpItem
            companyName={'Company Name'}
            city={'City Name'}
            year={'YYYY-MM - YYYY-MM'}
            role={'Company Role'}
            desc={this.text} />

        </div>
        
        <div className="educational-exp">
          <h2>Education <div className='underline'></div></h2>

          <EducationalExpItem 
            schoolName={'School Name'}
            city={'City Name'}
            year={'YYYY-MM - YYYY-MM'}
            degree={'School Degree'}
            desc={this.text} />

          <EducationalExpItem 
            schoolName={'School Name'}
            city={'City Name'}
            year={'YYYY-MM - YYYY-MM'}
            degree={'School Degree'}
            desc={this.text} />
            
        </div>
      </div>
    )
  }
}

export default CVPreview;