import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useServer from '../../services/ServerService';

import './flightList.scss'

import { fetchFlights, filtredFlightsChange } from '../../actions';
import FlightsListItem from '../flightListItem/FlightListItem';

const comparePriceIncrease = (a, b) => {
    if(+ a.price > + b.price){
        return 1
    }
    if(+ a.price < +b.price){
        return -1
    }
    if(+a.price === +b.price){
        return 0
    }
}

const comparePriceDecrease = (a, b) => {
    if(+ a.price > + b.price){
        return -1
    }
    if(+ a.price < +b.price){
        return 1
    }
    if(+a.price === +b.price){
        return 0
    }
}

const compareTime = (a, b) => {
    if(a.legs[0].duration + a.legs[1].duration > b.legs[0].duration + b.legs[1].duration ){
        return 1
    }
    if(a.legs[0].duration + a.legs[1].duration < b.legs[0].duration + b.legs[1].duration ){
        return -1
    }
    if(a.legs[0].duration + a.legs[1].duration === b.legs[0].duration + b.legs[1].duration ){
        return 0
    }
}

const FlightList = () => {

    const { getFlights } = useServer();
    const dispatch = useDispatch();

    const flights = useSelector(state => state.flights.flights);
    const flisghtsLoadingStatus = useSelector(state => state.flights.flisghtsLoadingStatus);
    //const flightsIndex = useSelector(state => state.flights.flightsIndex);
    const OneTransfer = useSelector(state => state.filters.OneTransfer);
    const NoTransfer = useSelector(state => state.filters.NoTransfer);
    const sorting = useSelector(state => state.filters.sorting);
    const minPrice = useSelector(state => state.filters.minPrice);
    const maxPrice = useSelector(state => state.filters.maxPrice);
    const companyFilter = useSelector(state => state.filters.companyFilter);

    useEffect(() => {
        dispatch(fetchFlights(getFlights));
        // eslint-disable-next-line
    }, []);

    const filtredFlights = useMemo(() => {
        let filtredFlights = flights.slice()

        if( !OneTransfer ){
            filtredFlights = filtredFlights.filter(flight => !(flight.legs[0].transistion === 2 && flight.legs[1].transistion === 2));
        }

        if( !NoTransfer ){
            filtredFlights = filtredFlights.filter(flight => !(flight.legs[0].transistion === 1 && flight.legs[1].transistion === 1));
        }

        switch(sorting){
            case 'default':
                break;
            case 'increase':
                filtredFlights.sort(comparePriceIncrease)
                break;
            case 'decrease':
                filtredFlights.sort(comparePriceDecrease)
                break;
            case 'time': 
                filtredFlights.sort(compareTime)
                break;
            default:
                break;
        }

        filtredFlights = filtredFlights.filter(flight => flight.price > minPrice);
        filtredFlights = filtredFlights.filter(flight => flight.price < maxPrice);

        if(companyFilter){
            for( let filter of companyFilter){
                filtredFlights = filtredFlights.filter(flight => flight.legs[0].company === filter || flight.legs[1].company === filter)
            }
        }


        dispatch(filtredFlightsChange(filtredFlights));

        return filtredFlights;
        // eslint-disable-next-line
    },[flights, OneTransfer, NoTransfer, sorting, minPrice, maxPrice, companyFilter]);


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

    const elements = renderFlights(filtredFlights);

    return(
        <div>
            Всего результатов: {filtredFlights.length}
            <div className="FlightList">
                {elements}
            </div>
            <button className="FlightList__loadMoreBtn">Показать ещё</button>
        </div>

    )
}

export default FlightList;