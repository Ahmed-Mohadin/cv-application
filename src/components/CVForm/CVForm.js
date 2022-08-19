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
            inputListExperience: [],
            inputListEducation: [],
            needToSave: false
        }
    }

    onChangeGeneral = (e, fieldName) => {
        fieldName[e.target.name] = e.target.value
        this.setState({ fieldName, needToSave: true });
    };

    onChangeExperience = (e, index) => {
        const {name, value} = e.target;
        const list = [...this.state.inputListExperience];
        list[index][name] = value;
        this.setState({
            inputListExperience: list,
            needToSave: true,
        })
    }

    onChangeEducation = (e, index) => {
        const {name, value} = e.target;
        const list = [...this.state.inputListEducation];
        list[index][name] = value;
        this.setState({
            inputListEducation: list,
            needToSave: true,
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
        this.setState({
            needToSave: false
        })
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
            inputListExperience: [...this.state.inputListExperience, newExperience],
            needToSave: true,
        })        
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
            inputListEducation: [...this.state.inputListEducation, newEducation],
            needToSave: true,
        })
    }

    onDeleteExperience = (index) => {
        const list = [...this.state.inputListExperience];
        list.splice(index, 1);
        this.setState({
            inputListExperience: list,
            needToSave: true,
        })
    }

    onDeleteEducation = (index) => {
        const list = [...this.state.inputListEducation];
        list.splice(index, 1);
        this.setState({
            inputListEducation: list,
            needToSave: true,
        })
    }

    resetForm = () => {
        const genList = this.state.generalInfo;
        const praList = this.state.inputListExperience;
        const eduList = this.state.inputListEducation;

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
        })

        eduList.forEach((edu) => {
            edu.schoolName = "";
            edu.city = "";
            edu.fromDate = "";
            edu.toDate = "";
            edu.degree = "";
            edu.eduDesc = "";                    
        })

        this.setState({
            generalInfo: genList,
            inputListExperience: praList,
            inputListEducation: eduList,
            needToSave: true,
        })
    }

    componentDidMount(){
        this.setState({
            generalInfo: {...this.props.setInfo(0)},
            inputListExperience: [...this.props.setInfo(1)],
            inputListEducation: [...this.props.setInfo(2)]
        })
    }

    render() {

        const { generalInfo, needToSave,
            inputListExperience, inputListEducation,
        } = this.state;

        return (
            <form className='form-container' onSubmit={this.onSubmit}>
                <div className="buttons">
                    <button type='button' className='btn reset' onClick={() => this.resetForm()} >
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
                    <GeneralInfoItem onChange={(e) => this.onChangeGeneral(e, generalInfo)} 
                                     value={generalInfo}
                                     />
                </div>
                <div className="practical-exp">
                    <h2>Experience <div className='underline'></div></h2>
                    {
                        inputListExperience.map((inputList, index) => {
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
                        inputListEducation.map((inputList, index) => {
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