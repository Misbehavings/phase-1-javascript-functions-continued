function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

saturdayFun();

function mondayWork(work = "go to the office") {
    return (`This Monday, I will ${work}.`)
}

mondayWork();

function wrapAdjective(String, sign = "*") {
    return function (word = "special") {
        return `You are ${String}${word}${String}!`
    }
}

wrapAdjective("%")("a dedicated programmer");