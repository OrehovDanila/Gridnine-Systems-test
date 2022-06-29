import { useHttp } from '../hooks/http.hook'
import { v4 as uuidv4 } from 'uuid';

const useServer = () => {

    const { request } = useHttp();

    const getFlights = async () => {
        const res = await request("http://localhost:3001/result/");
        return res.flights.map(_transformFlights);
    }

    const _transformFlights = (flight) => {
        return {
            id: uuidv4(),
            price: flight.flight.price.totalFeeAndTaxes.amount? flight.flight.price.totalFeeAndTaxes.amount : 'Цена неизвестна',
            legs: [{
                duration: flight.flight.legs[0].duration? flight.flight.legs[0].duration : 0,
                departureCity: flight.flight.legs[0].segments[0].departureCity? flight.flight.legs[0].segments[0].departureCity.caption: '',
                departureAirport: flight.flight.legs[0].segments[0].departureAirport? flight.flight.legs[0].segments[0].departureAirport.caption: '',
                departureAirportTag: flight.flight.legs[0].segments[0].departureAirport? flight.flight.legs[0].segments[0].departureAirport.uid : '',
                arrivalCity: flight.flight.legs[0].segments[flight.flight.legs[0].segments.length - 1].arrivalCity? flight.flight.legs[0].segments[flight.flight.legs[0].segments.length - 1].arrivalCity.caption: '',
                arrivalAirport: flight.flight.legs[0].segments[flight.flight.legs[0].segments.length - 1].arrivalAirport? flight.flight.legs[0].segments[flight.flight.legs[0].segments.length - 1].arrivalAirport.caption : '',
                arrivalAirportTag: flight.flight.legs[0].segments[flight.flight.legs[0].segments.length - 1].arrivalAirport? flight.flight.legs[0].segments[flight.flight.legs[0].segments.length - 1].arrivalAirport.uid : '',
                company: flight.flight.legs[0].segments[0].airline? flight.flight.legs[0].segments[0].airline.caption: '',
                departureDate: new Date(flight.flight.legs[0].segments[0].departureDate? flight.flight.legs[0].segments[0].departureDate : 0),
                arrivalDate: new Date(flight.flight.legs[0].segments[flight.flight.legs[0].segments.length - 1].arrivelDate? flight.flight.legs[0].segments[flight.flight.legs[0].segments.length - 1].arrivelDate : 0),
                transistion: flight.flight.legs[0].segments.lenght? flight.flight.legs[0].segments.lenght: 0,
            },{
                duration: flight.flight.legs[1].duration? flight.flight.legs[1].duration : 0,
                departureCity: flight.flight.legs[1].segments[0].departureCity? flight.flight.legs[1].segments[0].departureCity.caption: '',
                departureAirport: flight.flight.legs[1].segments[0].departureAirport? flight.flight.legs[1].segments[0].departureAirport.caption: '',
                departureAirportTag: flight.flight.legs[1].segments[0].departureAirport? flight.flight.legs[1].segments[0].departureAirport.uid : '',
                arrivalCity: flight.flight.legs[1].segments[flight.flight.legs[1].segments.length - 1].arrivalCity? flight.flight.legs[1].segments[flight.flight.legs[1].segments.length - 1].arrivalCity.caption: '',
                arrivalAirport: flight.flight.legs[1].segments[flight.flight.legs[1].segments.length - 1].arrivalAirport? flight.flight.legs[1].segments[flight.flight.legs[1].segments.length - 1].arrivalAirport.caption : '',
                arrivalAirportTag: flight.flight.legs[1].segments[flight.flight.legs[1].segments.length - 1].arrivalAirport? flight.flight.legs[1].segments[flight.flight.legs[1].segments.length - 1].arrivalAirport.uid : '',
                company: flight.flight.legs[1].segments[0].airline? flight.flight.legs[1].segments[0].airline.caption: '',
                departureDate: new Date(flight.flight.legs[1].segments[0].departureDate? flight.flight.legs[1].segments[0].departureDate : 0),
                arrivalDate: new Date(flight.flight.legs[1].segments[flight.flight.legs[1].segments.length - 1].arrivelDate? flight.flight.legs[1].segments[flight.flight.legs[1].segments.length - 1].arrivelDate : 0),
                transistion: flight.flight.legs[1].segments.lenght? flight.flight.legs[1].segments.lenght: 0,
            }]
        }
    }

    return { getFlights }
}

export default useServer