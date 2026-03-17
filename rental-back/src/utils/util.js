function isValidYYYYMMDD(dateString) {
    if (typeof dateString !== 'string') {
        return false;
    }

    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
        return false;
    }

    const [yearStr, monthStr, dayStr] = dateString.split('-');

    const year = Number(yearStr);
    const month = Number(monthStr);
    const day = Number(dayStr);

    // Vérifications rapides
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;

    const dateObj = new Date(Date.UTC(year, month - 1, day));

    // Vérifie que la date correspond exactement (évite 2026-02-30 → 2026-03-02)
    return (
        dateObj.getUTCFullYear() === year &&
        dateObj.getUTCMonth() + 1 === month &&
        dateObj.getUTCDate() === day
    );
}

module.exports = { isValidYYYYMMDD };