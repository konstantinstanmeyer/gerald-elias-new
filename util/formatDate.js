const formatDate = (dateAsString) => dateAsString.split(" ").map((text, i) => {
    switch(i) {
        case 0: 
            return text.slice(0, text.length - 1);
        case 1:
            return text.slice(0,3);
        case 2: 
            return text.slice(0, text.length -3);
        case 3:
            return text;
        default:
            return;
    }
}).join(" ");

export default formatDate;