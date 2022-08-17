import React, { Component } from 'react';
import GeneralInfoItem from './GeneralInfoItem';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';

class CVForm extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            generalInfo: {
                firstName: '',
                lastName: '',
                role: '',
                address: '',
                phone: '',
                email: '',
            },
            // companyName: '',
            // role: '',
            // city: '',
            // fromDate: '',
            // toDate: '',
            // workDesc: '',                    
            inputListExperience: [],
            // schoolName: '',
            // city: '',
            // fromDate: '',
            // toDate: '',
            // degree: '',
            // eduDesc: '',
            inputListEducation: []
        }
    }

    onChangeGeneral = (e, fieldName) => {
        fieldName[e.target.name] = e.target.value
        this.setState({ fieldName });
    };

    onChangeExperience = (e, index) => {
        const {name, value} = e.target;
        const list = [...this.state.inputListExperience];
        list[index][name] = value;
        this.setState({
            inputListExperience: list
        })
    }

    onChangeEducation = (e, index) => {
        const {name, value} = e.target;
        const list = [...this.state.inputListEducation];
        list[index][name] = value;
        this.setState({
            inputListEducation: list
        })        
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.resetCV();
        this.props.addCV(
            this.state.generalInfo, 
            this.state.inputListExperience,
            this.state.inputListEducation
        );
        console.log('Saved form');
    }

    addExperience = () => {
        const newExperience = {
            companyName: '',
            role: '',
            city: '',
            fromDate: '',
            toDate: '',
            workDesc: '',                    
        };
        this.setState({
            inputListExperience: [...this.state.inputListExperience, newExperience]
        })
        console.log('Added experience')
    }

    addEducation = () => {
        const newEducation = {
            schoolName: '',
            city: '',
            fromDate: '',
            toDate: '',
            degree: '',
            eduDesc: '',
        }
        this.setState({
            inputListEducation: [...this.state.inputListEducation, newEducation]
        })
        console.log('Added education')        
    }

    onDeleteExperience = (index) => {
        const list = [...this.state.inputListExperience];
        list.splice(index, 1);
        this.setState({
            inputListExperience: list
        })
        console.log('Deleted experience');
    }

    onDeleteEducation = (index) => {
        const list = [...this.state.inputListEducation];
        list.splice(index, 1);
        this.setState({
            inputListEducation: list
        })
        console.log('Deleted education');
    }

    resetForm = () => {
        this.props.resetCV();
        const gList = this.state.generalInfo;
        const pList = this.state.inputListExperience;
        const eList = this.state.inputListEducation;

        gList.firstName = "";
        gList.lastName = "";
        gList.role = "";
        gList.address = "";
        gList.phone = "";
        gList.email = "";

        pList.forEach((p) => {
            p.companyName = "";
            p.role = "";
            p.city = "";
            p.fromDate = "";
            p.toDate = "";
            p.workDesc = "";                    
        })

        eList.forEach((e) => {
            e.schoolName = "";
            e.city = "";
            e.fromDate = "";
            e.toDate = "";
            e.degree = "";
            e.eduDesc = "";                    
        })

        this.setState({
            generalInfo: gList,
            inputListExperience: pList,
            inputListEducation: eList,
        }, () => console.log(this.props.cvInfo))

        console.log('Reseted form')
    }

    render() {

        return (
            <form className='form-container' onSubmit={this.onSubmit}>
                <div className="buttons">
                    <button type='button' className='btn save' onClick={() => this.resetForm()} >
                            <i className="fa-solid fa-eraser"></i> 
                            Reset Form
                    </button>
                    <button type='submit' className='btn save'>
                            <i className="fa-solid fa-user-pen"></i> 
                            Save Form
                    </button>
                </div>

                <div className="general-info">
                    <h2>Profile <div className='underline'></div></h2>
                    <GeneralInfoItem onChange={(e) => this.onChangeGeneral(e, this.state.generalInfo)} 
                                     value={this.state.generalInfo}
                                     />
                </div>
                <div className="practical-exp">
                    <h2>Experience <div className='underline'></div></h2>
                    {
                        this.state.inputListExperience.map((inputList, index) => {
                            return <div key={index}>
                                    <PracticalExp key={index.toString()} onChange={(e) => this.onChangeExperience(e, index)} 
                                    value={inputList}
                                    />
                                    <button type='button' className='btn delete' 
                                            onClick={() => this.onDeleteExperience(index)}>
                                            Delete Experience
                                    </button>
                                </div>

                        })
                    }
                    <button type='button' className='btn add' onClick={() => this.addExperience()}>
                            Add Experience
                    </button>
                </div>
                <div className="educational-exp">
                    <h2>Education <div className='underline'></div></h2>
                    {
                        this.state.inputListEducation.map((inputList, index) => {
                            return <div key={index}>
                                    <EducationalExp key={index.toString()} onChange={(e) => this.onChangeEducation(e, index)} 
                                    value={inputList}
                                    />
                                    <button type='button' className='btn delete' 
                                            onClick={() => this.onDeleteEducation(index)}>
                                            Delete Education
                                    </button>
                                </div>

                        })
                    }
                    <button type='button' className='btn add' onClick={() => this.addEducation()}>
                            Add Education
                    </button>
                </div>
            </form>
        )
    }
}

export default CVForm;