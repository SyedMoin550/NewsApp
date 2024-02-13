import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    const capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1);
    }
    const handleSearch = ()=>{
        let search = document.getElementById('search').value.toLowerCase();

        location.href = capitalize(search);

    }
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">News-Day</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Business">Business</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/General">General</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Health">Health</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Science">Science</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Technology">Technology</Link></li>
                    </ul>
                    <div class="d-flex">
                        <input className="form-control me-2" id="search" placeholder="Search" />
                        <button type='button' className="btn btn-success" onClick={handleSearch} id='searchBtn'>Search</button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
