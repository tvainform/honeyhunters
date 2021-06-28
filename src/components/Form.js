import React from 'react';

const Form = () => {
    return (
        <div className="row content-form py-3">
            <div className="col-6">
        <div className="w-75 mb-3">
            <label className="form-label">Имя <span className="text-danger">*</span></label>
            <input type="text" className="form-control form-control-lg border-dark" id="name" autoComplete="off"/>
        </div>
                <div className="w-75">
                    <label className="form-label">E-mail <span className="text-danger">*</span></label>
                    <input type="email" className="form-control form-control-lg border-dark" id="email" autoComplete="off"/>
                </div>
            </div>
            <div className="col-6">
    <div className="">
        <label className="form-label">Комментарий <span className="text-danger">*</span></label>
        <textarea className="form-control border-dark" id="message" rows="3"></textarea>
    </div>
            </div>
        </div>
    );
};

export default Form;