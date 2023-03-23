var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	$scope.add = function() {
		$scope.result = parseFloat($scope.firstNum) + parseFloat($scope.secondNum);
	};

	$scope.subtract = function() {
		$scope.result = parseFloat($scope.firstNum) - parseFloat($scope.secondNum);
	};

	$scope.multiply = function() {
		$scope.result = parseFloat($scope.firstNum) * parseFloat($scope.secondNum);
	};

	$scope.divide = function() {
		$scope.result = parseFloat($scope.firstNum) / parseFloat($scope.secondNum);
	};
	$scope.modulus = function() {
		$scope.result = parseFloat($scope.firstNum) % parseFloat($scope.secondNum);
	};

});
