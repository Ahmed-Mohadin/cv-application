import React, { Component } from 'react';
import CVForm from './CVForm/CVForm';

class CVApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generalInfo: {
                photo: '',
                fullName: '',
                jobTitle: '',
                email: '',
                phone: '',
                address: '',
            },
            // educationalExp: {

            // },
            // practicalExp: {
                
            // },
            cvInfo: [],
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
            <CVForm onSubmit={this.onSubmitForm} />
            <div className="preview-container">
                <h2>Preview CV</h2>
                {/* <div className="preview">
                    <p>Paper</p>
                </div> */}
            </div>
        </main>
        )
    }
}

export default CVApp;