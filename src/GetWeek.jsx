import GetDays from "./getDays"

function GetWeek(week, userDate) {
    return (
        <tr>
            { week.map(day => GetDays(day, userDate)) }
        </tr>
    )
}

export default GetWeek