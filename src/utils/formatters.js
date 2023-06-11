export const formatUpVotes = (number) => {
    if(number > 1000) {
        let formattedNumber = number / 1000;
        formattedNumber = Math.round(formattedNumber * 10) / 10;
        return formattedNumber + 'k';
    } else {
        return number;
    }
}