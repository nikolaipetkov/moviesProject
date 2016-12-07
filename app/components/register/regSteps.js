angular.module('registerModule').directive('regSteps', function(){

	return {
		scope: {
			numSteps: '@',
		},
		bindToController: true,

		link: function(scope, element, attr, ctrl) {
		},

		controller: function(){

			this.current = 1;

			this.numSteps = parseInt(this.numSteps);

			this.getCurrent = function(){
				return this.current;
			}

			this.doSomething = function() {
				console.log('done!!!');
			}

			//Check if Next Step available - if not return 'false'
			this.hasNext = function() {
				var nextStep = this.current + 1;
				return nextStep < this.numsteps;
			};

			//Check if Previous Step available - if not return 'false'
			this.hasPrevious = function() {
				var previousStep = $this.current - 1;
				return previousStep > 0;
			};


			this.goNext = function() {
				if($this.hasNext()){
					return $this.current + 1;
				}
			}

			this.goPrevious = function() {
				if(this.hasPrevious()){
					return this.current - 1;
				}
			}
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
			scope.step = parseInt(scope.step);
			console.log(ctrl.getCurrent());
			console.log(typeof scope.step);
				if(scope.step !== ctrl.getCurrent()){
					elem.addClass('hidden');
				}
			}
		}
	}
).directive('next', function(){
	return {
		require: '^^regSteps',
		scope: {},
		link: function(scope, elem, attrs, ctrl){	
		}
	}
})