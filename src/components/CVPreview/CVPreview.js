import React from 'react';
import GeneralInfoItem from './GeneralInfoItem';
import PracticalExpItem from './PracticalExpItem';
import EducationalExpItem from './EducationalExpItem';

function CVPreview({ cvInfo }) {
  return (
    <div className="preview-container">

        {
          cvInfo.map((info, index) => {
            if(index === 0){
              return (
                <div key={index} className="general-info">
                  <GeneralInfoItem
                    firstName={info.firstName}
                    lastName={info.lastName}
                    role={info.role}
                    address={info.address}
                    phone={info.phone}
                    email={info.email}
                  />
              </div>   
              )        
            }
            return null
          })
        }
            
        {
          cvInfo[1].length > 0 ?
          <div className="practical-exp">
            <h2>Experience <div className='underline'></div></h2>
            {
              cvInfo.map((info, index) => {
                if(index === 1){
                  return info.map((newI, newInd) => {
                    return (
                      <PracticalExpItem 
                      key={newInd}
                      companyName={newI.companyName}
                      city={newI.city}
                      year={`${newI.fromDate} - ${newI.toDate}`}
                      role={newI.role}
                      workDesc={newI.workDesc} 
                      />      
                    )  
                  })
                }
                return null
              })
            }
          </div> : null
        }

        {
          cvInfo[2].length > 0 ?
          <div className="educational-exp">
            <h2>Education <div className='underline'></div></h2>
            {
              cvInfo.map((info, index) => {
                if(index === 2){
                  return info.map((newI, newInd) => {
                    return (
                      <EducationalExpItem 
                      key={newInd}
                      schoolName={newI.schoolName}
                      city={newI.city}
                      year={`${newI.fromDate} - ${newI.toDate}`}
                      degree={newI.degree}
                      eduDesc={newI.eduDesc} 
                      />        
                    )  
                  })
                }
                return null
              })
            }            
          </div> : null
        }
    </div>
  )
}

export default CVPreview;