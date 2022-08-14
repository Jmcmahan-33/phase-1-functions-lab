// Code your solution in this file!
const scuberLocation = 42
const pickupInFt = 264

function distanceFromHqInBlocks(pickupBlock) {
  if (pickupBlock > 42) {
    return pickupBlock - scuberLocation
  } else if (pickupBlock < 42) {
    return scuberLocation - pickupBlock
  }

}

function distanceFromHqInFeet(number) {
   return distanceFromHqInBlocks(number) * pickupInFt
   

}

function distanceTravelledInFeet(scuberLocation,destination1) {
    if (destination1 > scuberLocation) {
        return (destination1 - scuberLocation) * pickupInFt 
    }   else {
        return (scuberLocation - destination1) * pickupInFt
    }

  }

  function  calculatesFarePrice(scuberLocation, destination1) {
    let calculatesFarePrice
    let feetTraveled = distanceTravelledInFeet(scuberLocation,destination1) 
    if (feetTraveled < 400) {
        return calculatesFarePrice = 0
    } else if (feetTraveled > 400 && feetTraveled < 2000) {
        calculatesFarePrice = feetTraveled - 400 
        return (calculatesFarePrice) * 0.02
    } else if (feetTraveled > 2000 && feetTraveled < 2499) {
        calculatesFarePrice = 25
        return calculatesFarePrice
    } else if (feetTraveled > 2500) {
        return 'cannot travel that far'
    }
  }
  