export const shortenThousand = (number) => {
    if(number > 1000) {
        let formattedNumber = number / 1000;
        formattedNumber = Math.round(formattedNumber * 10) / 10;
        return formattedNumber + 'k';
    } else {
        return number;
    }
}

export const relativeTime = (unixTimestamp) => {
    const currentTimestamp = Math.floor(Date.now() / 1000); // Get current Unix timestamp
    const elapsedSeconds = currentTimestamp - unixTimestamp;

    // Define time intervals in seconds
    const intervals = {
        year: 31536000,
        month: 2592000,
        day: 86400,
        hour: 3600,
        minute: 60,
    };

    // Iterate through intervals and find the largest one that fits the elapsed time
    for (const [unit, seconds] of Object.entries(intervals)) {
        if (elapsedSeconds >= seconds) {
        const interval = Math.floor(elapsedSeconds / seconds);
        return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now'; // If the timestamp is in the future or within a minute

}