import { useHttp } from '../hooks/http.hook'
import { v4 as uuidv4 } from 'uuid';

const useServer = () => {

    const { request } = useHttp();

    const getFlights = async () => {
        const res = await request("http://localhost:3001/result/");
        return res.flights.map(_transformFlights);
    }

    const _transformFlights = (flight) => {

        const makeLeg = (leg) => {
            const legFirstSegment = leg.segments[0];
            const legLastSegment = leg.segments.at(-1);
            return {
                duration: leg.duration? leg.duration : 0,
                departureCity: legFirstSegment.departureCity? legFirstSegment.departureCity.caption: '',
                departureAirport: legFirstSegment.departureAirport? legFirstSegment.departureAirport.caption: '',
                departureAirportTag: legFirstSegment.departureAirport? legFirstSegment.departureAirport.uid : '',
                arrivalCity: legLastSegment.arrivalCity? legLastSegment.arrivalCity.caption: '',
                arrivalAirport: legLastSegment.arrivalAirport? legLastSegment.arrivalAirport.caption : '',
                arrivalAirportTag: legLastSegment.arrivalAirport? legLastSegment.arrivalAirport.uid : '',
                company: legFirstSegment.airline? legFirstSegment.airline.caption: '',
                departureDate: new Date(legFirstSegment.departureDate? legFirstSegment.departureDate : 0),
                arrivalDate: new Date(legLastSegment.arrivelDate? legLastSegment.arrivelDate : 0),
                transistion: leg.segments.length,
            }
        }

        return {
            id: uuidv4(),
            price: flight.flight.price.totalFeeAndTaxes.amount? flight.flight.price.totalFeeAndTaxes.amount : 'Цена неизвестна',
            legs: [makeLeg(flight.flight.legs[0]), makeLeg(flight.flight.legs[1])]
        }
    }

    return { getFlights }
}

export default useServer