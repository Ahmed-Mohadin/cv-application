import React, { useEffect, useState } from 'react';
import GeneralInfoItem from './GeneralInfoItem';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';

function CVForm({ addCV, setInfo }) {

    const [generalInfo, setGeneralInfo] = useState({
        firstName: '',
        lastName: '',
        role: '',
        address: '',
        phone: '',
        email: '',
    });
    const [inputListExperience, setInputListExperience] = useState([]);
    const [inputListEducation, setInputListEducation] = useState([]);
    const [needToSave, setNeedToSave] = useState(false);

    const onChangeGeneral = (e) => {
        generalInfo[e.target.name] = e.target.value;
        setGeneralInfo({...generalInfo});
        setNeedToSave(true);
    }

    const onChangeExperience = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputListExperience];
        list[index][name] = value;
        setInputListExperience(list);
        setNeedToSave(true);        
    }

    const onChangeEducation = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputListEducation];
        list[index][name] = value;
        setInputListEducation(list);
        setNeedToSave(true);        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addCV(generalInfo, inputListExperience, inputListEducation);
        setNeedToSave(false);        
    }

    const addExperience = () => {
        const newExperience = {
            companyName: '',
            role: '',
            city: '',
            fromDate: '',
            toDate: '',
            workDesc: '',                    
        };
        setInputListExperience([...inputListExperience, newExperience]);
        setNeedToSave(true);
    }

    const addEducation = () => {
        const newEducation = {
            schoolName: '',
            city: '',
            fromDate: '',
            toDate: '',
            degree: '',
            eduDesc: '',
        }
        setInputListEducation([...inputListEducation, newEducation]);
        setNeedToSave(true);
    }

    const onDeleteExperience = (index) => {
        const list = [...inputListExperience];
        list.splice(index, 1);
        setInputListExperience(list);
        setNeedToSave(true);
    }

    const onDeleteEducation = (index) => {
        const list = [...inputListEducation];
        list.splice(index, 1);
        setInputListEducation(list);
        setNeedToSave(true);
    }

    const resetForm = () => {
        const genList = generalInfo;
        const praList = inputListExperience;
        const eduList = inputListEducation;

        genList.firstName = "";
        genList.lastName = "";
        genList.role = "";
        genList.address = "";
        genList.phone = "";
        genList.email = "";

        praList.forEach((exp) => {
            exp.companyName = "";
            exp.role = "";
            exp.city = "";
            exp.fromDate = "";
            exp.toDate = "";
            exp.workDesc = "";                    
        });

        eduList.forEach((edu) => {
            edu.schoolName = "";
            edu.city = "";
            edu.fromDate = "";
            edu.toDate = "";
            edu.degree = "";
            edu.eduDesc = "";                    
        });
        
        setGeneralInfo({...genList});
        setInputListExperience([...praList]);
        setInputListEducation([...eduList]);
        setNeedToSave(true);
    }

    useEffect(() => {
        setGeneralInfo({...setInfo(0)});
        setInputListExperience([...setInfo(1)]);
        setInputListEducation([...setInfo(2)]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className="buttons">
                <button type='button' className='btn reset' onClick={() => resetForm()} >
                        <i className="fa-solid fa-eraser"></i> 
                        Reset Form
                </button>
                <button type='submit' className={`btn ${needToSave ? null : 'active'}`}>
                        <i className="fa-solid fa-user-pen"></i> 
                        {needToSave ? 'Save Form' : 'Form Saved'}
                </button>
            </div>
            <div className="general-info">
                <h2>Profile <div className='underline'></div></h2>
                <GeneralInfoItem onChange={(e) => onChangeGeneral(e)} 
                                 value={generalInfo}
                                 />
            </div>
            <div className="practical-exp">
                <h2>Experience <div className='underline'></div></h2>
                {
                    inputListExperience.map((inputList, index) => {
                        return <div key={index}>
                                <PracticalExp key={index.toString()} onChange={(e) => onChangeExperience(e, index)} 
                                value={inputList}
                                />
                                <button type='button' className='btn delete' 
                                        onClick={() => onDeleteExperience(index)}>
                                        Delete Experience
                                </button>
                            </div>

                    })
                }
                <button type='button' className='btn add' onClick={() => addExperience()}>
                        Add Experience
                </button>
            </div>
            <div className="educational-exp">
                <h2>Education <div className='underline'></div></h2>
                {
                    inputListEducation.map((inputList, index) => {
                        return <div key={index}>
                                <EducationalExp key={index.toString()} onChange={(e) => onChangeEducation(e, index)} 
                                value={inputList}
                                />
                                <button type='button' className='btn delete' 
                                        onClick={() => onDeleteEducation(index)}>
                                        Delete Education
                                </button>
                            </div>

                    })
                }
                <button type='button' className='btn add' onClick={() => addEducation()}>
                        Add Education
                </button>
            </div>
        </form>
    )
}
export default CVForm;