import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="">ThienVu</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Notes</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;