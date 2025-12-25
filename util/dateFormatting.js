export function formatDate(dateString) {
    if (!dateString) return '';

    let cleanDate = dateString.split('@')[0].trim();

    // handle date ranges (e.g., "April 11th-14th, 2024")
    if (cleanDate.includes('-')) {
        const parts = cleanDate.split('-');
        if (parts.length === 2) {
            const month = parts[0].split(' ')[0]; // month from first part
            const endDay = parts[1].split(',')[0].trim(); //  end day
            const year = cleanDate.split(',').pop().trim(); //  year
            cleanDate = `${month} ${endDay}, ${year}`;
        }   
    }

    // remove day of week 
    cleanDate = cleanDate.replace(/^[A-Za-z]+,\s*/, '');

    // remove ordinal suffixes
    cleanDate = cleanDate.replace(/(\d+)(st|nd|rd|th)/g, '$1');

    return cleanDate;
}

export function parseDate(dateString) {
    const formatted = formatDate(dateString);
    return new Date(formatted);
}

export function isFutureDate(dateString) {
    const date = parseDate(dateString);
    const now = new Date();
    now.setHours(0, 0, 0, 0); // reset to start of day 
    return date.getTime() >= now.getTime();
}

export function sortEventsByDate(events, ascending = true) {
    return [...events].sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return ascending ? dateA - dateB : dateB - dateA;
    });
}

export default formatDate;