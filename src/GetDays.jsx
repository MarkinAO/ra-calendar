function GetDays(newDate, userDate) {
    let className = '';
    if(newDate.format('M') !== userDate.format('M')) {
        className = 'ui-datepicker-other-month';        
    } 
    if (newDate.format('D') === userDate.format('D')) {
        className = 'ui-datepicker-today';        
    } 

    return (
        <td className={className}>
                { newDate.format('D') }
        </td>
    )
}

export default GetDays