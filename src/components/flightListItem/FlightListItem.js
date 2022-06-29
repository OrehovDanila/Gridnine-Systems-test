const FlightsListItem = ({ price, legs}) => {

    const transistionsLeg1Element = legs[0].transistions === 0? null : <div className="FlightList__item__travel__transfer">{legs[0].transistions} пересадка</div>;
    const transistionsLeg2Element = legs[1].transistions === 0? null : <div className="FlightList__item__travel__transfer">{legs[1].transistions} пересадка</div>;

    
    const transformMonth = (month) => {
        switch(month){
            case 0:
                return 'янв.';
            case 1:
                return 'фев.';
            case 2:
                return 'мар.';
            case 3:
                return 'апр.';
            case 4:
                return 'май';
            case 5:
                return 'июн.';
            case 6:
                return 'июл.';
            case 7:
                return 'авг.';
            case 8:
                return 'сен.';
            case 9:
                return 'окт.';
            case 10:
                return 'ноя.';
            case 11:
                return 'дек.';
            default: 
                break;
        }
    }

    const transformDay = (day) => {
        switch (day){
            case 0:
                return 'пн.';
            case 1:
                return 'вт.';
            case 2:
                return 'ср.';
            case 3:
                return 'чт.';
            case 4:
                return 'пт.';
            case 5:
                return 'сб.';
            case 6:
                return 'вс.';
            default: 
                break;
        }
    }

    const transformMinutes = (minutes) => {
        if(minutes < 10 ){
            return ('0' + +minutes)
        } else return minutes
    }

    return(
        <div className="FlightList__item">
            <div className="FlightList__item__header">
                <div className="FlightList__item__header__price">{price} Р</div>
                <div className="FlightList__item__header__title">Стоимость для одного взрослого пасажира</div>
            </div>
            <div className="FlightList__item__travel FlightList__item__travel_first">
                <div className="FlightList__item__travel__airports">
                    <div className="FlightList__item__travel__departure">
                        {legs[0].departureCity}, {legs[0].departureAirport} <u>({legs[0].departureAirportTag})</u>
                    </div>
                    <div className="FlightList__item__travel__destination">
                        {legs[0].arrivalCity}, {legs[0].arrivalAirport} <u>({legs[0].arrivalAirportTag})</u>
                    </div>
                </div>
                <div className="FlightList__item__travel__info">
                    <div className="FlightList__item__travel__info__time">
                        {legs[0].departureDate.getHours()}:{transformMinutes(legs[0].departureDate.getMinutes())} <u>{legs[0].departureDate.getDate() + ' '} {transformMonth(legs[0].departureDate.getMonth()) + ' '} {transformDay(legs[0].departureDate.getDay())}</u>
                    </div>
                    <div className="FlightList__item__travel__info__time">
                        {Math.floor(legs[0].duration/60)} ч {transformMinutes(legs[0].duration%60)} мин
                    </div>
                    <div className="FlightList__item__travel__info__time">
                        <u>{legs[0].arrivalDate.getDate() + ' '} {transformMonth(legs[0].arrivalDate.getMonth()) + ' '} {transformDay(legs[0].arrivalDate.getDay())}</u> {legs[0].arrivalDate.getHours()}:{transformMinutes(legs[0].arrivalDate.getMinutes())} 
                    </div>
                </div>
                {transistionsLeg1Element}
                <div className="FlightList__item__travel__company">
                    Рейс выполняет: {legs[0].company}
                </div>
            </div>
            <div className="FlightList__item__travel">
                <div className="FlightList__item__travel__airports">
                    <div className="FlightList__item__travel__departure">
                        {legs[1].departureCity}, {legs[1].departureAirport} <u>({legs[1].departureAirportTag})</u>
                    </div>
                    <div className="FlightList__item__travel__destination">
                        {legs[1].arrivalCity}, {legs[1].arrivalAirport} <u>({legs[1].arrivalAirportTag})</u>
                    </div>
                </div>
                <div className="FlightList__item__travel__info">
                    <div className="FlightList__item__travel__info__time">
                        {legs[1].departureDate.getHours()}:{transformMinutes(legs[1].departureDate.getMinutes())} <u>{legs[1].departureDate.getDate() + ' '} {transformMonth(legs[1].departureDate.getMonth()) + ' '} {transformDay(legs[1].departureDate.getDay())}</u>
                    </div>
                    <div className="FlightList__item__travel__info__time">
                        {Math.floor(legs[1].duration/60)} ч {transformMinutes(legs[1].duration%60)} мин
                    </div>
                    <div className="FlightList__item__travel__info__time">
                        <u>{legs[1].arrivalDate.getDate() + ' '} {transformMonth(legs[1].arrivalDate.getMonth()) + ' '} {transformDay(legs[1].arrivalDate.getDay())}</u> {legs[1].arrivalDate.getHours()}:{transformMinutes(legs[1].arrivalDate.getMinutes())} 
                    </div>
                </div>
                {transistionsLeg2Element}
                <div className="FlightList__item__travel__company">
                    Рейс выполняет: {legs[1].company}
                </div>
            </div>
            <button className="FlightList__item__btn">ВЫБРАТЬ</button>
        </div>
    )
}

export default FlightsListItem;