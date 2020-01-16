import React, { Component } from 'react';
import './AddNewClient.css';
import './AddNewNote.css';

class AddNewNote extends Component {
    state = {
        note: ''
    }

    render() {
        return (
            <form action="" className="NewNoteForm">
                <input className="NewNoteInput" type="text" placeholder="פתק חדש " />
                <button className="SaveNewNote">שמור</button>
                <button className="SaveNewClient">חזור לטפריט הראשי</button>
            </form>
        )
    }
}


export default AddNewNote;