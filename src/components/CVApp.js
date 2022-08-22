import React, { useState } from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import cvInfoExample from './utils/cvInfoExample';

function CVApp() {
    const [cvInfo, setCVInfo] = useState([
        {
            firstName: '',
            lastName: '',
            role: '',
            address: '',
            phone: '',
            email: '',    
        },
        [
            {
                companyName: '',
                role: '',
                city: '',
                fromDate: '',
                toDate: '',
                workDesc: '',                                
            }
        ],
        [
            {
                schoolName: '',
                city: '',
                fromDate: '',
                toDate: '',
                degree: '',
                eduDesc: '',            
            }
        ]
    ]);
    const [isModeCreate, setIsModeCreate] = useState(true);
    const [showExampleForm, setShowExampleForm] = useState(false);

    const onChangeMode = (e) => {
        if(!e.target.classList.contains('active') && e.target.classList.contains('create')){
            setIsModeCreate(true)
        } else if(!e.target.classList.contains('active') && e.target.classList.contains('preview')){
            setIsModeCreate(false);
        }
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        setShowExampleForm(false);
    }

    const addCV = (generalInfo, practicalExp, educationalExp) => {
        setCVInfo([generalInfo, practicalExp, educationalExp]);
    }

    const exampleForm = (e) => {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        setShowExampleForm(true);
    }

    const setInfo = (infoIndex) => {
        if(infoIndex === 0) return cvInfo[infoIndex];
        if(infoIndex === 1 || infoIndex === 2){
            return cvInfo[infoIndex].map((info) => info);
        } return       
    }

    return (
        <main>
            <div className="choose-mode">
                <button className="btn mode create active" onClick={onChangeMode}>Create mode</button>
                <span>/</span>
                <button className='btn example' onClick={exampleForm}>Example Form</button>               
                <span>/</span>
                <button className="btn mode preview" onClick={onChangeMode}>Preview mode</button> 
            </div>
            {
                showExampleForm 
                ? <CVPreview cvInfo={cvInfoExample} />
                : isModeCreate  
                ? <CVForm setInfo={setInfo} addCV={addCV} />  
                : <CVPreview cvInfo={cvInfo} /> 
            }
        </main>
    )

}

export default CVApp;