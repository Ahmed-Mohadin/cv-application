import React, { Component } from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import cvInfoExample from './utils/ExampleCV';

class CVApp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cvInfo: [
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
            ],
            isModeCreate: true,
            showExampleForm: false,
        }        
    }

    onChangeMode = (e) => {
        if(!e.target.classList.contains('active') && e.target.classList.contains('create')){
            this.setState({
                isModeCreate: true,
            })    
        } else if(!e.target.classList.contains('active') && e.target.classList.contains('preview')){
            this.setState({
                isModeCreate: false,
            })                
        }
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        this.setState({
            showExampleForm: false
        })
    }

    addCV = (generalInfo, practicalExp, educationalExp) => {
        this.setState({
            cvInfo: [...this.state.cvInfo, generalInfo, practicalExp, educationalExp]
        });
    }

    resetCV = () => {
        this.setState({
            cvInfo: this.state.cvInfo.splice(0, this.state.cvInfo.length)
        })
    }

    exampleForm = (e) => {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        this.setState({
            showExampleForm: true
        })
    }

    setInfo = (infoIndex) => {
        const list = this.state.cvInfo;
        if(infoIndex === 0) return list[infoIndex];
        if(infoIndex === 1 || infoIndex === 2){
            return list[infoIndex].map((info) => info);
        }
        return 
    }

    render() {
        return (
        <main>
            <div className="choose-mode">
                <button className="btn mode create active" onClick={this.onChangeMode}>Create mode</button>
                <span>/</span>
                <button className='btn example' onClick={this.exampleForm}>Example Form</button>               
                <span>/</span>
                <button className="btn mode preview" onClick={this.onChangeMode}>Preview mode</button> 
            </div>
            {
                this.state.showExampleForm 
                ? <CVPreview cvInfo={cvInfoExample} />
                : this.state.isModeCreate  
                ? <CVForm setInfo={this.setInfo} cvInfo={this.state.cvInfo} addCV={this.addCV} resetCV={this.resetCV} />  
                : <CVPreview cvInfo={this.state.cvInfo} /> 
            }
        </main>
        )
    }
}

export default CVApp;