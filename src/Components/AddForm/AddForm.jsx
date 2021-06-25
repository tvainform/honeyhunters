import React from 'react';


const AddForm = (props) => {

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form className="needs-validation" noValidate>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom01">Имя</label>
                                    <input onChange={onMessageChange} value={props.newNameText} type="text" className="form-control" id="validationCustom01" required/>
                                        <div className="valid-feedback">
                                            Выглядит хорошо!
                                        </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom02">E-Mail</label>
                                    <input onChange={onMessageChange} value={props.newEmailText} type="email" className="form-control" id="validationCustom02" required/>
                                        <div className="valid-feedback">
                                            Выглядит хорошо!
                                        </div>
                                </div>
                            </div>
                            <div className="btn btn-primary" onClick={onAddMessage}>Записать</div>
                        </form>


                    </div>
                </div>
            </div>
        </section>


    );
}
export default AddForm;
