(function(){
'use strict';
angular.module("LunchCheck",[])
	   .controller("LunchCheckController",LunchCheckController);
LunchCheckController.$inject=['$scope'];

	function LunchCheckController($scope){
		$scope.dishes='';
		$scope.message='';
		$scope.checked = false;

 		$scope.checkItem = function(){
 			if ($scope.dishes.trim().length ===0) {
 				$scope.empty= true;
 			}
 			else{
 				$scope.empty = false;
 				$scope.checked = true;
 				var arrDishes= $scope.dishes.split(',');
 				var arrDishesWithoutEmpty= arrDishes.filter(function(arg){
 					return arg.trim()!=='';
 				});
 				if( arrDishesWithoutEmpty.length <= 3)
 				{
 					$scope.message= 'Enjoy!';
 				}
 				
 				else
 				{	
 					$scope.message ="Too much!";
 				}	
 				
 			}
 	};
}	   


})();