import moment from "moment/moment"
import "moment/locale/ru"

function CalendarHeader(data) {    
    const { userDate } = data;
    const date = moment(userDate)
    const dateParse = date.format('LL').split(' ')
    return (
        <>            
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{date.format('dddd')[0].toUpperCase() + date.format('dddd').slice(1)}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{dateParse[0]}</div>
                    <div className="ui-datepicker-material-month">{dateParse[1]}</div>
                    <div className="ui-datepicker-material-year">{dateParse[2]}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">{date.format('MMMM')[0].toUpperCase() + date.format('MMMM').slice(1)}</span>&nbsp;<span className="ui-datepicker-year">{date.format('YYYY')}</span>
                </div>
            </div>
        </>        
    )
}

export default CalendarHeader