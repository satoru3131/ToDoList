
exports.getDate = function (){

    today = new Date();
    const currentDay = today.getDay();
    day = "";

    const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return today.toLocaleDateString("ja-JP", options);

}

exports.getDay = function (){

    today = new Date();
    const currentDay = today.getDay();
    day = "";

    const options = {
        weekday: "short",
    }

    return today.toLocaleDateString("ja-JP", options);

}