import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useServer from '../../services/ServerService';

import './flightList.scss'

import { fetchFlights, filtredFlightsChange, flightsIndexChange } from '../../actions';
import FlightsListItem from '../flightListItem/FlightListItem';

//Группа функций для сортировки перелётов

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

//Смарт компонент для загрузки и отображения данных с сервера. По сути, основной компонент приложения. 

const FlightList = () => {

    //Инициализирующий блок

    const { getFlights } = useServer();
    const dispatch = useDispatch();

    const flights = useSelector(state => state.flights.flights);
    const flisghtsLoadingStatus = useSelector(state => state.flights.flisghtsLoadingStatus);
    const flightsIndex = useSelector(state => state.flights.flightsIndex);
    const OneTransfer = useSelector(state => state.filters.OneTransfer);
    const NoTransfer = useSelector(state => state.filters.NoTransfer);
    const sorting = useSelector(state => state.filters.sorting);
    const minPrice = useSelector(state => state.filters.minPrice);
    const maxPrice = useSelector(state => state.filters.maxPrice);
    const companyFilter = useSelector(state => state.filters.companyFilter);

    //Хук useEffect без зависимостей получает данные только при загрузке и первом рендере компонента

    useEffect(() => {
        dispatch(fetchFlights(getFlights));
        // eslint-disable-next-line
    }, []);

    //Хук useMemo для запоминания отфильтрованных перелётов, что бы ререндерить их при изменении состояния приложения. Зависит как от данных с сервера, так и от фильтров.
    
    const filtredFlights = useMemo(() => {
        let filtredFlights = flights.slice()

        //Фильтрация по пересадкам

        if( !OneTransfer ){
            filtredFlights = filtredFlights.filter(flight => !(flight.legs[0].transistion === 2 && flight.legs[1].transistion === 2));
        }

        if( !NoTransfer ){
            filtredFlights = filtredFlights.filter(flight => !(flight.legs[0].transistion === 1 && flight.legs[1].transistion === 1));
        }

        //Сортировка

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

        //Фильтрация по максимальной/минимальной цене

        filtredFlights = filtredFlights.filter(flight => flight.price > minPrice);
        filtredFlights = filtredFlights.filter(flight => flight.price < maxPrice);

        //Фильтрация по компаниям

        if(companyFilter){
            for( let filter of companyFilter){
                filtredFlights = filtredFlights.filter(flight => flight.legs[0].company === filter || flight.legs[1].company === filter)
            }
        }

        //Отправка данных в стор для фасеточной фильтрации

        dispatch(filtredFlightsChange(filtredFlights));

        return filtredFlights;
        // eslint-disable-next-line
    },[flights, OneTransfer, NoTransfer, sorting, minPrice, maxPrice, companyFilter]);


    //Блок с заглушками для загрузки данных и ошибок сервера

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

    //Функция для рендера перелётов с помощью дамб клмпонента

    const renderFlights = (arr) => {
        return arr.map(({id, ...props}) => {
            return(
                <FlightsListItem key={id} {...props}/>
            )
        });
    }

    const elements = renderFlights(filtredFlights.slice(0, flightsIndex));

    //Рендер

    return(
        <div>
            Всего результатов: {filtredFlights.length}
            <div className="FlightList">
                {elements}
            </div>
            <button className="FlightList__loadMoreBtn" onClick={() => dispatch(flightsIndexChange(flightsIndex+10))}>Показать ещё</button>
        </div>

    )
}

export default FlightList;