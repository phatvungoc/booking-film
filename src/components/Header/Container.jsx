import React from 'react';
import ListFilm from './ListFilm';
import TicketBooking from './TicketBooking';

const Container = () => {
    return (
        <div className="container">
            <ListFilm />
            <TicketBooking />
        </div>
    );
};

export default Container;
