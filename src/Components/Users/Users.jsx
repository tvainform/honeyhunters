import React from 'react'
import * as axios from 'axios';
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/images/user.jpg'


export default class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
        debugger
    }

    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        let pages = [];
        for (let i=1; i<= pagesCount; i++){
            pages.push(i);
        }

        return (
            <section className="content">
                {/* Default box */}
                <div className="card card-solid">
                    <div className="card-body pb-0">
                        <div className="row d-flex align-items-stretch">
                            {
                                this.props.users.map(u =>
                                    <div key={u.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                                        <div className="card bg-light">
                                            <div className="card-header text-muted border-bottom-0">
                                                {this.props.profession}
                                            </div>
                                            <div className="card-body pt-0">
                                                <div className="row">
                                                    <div className="col-7">
                                                        <h2 className="lead"><b>{u.name}</b></h2>
                                                        <p className="text-muted text-sm"><b>About: </b>{this.props.about}
                                                        </p>
                                                        <ul className="ml-4 mb-0 fa-ul text-muted">
                                                            <li className="small"><span className="fa-li"><i
                                                                className="fas fa-lg fa-building"/></span> Address: Demo
                                                                Street 123, Demo City
                                                                04312, NJ
                                                            </li>
                                                            <li className="small"><span className="fa-li"><i
                                                                className="fas fa-lg fa-phone"/></span> Phone #: + 800 -
                                                                12 12 23 52
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-5 text-center">
                                                        <img src={u.photos != null ? u.photos : userPhoto}
                                                             alt="user-avatar"
                                                             className="img-circle img-fluid"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="text-right">

                                                        {u.followed ? <button className="btn btn-sm btn-primary" onClick={() => {
                                                            this.props.unfollow(u.id)
                                                        }}>Отписаться</button> :
                                                            <button className="btn btn-sm btn-primary" onClick={() => {
                                                                this.props.follow(u.id)
                                                            }}>Подписаться</button>
                                                        }

                                                    <a href="#" className="btn btn-sm bg-teal">
                                                        <i className="fas fa-comments"/>
                                                    </a>
                                                    <NavLink to={"/persons/" + this.props.id}
                                                             className="btn btn-sm btn-primary">
                                                        <i className="fas fa-user"/> Профиль
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                        <nav aria-label="Contacts Page Navigation">
                            <ul className="pagination justify-content-center m-0">
                                {pages.map(p=> {
                                    return <li className={this.props.currentPage === p && 'active page-item'}>
                                        <NavLink className="page-link" to="#">{p}</NavLink></li>
                                })}

                  {/*              <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                <li className="page-item"><a className="page-link" href="#">7</a></li>
                                <li className="page-item"><a className="page-link" href="#">8</a></li>*/}
                            </ul>
                        </nav>
                    </div>
                    {/* /.card-footer */}
                </div>
                {/* /.card */}
            </section>)
    }
}
