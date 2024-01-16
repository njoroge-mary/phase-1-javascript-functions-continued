// code your solution here
function saturdayFun(activity ='roller-skate'){
    if (activity !== 'roller-skate'){
        return "This Saturday, I want to bathe my dog!"
    }else if (activity === 'roller-skate'){ 
        return "This Saturday, I want to roller-skate!"
    }else{
        return "This Saturday, I want to roller-skate!"
    }
}
function mondayWork(activity = 'go to the office'){
    if (activity !== 'go to the office'){
        return "This Monday, I will work from home."
    }else if (activity === 'go to the office'){
        return "This Monday, I will go to the office."
    }else {
        return "This Monday, I will go to the office."
    }
}
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

