angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', function($scope , $http){

		$scope.applicantData = {
			name      : '',
			bio       : '',
			skills    : '',
			years     : '',
			why       : '',
	}

	$scope.applicantsInfo =[]

	$scope.getInfo = function(){ 

	// 	$http({
	// 		method :'GET',
	// 		url    :'/getapplicants',
	// 		data   : $scope.applicantData
	// 	}).then(function(returnData){
	// 		$scope.applicantsInfo =push(returnData.data)
	// 	}, function(error){
	// 		console.log('Error', error)
	// 		})


	// 	 }

		
		
	// ]);