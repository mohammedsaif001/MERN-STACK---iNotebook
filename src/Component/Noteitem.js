import React from 'react';

export default function Noteitem(props) {
    let { notes } = props
    return <>
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">

                    <h5 className="card-title">{notes.title}</h5>
                    <i className="fas fa-trash mx-2"></i>
                    <i className="fas fa-edit mx-2"></i>
                    </div>
                    <p className="card-text">{notes.description}</p>
                </div>
            </div>
        </div>
    </>
}
