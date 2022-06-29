import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useServer from '../../services/ServerService';

import './flightList.scss'

import { fetchFlights } from '../../actions';
import FlightsListItem from '../flightListItem/FlightListItem';

const FlightList = () => {

    const { getFlights } = useServer();
    const dispatch = useDispatch();

    const flights = useSelector(state => state.flights.flights);
    const flisghtsLoadingStatus = useSelector(state => state.flights.flisghtsLoadingStatus);
    const flightsIndex = useSelector(state => state.flights.flightsIndex);

    useEffect(() => {
        dispatch(fetchFlights(getFlights));
        // eslint-disable-next-line
    }, []);

    if(flisghtsLoadingStatus === 'loading'){
        return(
            <div className="FlightList">
                <h4>Загрузка перелётов</h4>
            </div>
        )
    } else if( flisghtsLoadingStatus === 'error' ){
        return(
            <div className="FlightList">
                <h4>Ошибка загрузки</h4>
            </div>
        )
    }

    const renderFlights = (arr) => {
        return arr.map(({id, ...props}) => {
            return(
                <FlightsListItem key={id} {...props}/>
            )
        });
    }

    const elements = renderFlights(flights);

    return(
        <div>
            <div className="FlightList">
                {elements}
            </div>
            <button className="FlightList__loadMoreBtn">Показать ещё</button>
        </div>

    )
}

export default FlightList;