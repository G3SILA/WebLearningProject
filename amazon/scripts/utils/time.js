import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function intoMonthDay(isoString) {
    return dayjs(isoString).format('MMMM D');
}

export function trackingDay(isoString) {
    return dayjs(isoString).format('dddd, MMMM D');
}

export function dayDifference(startISO, endISO) {
    return dayjs(endISO).diff(dayjs(startISO), 'day');
}
