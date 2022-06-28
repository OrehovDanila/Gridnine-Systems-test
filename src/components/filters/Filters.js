import './filters.scss'

const Filters = () => {
    return(
        <div className="filters__container">
            <div className="filters__container__item">
                <h4>Сортировать</h4>
                <form action="" className='filters__container__item__form'>

                    <div>
                        <input type="radio" name="sorting"/>
                        <label htmlFor="sortingChoice1"> - по возрастанию цены</label>
                    </div>

                    <div>
                        <input type="radio" name="sorting"/>
                        <label htmlFor="sortingChoice2"> - по убыванию цены</label>
                    </div>

                    <div>
                        <input type="radio" name="sorting"/>
                        <label htmlFor="sortingChoice3"> - по ввремени в пути</label>
                    </div>

                </form>
            </div>
            <div className="filters__container__item">
                <h4>Фильтровать</h4>
                <form action="" className='filters__container__item__form'>

                    <div>
                        <input type="checkbox" name="filter"/>
                        <label htmlFor="filterChoice1"> - 1 пересадка</label>
                    </div>

                    <div>
                        <input type="checkbox" name="filter"/>
                        <label htmlFor="filterChoice2"> - Без пересадок</label>
                    </div>

                </form>
            </div>
            <div className="filters__container__item">
                <h4>Цена</h4>
                <form action="" className='filters__container__item__form'>

                    <div>
                        <label htmlFor="priceFrom">От</label>
                        <input type="text" placeholder="0"/>
                    </div>

                    <div>   
                        <label htmlFor="priceFrom">До</label>
                        <input type="text" placeholder="10000000"/>
                    </div>

                </form>
            </div>
            <div className="filters__container__item">
                <h4>Авиокомпании</h4>
                <form action="" className='filters__container__item__form'>
                    
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="compony1">Lot Polish Airlines от 24532 р.</label>
                    </div>

                    <div>
                        <input type="checkbox" />
                        <label htmlFor="compony1">Аэрофлот россий... от 31532 р.</label>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Filters;