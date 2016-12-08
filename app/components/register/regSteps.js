angular.module('registerModule').directive('regSteps', function(){

	return {
		scope: {
			numSteps: '@',
		},
		bindToController: true,

		link: function(scope, element, attr, ctrl) {
			},

		controller: function($scope, $rootScope){

			var ctrl = this;

			this.current = {current: 1};

			this.numSteps = parseInt(this.numSteps);

			this.getCurrent = function(){
				return this.current.current;
			}

			this.doSomething = function() {
				console.log('done!!!');
			}


			this.isLast = function() {
				return this.current.current == this.numSteps;
			};

			this.isFirst = function() {
				return this.current.current == 1;
			};


			this.goNext = function() {
				if(!this.isLast()){
					return this.current.current = this.current.current + 1;
					console.log(this.current.current);
				}
			}

			this.goPrevious = function() {
				if(!this.isFirst()){
					return this.current.current = this.current.current - 1;
				}
			}

			$rootScope.$on('stateChange', function(){
			})

		},
		controllerAs: 'vm'
	};
}).directive('regStep', function(){
	return {
		require: '^^regSteps',
		scope: {
			step: '@'
		},
		link: function(scope, elem, attrs, ctrl){

			var setVisibility = function() {

			}
			
			scope.$root.$on('stateChange', function(){
				scope.step = parseInt(scope.step);
				if(scope.step !== ctrl.getCurrent()){
					elem.addClass('hidden');
				} else if (scope.step == ctrl.getCurrent()){
					elem.removeClass('hidden');
				}
			})

			//needs refactoring ?
			scope.step = parseInt(scope.step);
			if(scope.step !== ctrl.getCurrent()){
				elem.addClass('hidden');
			};


			} 
		} 
	}
).directive('next', function(){
	return {
		require: '^^regSteps',
		scope: {},
		link: function(scope, elem, attrs, ctrl){

			scope.$root.$on('stateChange', function(){
				if(ctrl.isLast()){
					elem.addClass('hidden');
				} else {
					elem.removeClass('hidden');
				}
			});



			elem.bind('click', function(){
				ctrl.goNext();
				scope.$emit('stateChange');
				console.log(ctrl.current.current)
			});
		}
	}
}).directive('back', function(){
	return {
		require: '^^regSteps',
		scope: {},
		link: function(scope, elem, attrs, ctrl){

			if(ctrl.isFirst()){
				elem.addClass('hidden');
			}

			scope.$root.$on('stateChange', function(){
				if(ctrl.isFirst()){
					elem.addClass('hidden');
				} else {
					elem.removeClass('hidden');
				}
			});



			elem.bind('click', function(){
				ctrl.goPrevious();
				scope.$emit('stateChange');
				console.log(ctrl.current.current)
			});
		}
	}
})
