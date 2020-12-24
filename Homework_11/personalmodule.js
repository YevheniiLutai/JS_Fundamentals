//****** Code for Task 2 ******\\

//************************** Task_2 **************************\\
const currentDate = () => {
    return new Date();
};
const Date = () => {
    let day = new Date();
    let currentHour = day.getHours();
    
    if (currentHour >= 23 && currentHour < 5) {
        return "Good night, ";
    } else if (currentHour >= 5 && currentHour < 11) {
        return "Good morning ,";
    } else if (currentHour >= 11 && currentHour < 17) {
        return "Good afternoon, ";
    } else if (currentHour >= 17 && currentHour < 23) {
        return "Good evening, ";
    }
};

exports.currentDate = currentDate;
exports.Date = Date;
//-----------------------------------------------------------\\