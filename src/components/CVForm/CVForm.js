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
            inputListEducation: [],
            needToSave: false
        }
    }

    onChangeGeneral = (e, fieldName) => {
        fieldName[e.target.name] = e.target.value
        this.setState({ fieldName, needToSave: true, });
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
            needToSave: false,
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
            needToSave: false,
        })
    }

    onDeleteExperience = (index) => {
        const list = [...this.state.inputListExperience];
        list.splice(index, 1);
        this.setState({
            inputListExperience: list,
            needToSave: false,
        })
    }

    onDeleteEducation = (index) => {
        const list = [...this.state.inputListEducation];
        list.splice(index, 1);
        this.setState({
            inputListEducation: list,
            needToSave: false,
        })
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
            needToSave: false,
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
        return (
            <form className='form-container' onSubmit={this.onSubmit}>
                <div className="buttons">
                    <button type='button' className='btn reset' onClick={() => this.resetForm()} >
                            <i className="fa-solid fa-eraser"></i> 
                            Reset Form
                    </button>
                    <button type='submit' className={`btn ${this.state.needToSave ? null : 'active'}`}>
                            <i className="fa-solid fa-user-pen"></i> 
                            {this.state.needToSave ? 'Save Form' : 'Form Saved'}
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