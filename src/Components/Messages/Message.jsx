import React from 'react';

const Message = (props) => {
    return (
        <div className="col-4">
        <div className="card text-white bg-success mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header">{props.name}</div>
            <div className="card-body">
                <h5 className="card-title">{props.email}</h5>
                <p className="card-text">{props.message}</p>
            </div>
        </div>
        </div>
    )
}
export default Message;
