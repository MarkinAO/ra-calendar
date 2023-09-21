import moment from "moment/moment";
import "moment/locale/ru";
import GetWeek from "./getWeek";

function GetMonth(data) {
    const userDate = moment(data.userDate);
    const firstDayOfMonth = moment(new Date(userDate.format('Y') + '-' + userDate.format('M') + '-' + '01'))
    let firstDay = null;
    
    if(firstDayOfMonth.format('d') !== '1') {
        let currentDay = moment(firstDayOfMonth);
        do {
            currentDay.subtract(1, 'days');
        } while (currentDay.format('d') !== '0');        
        firstDay = currentDay;        
    }

    const month = [];
    let week = [];
    let newDay = moment(firstDay);
    for (let i = 0, j = 0; i < 35; i++, j++) {        
        week.push(newDay);
        newDay = moment(newDay.add(1, 'days'));
        
        if(j === 6) {
            month.push(week);
            week = [];
            j = -1;
        }        
    }    
    
    return (
        <>
            { month.map(week => GetWeek(week, userDate)) }
        </>
    );
}

export default GetMonth;
