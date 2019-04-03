'use strict';


/**
 * Returns the state of the vehicle
 *
 * id String The id number of the car
 * no response value expected for this operation
 **/
exports.drive_state = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the temperature
 *
 * id String The id number of the car
 * drive_temp String The desired temperature of the car
 * passenger_temp String The desired temperature of passenger's side
 * no response value expected for this operation
 **/
exports.set_temps = function(id,drive_temp,passenger_temp) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Details about owned vehicle
 *
 * no response value expected for this operation
 **/
exports.vehicleGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

