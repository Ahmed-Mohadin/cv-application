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
                        companyName: 'c 1',
                        role: 'r 1',
                        city: 'c 1',
                        fromDate: 'f 1',
                        toDate: 't 1',
                        workDesc: 'w 1',                                
                    },
                    {
                        companyName: 'c 2',
                        role: 'r 2',
                        city: 'c 2',
                        fromDate: 'f 2',
                        toDate: 't 2',
                        workDesc: 'w 2',                                
                    },

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
        if(!e.target.classList.contains('active') && !e.target.classList.contains('example')){
            this.setState({
                isModeCreate: !this.state.isModeCreate,
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
        }, () => console.log(this.state.cvInfo));
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
                <button className="btn mode active" onClick={this.onChangeMode}>Create mode</button>
                <span>/</span>
                <button className='btn example' onClick={this.exampleForm}>Example Form</button>               
                <span>/</span>
                <button className="btn mode" onClick={this.onChangeMode}>Preview mode</button> 
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