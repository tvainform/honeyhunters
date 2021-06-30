import React from 'react';
import Messages from "./Messages";

const Content = () => {
    return (
        <section className="content px-5">
            <div className="container-fluid">
                <p className={"h4 text-center py-5"}>Выводим комментарии</p>
                <Messages/>
            </div>
        </section>
    );
};

export default Content;
