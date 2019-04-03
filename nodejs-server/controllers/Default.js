'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.drive_state = function drive_state (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.drive_state(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.set_temps = function set_temps (req, res, next) {
  var id = req.swagger.params['id'].value;
  var drive_temp = req.swagger.params['drive_temp'].value;
  var passenger_temp = req.swagger.params['passenger_temp'].value;
  Default.set_temps(id,drive_temp,passenger_temp)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vehicleGET = function vehicleGET (req, res, next) {
  Default.vehicleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
