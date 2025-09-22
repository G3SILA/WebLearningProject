export default  function isWeekend(date) {
    const weekday = date.format('dddd'); 
    return weekday === 'Sunday' || weekday === 'Saturday'; 
}


