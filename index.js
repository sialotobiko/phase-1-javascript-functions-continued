// code your solution here
function saturdayFun(funActivity = 'roller-skate'){
    return `This Saturday, I want to ${funActivity}!`
}

const mondayWork = function(mondayActivity = 'go to the office'){
    return `This Monday, I will ${mondayActivity}.`
}

function wrapAdjective(style = '*'){

    return function(adjective = "special"){
      return `You are ${style}${adjective}${style}!`
    }
    
  }
  wrapAdjective()();