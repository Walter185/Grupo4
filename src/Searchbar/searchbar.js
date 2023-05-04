import React, { useState } from 'react';

import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router';

function Searchbar(){

    const [input, setInput] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const navigate = useNavigate();
            navigate(`/buscar?q=${input}`);
        }
    };

    return (
        <div className="search-input">
            <div className="lupa">
                <FaSearch />
            </div>
            <div className="input-text">
                <input type="text" id="search" placeholder="Ingrese su búsqueda" 
                    name="search" 
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
}

export default Searchbar;
