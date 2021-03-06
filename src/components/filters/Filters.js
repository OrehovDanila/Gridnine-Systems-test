import './filters.scss'

import { useDispatch, useSelector } from 'react-redux';

import {
    filterSortingChanged,
    filter1TransferChanged,
    filterNoTransferChanged,
    filterMinPriceChanged,
    filterMaxPriceChanged,
    filterCompanyFilterChanged
} from '../../actions';

//Компонент с фильтрами. Управляет фильтрами. Фильтры авиокомпаний строяться на основе прочих фильтров включая фильтр авиокомпаний. 

const Filters = () => {

    //Инициализирующий блок

    const dispatch = useDispatch();

    const flights = useSelector(state => state.flights.flights);
    const filtredFlights = useSelector(state => state.flights.filtredFlights)
    const flighstsLoadingStatus = useSelector(state => state.flights.flighstsLoadingStatus);

    const oneTransfer = useSelector(state => state.filters.OneTransfer);
    const noTransfer = useSelector(state => state.filters.NoTransfer);

    const companyFilter = useSelector(state => state.filters.companyFilter);

    //Блок функций для сортировки перелётов

    const MaxPriceHandler = (e) => {
        if(e.target.value === '') {
            dispatch(filterMaxPriceChanged(1000000000))
        } else dispatch(filterMaxPriceChanged( +e.target.value ))
    }

    const MinPriceHandler = (e) => {
        if(e.target.value === '') {
            dispatch(filterMinPriceChanged(0))
        } else dispatch(filterMinPriceChanged( +e.target.value ))
    }

    const CompanyFilterHandler = (company) => {
        dispatch(filterCompanyFilterChanged(company))
    }

    //Блок заглучшка для загрузки данных или ошибки сети

    if(flighstsLoadingStatus === 'loading'){
        return <div className="filters__container">Загрузка</div>
    } else if(flighstsLoadingStatus === 'error'){
        return <div className="filters__container">Ошибка</div>
    }

    //Функция которая создаёт сет авиокомпаний

    const createCompanyFilterSet = (flights) => {
        const companies = [];

        flights.forEach((flight) => {
            flight.legs.forEach((leg) => {
                companies.push(leg.company);
            })
        })
        
        const companiesSet = new Set(companies);
        
        return companiesSet;
    }

    //Функция для поиска минимальной цены билета для конкретной авиокомпании

    const findMinPrice = (company) => {
        let filtredFlights = flights.filter(flight => flight.legs[0].company === company || flight.legs[1].company === company);
        let min = + filtredFlights[0].price;
        filtredFlights.forEach((flight) => {
            if(+flight.price <= min) {
                min = +flight.price;
            }
        })
        return min;
    }

    //Функция для рендера фильтров авиаокомапаний

    const renderCompanyFilter = (companiesSet) => {
        return Array.from(companiesSet).map((item, i) => {

            //Нужен для обрезания названий 
            let slicedItem;

            if(item.length >= 14) {
                slicedItem = item.slice(0,14) + '....'
            } else slicedItem = item;

            return(
                <div key={i}>
                    <input type="checkbox" onChange={() => {CompanyFilterHandler(item)}} checked={companyFilter.includes(item)}/>
                    <label htmlFor="compony1">- {slicedItem} от {findMinPrice(item)} р.</label>
                </div>
            )
        })
    }

    const elements = renderCompanyFilter(createCompanyFilterSet(filtredFlights));

    //Рендер

    return(
        <div className="filters__container">
            <div className="filters__container__item">
                <h4>Сортировать</h4>
                <form action="" className='filters__container__item__form' >

                    <div>
                        <input type="radio" name="sorting" value={'increase'} onChange={() => dispatch(filterSortingChanged('increase'))}/>
                        <label htmlFor="sortingChoice1"> - по возрастанию цены</label>
                    </div>

                    <div>
                        <input type="radio" name="sorting" value={'decrease'} onChange={() => dispatch(filterSortingChanged('decrease'))}/>
                        <label htmlFor="sortingChoice2"> - по убыванию цены</label>
                    </div>

                    <div>
                        <input type="radio" name="sorting" value={'time'} onChange={() => dispatch(filterSortingChanged('time'))}/>
                        <label htmlFor="sortingChoice3"> - по времени в пути</label>
                    </div>

                </form>
            </div>
            <div className="filters__container__item">
                <h4>Фильтровать</h4>
                <form action="" className='filters__container__item__form'>

                    <div>
                        <input type="checkbox" name="filter" onChange={() => {dispatch(filter1TransferChanged())}} checked={oneTransfer}/>
                        <label htmlFor="filterChoice1"> - 1 пересадка</label>
                    </div>

                    <div>
                        <input type="checkbox" name="filter" onChange={() => {dispatch(filterNoTransferChanged())}} checked={noTransfer}/>
                        <label htmlFor="filterChoice2"> - Без пересадок</label>
                    </div>

                </form>
            </div>
            <div className="filters__container__item">
                <h4>Цена</h4>
                <form action="" className='filters__container__item__form'>

                    <div>
                        <label htmlFor="priceFrom">От</label>
                        <input type="number" placeholder="0" onChange={MinPriceHandler} />
                    </div>

                    <div>   
                        <label htmlFor="priceFrom">До</label>
                        <input type="number" placeholder="10000000" onChange={MaxPriceHandler} />
                    </div>

                </form>
            </div>
            <div className="filters__container__item">
                <h4>Авиокомпании</h4>
                <form action="" className='filters__container__item__form'>
                    
                    {elements}

                </form>
            </div>
        </div>
    )
}

export default Filters;