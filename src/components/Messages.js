import React, {useContext} from 'react';
import {Context} from "../index";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";



const Messages = () => {
    const {firestore} = useContext(Context)

    const [message, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt'))

    if (loading){
        return <Loader/>
    }
    return (
        <div className={"row px-5"}>
        {message.map(mess =>
            <div className={"col-4 px-4 message-item"}>
                <div className="card text-white bg-primary mb-4 rounded-0">
                    <div className="card-header text-center">{mess.name}</div>
                    <div className="card-body text-center">
                        <h5 className="card-title">{mess.email}</h5>
                        <p className="card-text">{mess.message}</p>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default Messages;
