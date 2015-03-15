angular.module('signup' , [])
	.directive('optIn', function() {
	    return {
	        restrict: 'E',
	        transclude: true,
	        templateUrl: 'js/sign-up.html'
	    }
})