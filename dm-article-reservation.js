(function(){
	//the module
	angular.module("dmArticleReservation", ["ngResource","toastr","ngMaterial"]); 
	angular.module('dmArticleReservation').run(runBlock);
	runBlock.$inject = ["$templateCache"];
	
	function runBlock($templateCache){
		console.log("module dmArticleReservation");
	}
	
	//the directive
	'use strict';
	angular
		.module('dmArticleReservation')
		.directive('articleReservation', articleReservation);
		
	articleReservation.$inject = ['Reservation', 'toastr', '$templateCache'];	

	function articleReservation(Reservation, toastr, $templateCache) {
		return {
			restrict: 'EA',
			template: '../dm-article-reservation.html',
			scope: {
				article:"=",
			},
			link: function (scope, element, attr) {
				
				scope.totalReservation = 0;
				scope.formModified = false;
				
				scope.$watch ('article', function(newValue){

					if(!newValue.codeArt){
						scope.showme = false;
						return;
					}
					
					scope.showme = true;
					scope.totalReservation = 0;
					scope.reservation = [];
					
					
					scope.readReservation();
				})
				
				scope.updateReservation = function(res){
					if(scope.totalReservation > (scope.article.qteCmd - scope.article.qteRes)){
						toastr.error('Total réservations supérieure à la quantité commandée !!!', 'Erreur quantité');
						return;
					}
					
					if(!scope.formModified){
						toastr.error('Aucune modification detectée', 'Aucune modification');
						return;
					}
					
					//save data
					Reservation.update(
						{p1: scope.article.id,p2:"save"},
						scope.reservation,
						function(success){
							toastr.success('Enregisté avec succès', 'Succès');
							scope.readReservation();
						},
						function(err){
							toastr.error(err.statusText, 'Erreur');
						}
					);
				}
				
				scope.getTotal = function(){
					var total = 0;
					var tmp=0;
					console.log("total");
					
					
					
					angular.forEach(scope.reservation, function(res, key){
						if(angular.isNumber(res.qteARes)){
							total = total + res.qteARes;
							scope.formModified = true;
							tmp=1;
						}
					})
					
					if(tmp == 0){
						scope.formModified = false;
					}
					
					console.log(total);
					
					scope.totalReservation = total;
				}
				
				//read article reservation detail
				scope.readReservation = function(){
					scope.reservation = Reservation.query(
						{p1: scope.article.id}, 
						function(success){
							scope.formModified = false;
						},
						function(err){
							toastr.error(err.statusText, 'Erreur');
						}
					);
				}
            }
		};
	}
	
	//the factory
	angular.module('dmArticleReservation')
		.factory('Reservation', function($resource) {
			return $resource('https://srv-vpn.dimatit.intra/api/reservation/:p1/:p2', null,{
					update: {method: 'PUT'},
					stripTrailingSlashes: false});
		})
		
	//controller
	angular.module('dmArticleReservation')
			.controller('ctrlArticleReservation', ctrlArticleReservation);
			
	ctrlArticleReservation.$inject = ['$scope'];	
		
	function ctrlArticleReservation($scope){
		console.log("Initialisation Article à vide");
		$scope.article = {};
	}	
		
		

})();