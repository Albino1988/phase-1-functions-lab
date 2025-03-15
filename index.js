// Code your solution in this file!
unction distanceFromHqInBlocks(pickupLocation) {
    
    return Math.abs(pickupLocation - 42);

  }

  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }

  function distanceTravelledInFeet(startBlock, destinationBlock) {
    
    return Math.abs(destinationBlock - startBlock) * 264;
  }

  // Example 1: Distance from HQ (42nd Street) to 50th Street
let pickupLocation = 50;
console.log(distanceFromHqInBlocks(pickupLocation));  // Output: 8
console.log(distanceFromHqInFeet(pickupLocation));    // Output: 2112

// Example 2: Distance travelled between 34th Street and 38th Street
let startBlock = 34;
let destinationBlock = 38;
console.log(distanceTravelledInFeet(startBlock, destinationBlock))
