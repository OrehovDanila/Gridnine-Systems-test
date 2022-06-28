import './flightList.scss'

const FlightList = () => {
    return(
        <div>
            <div className="FlightList">
                <div className="FlightList__item">
                    <div className="FlightList__item__header">
                        <div className="FlightList__item__header__price">21049 Р</div>
                        <div className="FlightList__item__header__title">Стоимость для одного взрослого пасажира</div>
                    </div>
                    <div className="FlightList__item__travel FlightList__item__travel_first">
                        <div className="FlightList__item__travel__airports">
                            <div className="FlightList__item__travel__departure">
                                Москва, Шереметьево <u>(SVO)</u>
                            </div>
                            <div className="FlightList__item__travel__destination">
                                Лондон, Лондон, Хитроу <u>(LHR)</u>
                            </div>
                        </div>
                        <div className="FlightList__item__travel__info">
                            <div className="FlightList__item__travel__info__time">
                                20:40 <u>18 авг. вт.</u>
                            </div>
                            <div className="FlightList__item__travel__info__time">
                                14 ч 45 мин
                            </div>
                            <div className="FlightList__item__travel__info__time">
                                <u>11 авг. вт.</u> 9:45 
                            </div>
                        </div>
                        <div className="FlightList__item__travel__transfer">
                            1 пересадка
                        </div>
                        <div className="FlightList__item__travel__company">
                            Рейс выполняет: Lot Polish Airlines
                        </div>
                    </div>
                    <div className="FlightList__item__travel">
                        <div className="FlightList__item__travel__airports">
                            <div className="FlightList__item__travel__departure">
                                Москва, Шереметьево <u>(SVO)</u>
                            </div>
                            <div className="FlightList__item__travel__destination">
                                Лондон, Лондон, Хитроу <u>(LHR)</u>
                            </div>
                        </div>
                        <div className="FlightList__item__travel__info">
                            <div className="FlightList__item__travel__info__time">
                                20:40 <u>18 авг. вт.</u>
                            </div>
                            <div className="FlightList__item__travel__info__time">
                                14 ч 45 мин
                            </div>
                            <div className="FlightList__item__travel__info__time">
                                <u>11 авг. вт.</u> 9:45 
                            </div>
                        </div>
                        <div className="FlightList__item__travel__transfer">
                            1 пересадка
                        </div>
                        <div className="FlightList__item__travel__company">
                            Рейс выполняет: Lot Polish Airlines
                        </div>
                    </div>
                    <button className="FlightList__item__btn">ВЫБРАТЬ</button>
                </div>
                <div className="FlightList__item">
                    <div className="FlightList__item__header">
                        <div className="FlightList__item__header__price">21049 Р</div>
                        <div className="FlightList__item__header__title">Стоимость для одного взрослого пасажира</div>
                    </div>
                    <div className="FlightList__item__travel FlightList__item__travel_first">
                        <div className="FlightList__item__travel__airports">
                            <div className="FlightList__item__travel__departure">
                                Москва, Шереметьево <u>(SVO)</u>
                            </div>
                            <div className="FlightList__item__travel__destination">
                                Лондон, Лондон, Хитроу <u>(LHR)</u>
                            </div>
                        </div>
                        <div className="FlightList__item__travel__info">
                            <div className="FlightList__item__travel__info__time">
                                20:40 <u>18 авг. вт.</u>
                            </div>
                            <div className="FlightList__item__travel__info__time">
                                14 ч 45 мин
                            </div>
                            <div className="FlightList__item__travel__info__time">
                                <u>11 авг. вт.</u> 9:45 
                            </div>
                        </div>
                        <div className="FlightList__item__travel__transfer">
                            1 пересадка
                        </div>
                        <div className="FlightList__item__travel__company">
                            Рейс выполняет: Lot Polish Airlines
                        </div>
                    </div>
                    <div className="FlightList__item__travel">
                        <div className="FlightList__item__travel__airports">
                            <div className="FlightList__item__travel__departure">
                                Москва, Шереметьево <u>(SVO)</u>
                            </div>
                            <div className="FlightList__item__travel__destination">
                                Лондон, Лондон, Хитроу <u>(LHR)</u>
                            </div>
                        </div>
                        <div className="FlightList__item__travel__info">
                            <div className="FlightList__item__travel__info__time">
                                20:40 <u>18 авг. вт.</u>
                            </div>
                            <div className="FlightList__item__travel__info__time">
                                14 ч 45 мин
                            </div>
                            <div className="FlightList__item__travel__info__time">
                                <u>11 авг. вт.</u> 9:45 
                            </div>
                        </div>
                        <div className="FlightList__item__travel__transfer">
                            1 пересадка
                        </div>
                        <div className="FlightList__item__travel__company">
                            Рейс выполняет: Lot Polish Airlines
                        </div>
                    </div>
                    <button className="FlightList__item__btn">ВЫБРАТЬ</button>
                </div>
            </div>
            <button className="FlightList__loadMoreBtn">Показать ещё</button>
        </div>

    )
}

export default FlightList;