function makeTime(hours, minutes) {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

/**
 * @type {Object<string, Flight>} Список всех рейсов
 */
let flights = {
    BH118: {
        name: 'BH118',
        seats: 28,
        businessSeats: 4,
        registrationStarts: makeTime(10, 0),
        registartionEnds: makeTime(15, 0),
        tickets: [
            {
                id: 'BH118-B50',
                flight: 'BH118',
                fullName: 'Ivanov I. I.',
                type: 0,
                seat: 18,
                buyTime: makeTime(2, 0),
                registrationTime: null
            }
        ],
        returnedTickets: []
    }
};

/**
 * Добавление рейса
 *
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 *
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @returns {Flight}
 */

// function createFlight(airliner, time) { }

/**
 * Поиск свободного места нужного типа
 *
 * Гарантирует что найдет свободное место нужного типа или вернет null
 *
 * @param {Flight} flight
 * @param {number} type
 * @returns {number} seat
 */
function findAvailableSeat(flight, type) {
    let exists;
    let seat;
    let seatsOfType = 0;

    switch (type) {
    case 0: // standart
        const availableSeats = [];

        for (let i = flight.businessSeats + 1; i <= flight.seats; i++) {
            if (!flight.tickets.find(item => item.seat === i)) {
                availableSeats.push(i);
            }
        }

        if (availableSeats.length === 0) {
            return null;
        }

        const index = Math.floor(Math.random() * availableSeats.length);
        return availableSeats[index];
    case 1: // business
        for (let i = 1; i <= flight.businessSeats; i++) {
            if (!flight.tickets.find(item => item.seat === i)) {
                seatsOfType++;
            }
        }

        if (seatsOfType === 0) {
            return null;
        }

        do {
            seat = Math.floor(Math.random() * flight.businessSeats) + 1;
            exists = flight.tickets.find(item => item.seat === seat);
        } while (exists);

        return seat;
    default:
        throw new Error(`Unknown type`);
    }
}

/**
 * Покупка билета на самолет
 *
 * * проверка рейса
 * * проверка возможности купить (время и наличие мест)
 * * сохранение данных билета в информации о рейсе
 *
 * @param {string} flightName Номер рейса
 * @param {number} buyTime Время покупки
 * @param {string} fullName Имя пассажира
 * @param {number} type Тип места
 * @returns {Ticket} Возвращаем копию билета
 */
function buyTicket(flightName, buyTime, fullName, type = 0) {
    const flight = flights[flightName];

    if (!flight) {
        throw new Error('Flight not found');
    }

    if (flight.tickets.length >= flight.seats) {
        throw new Error('No seats available');
    }

    if (buyTime > flight.registartionEnds) {
        throw new Error('Time away');
    }

    const seat = findAvailableSeat(flight, type);
    if (!seat) {
        throw new Error(`No seats of type ${type} available. You can choose another type`);
    }

    let id;
    do {
        id = flight.name + '-' + Math.random().toString().substr(2, 3);
        exists = flight.tickets.find(item => item.id === id);
    } while (exists);

    /**
     * @type {Ticket}
     */
    const ticket = {
        id,
        flight: flight.name,
        buyTime,
        fullName,
        registrationTime: null,
        type,
        seat
    };

    flight.tickets.push(ticket);

    // return Object.assign({}, ticket);
    return {
        ...ticket
    };
}

function displayFlights() {
    console.log('*** List of all flights ***');
    console.table(flights);
}

function flightDetails(flightName) {
    console.log(`*** Details of flight ${flightName} ***`);
    const flight = flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    console.table(flight);
    console.table(flight.tickets);
}

/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 *
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticket, fullName, nowTime) {
    try {
        const flight = flights[ticket.split('-')[0]];

        if (!flight) {
            throw new Error('Flight not found');
        }

        const foundTicket = flight.tickets.find(item => item.id === ticket);

        if (!foundTicket) {
            throw new Error('Ticket not found');
        }

        if (foundTicket.fullName !== fullName) {
            throw new Error('The full name doesn\'t match');
        }

        if (flight.registrationStarts > nowTime) {
            throw new Error('The registration hasn\'t started yet');
        }

        if (flight.registartionEnds < nowTime) {
            throw new Error('The registration is already over');
        }

        foundTicket.registrationTime = nowTime;

        return true;
    } catch (e) {
        console.error(e.message);

        return false;
    }
}

/**
 * Функция генерации отчета по рейсу
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {string} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(flight, nowTime) {
    const foundFlight = flights[flight];

    if (!foundFlight) {
        throw new Error('Flight not found');
    }

    const registration = foundFlight.registrationStarts < nowTime && foundFlight.registartionEnds > nowTime;
    const complete = foundFlight.registartionEnds < nowTime;
    const countOfSeats = foundFlight.seats;
    const reservedSeats = foundFlight.tickets.length;
    const registeredSeats = foundFlight.tickets.filter(item => item.registrationTime).length;
    const countOfReservations = foundFlight.tickets.length + foundFlight.returnedTickets.length;
    const countOfReverts = foundFlight.returnedTickets.length;
    const percentOfReverts = (countOfReverts / countOfReservations) * 100;

    return {
        flight,
        registration,
        complete,
        countOfSeats,
        reservedSeats,
        registeredSeats,
        countOfReservations,
        countOfReverts,
        percentOfReverts
    };
}

/**
 * Функция возврата билета
 *
 *  * проверка рейса
 *  * проверка билета
 *  * вернуть билет можно если до рейса не менее 3 часов
 *  * вернуть билет можно если не бизнес класс
 *
 * @param {string} ticket номер билета
 * @param {number} nowTime текущее время
 * @returns {boolean} удалось ли отменить билет
 */
function revertTicket(ticket, nowTime) {
    try {
        const flight = flights[ticket.split('-')[0]];

        if (!flight) {
            throw new Error('Flight not found');
        }

        const foundTicket = flight.tickets.find(item => item.id === ticket);

        if (!foundTicket) {
            throw new Error('Ticket not found');
        }

        if (foundTicket.type === 1) {
            throw new Error('Ticket return from business class is not available');
        }

        // A refund is available 3 hours before the flight
        // Check-in closes one hour before the flight
        // So the refund ends 2 hours before the check-in closes
        if (flight.registartionEnds - (2 * 60 * 60 * 1000) < nowTime) {
            throw new Error('Ticket return time has expired');
        }

        const ticketIndex = flight.tickets.indexOf(foundTicket);
        flight.tickets.splice(ticketIndex, 1);

        flight.returnedTickets.push(foundTicket);

        return true;
    } catch (e) {
        console.error(e.message);

        return false;
    }
}

const ticket = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');

eRegistration(ticket.id, 'Petrov I. I.', makeTime(12, 30));

revertTicket(ticket.id, makeTime(12, 40));

console.table(flightReport('BH118', makeTime(15, 30)));
