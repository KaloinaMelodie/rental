function isValidYYYYMMDD(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(dateString)) {
        return false;
    }

    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    const dateObj = new Date(Date.UTC(year, month - 1, day)); 

    if (isNaN(dateObj.getTime())) { 
        return false;
    }

    const inputYear = dateObj.getUTCFullYear();
    const inputMonth = dateObj.getUTCMonth() + 1; 
    const inputDay = dateObj.getUTCDate();

    return inputYear === year && inputMonth === month && inputDay === day;
}

module.exports = {isValidYYYYMMDD};