// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork =function(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol='*'){
    return function(sentence='special'){
        return `You are ${symbol}${sentence}${symbol}!`
    }
}