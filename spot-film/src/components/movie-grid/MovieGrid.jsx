import React, { useState, useEffect } from 'react'

import './movie-grid.scss';

import MovieCard from '../movie-card/MovieCard';


const MovieGrid = props => {

    const [intems, setItems] = useState([]);

    const [page, setPage] = useState(1);
    return (
        <div>MovieGrid</div>
    )
}



export default MovieGrid