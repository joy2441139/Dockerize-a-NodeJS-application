/**
 * 
 * @param {Date} date
 */
//function to format & get current time
function formatTime(date) {
    const hour12 = date.getHours() % 12 || 12;
    const min = date.getMinutes();
    const isAM = date.getHours() < 12;

    return `${hour12.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"}`;
}

/**
 * 
 * @param {Date} date 
 */
//function to format & get current date
function formatDate(date) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

//set 200 milliseconds interval to auto-update time/date
setInterval(() => {
    const now = new Date();
    if (typeof document !== 'undefined') {
        document.querySelector(".time").textContent = formatTime(now);
        document.querySelector(".date").textContent = formatDate(now);
    }
}, 200);

module.exports = { formatTime, formatDate }