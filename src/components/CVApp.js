import React, { Component } from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

class CVApp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cvInfo: [],
            isModeCreate: true,
        }        
    }

    onChangeMode = (e) => {
        if(!e.target.classList.contains('active')){
            this.setState({
                isModeCreate: !this.state.isModeCreate,
            })    
        }
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
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

    render() {
        return (
        <main>
            <div className="choose-mode">
                <button className="btn mode active" onClick={this.onChangeMode}>Create mode</button>
                <span>/</span>
                <button className="btn mode" onClick={this.onChangeMode}>Preview mode</button>                
            </div>
            {
                this.state.isModeCreate  
                ? <CVForm cvInfo={this.state.cvInfo} addCV={this.addCV} resetCV={this.resetCV} /> 
                : <CVPreview cvInfo={this.state.cvInfo} /> 
            }
        </main>
        )
    }
}

export default CVApp;