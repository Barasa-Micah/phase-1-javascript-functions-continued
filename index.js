// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bathe my dog');

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
mondayWork('work from home.');

function wrapAdjective(cute = '*'){
    return function(cat= 'special'){
        return `You are a ${cute}${cat}${cat}!`
    }
}

wrapAdjective ('%')('a dedicated programmer');
