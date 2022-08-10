import React, { Component } from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

class CVApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cvForm: {
                generalInfo: {
                    photo: '',
                    fullName: '',
                    currentRole: '',
                    email: '',
                    phone: '',
                    address: '',
                },
                // educationalExp: {
    
                // },
                // practicalExp: {
                    
                // },
                cvInfo: [],
            },
            mode: 'create',
        }

    }

    onChangeMode = (e) => {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active')
        if(!e.target.classList.contains('create-mode')) {
            this.setState({
                mode: 'preview'
            })
        } else {
            this.setState({
                mode: 'create'
            })
        }        
    }

    handleChange = (e) => {

    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log('Saved');
    }

    render() {
        return (
        <main>
            <div className="choose-mode">
                <button className="btn mode create-mode active" onClick={this.onChangeMode}>Create mode</button>
                <span>/</span>
                <button className="btn mode preview-mode" onClick={this.onChangeMode}>Preview mode</button>                
            </div>
            {
                this.state.mode === 'create' 
                ? <CVForm onSubmit={this.onSubmitForm} /> 
                : <CVPreview /> 
            }
        </main>
        )
    }
}

export default CVApp;