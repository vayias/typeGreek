'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope) {

var greekArr ="ΑΒΨΔΕΦΓΗΙ ΚΛΜΝΟΠ ΡΣΤΘΩ ΧΥΖ";
var map = {};
for (var i = 65; i <91; i++) {
		map[i] = greekArr.charAt(i-65);
}

$('textarea').on('keydown', function (e) {
	if(e.keyCode in map) {
		console.log(2);
        e.preventDefault();
        $(this).append(map[e.keyCode]).focus();
    }
            return true;

});

  });
