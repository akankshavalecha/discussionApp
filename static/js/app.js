var app = angular.module('discussion', []);

app.directive('myEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if(event.which === 13) {
				scope.$apply(function (){
					scope.$eval(attrs.myEnter);
				});

				event.preventDefault();
			}
		});
	};
});


app.controller('discussionController',['$rootScope', '$scope', function($rootScope,$scope) { 
	$scope.newComment = {};
	$scope.level = 1;
	$scope.newChildComment = {};
	$scope.showReplyBox = false;
	window.x = $scope;
	$scope.discussionList = [
	{
		title: 'Books by earliest women writers in English on display together for first time ',
		comments: [
		{
			name: 'Sneha',
			comment: 'Why do people use "woman" as an adjective, but not \"man\"? You would never say, "Books by earliest men writers...\"',
			comments:[
			{
				name: 'Neha',
				comment: 'It looks like people are downvoting you based on what they assume you\'re saying and not what you\'re actually saying. Maybe they missed the last five words of your comment. Your point is something like; "Why isn\'t the title \'Books by earliest female writers...\'\", right?	'
			},
			{
				name: 'yyyyy',
				comment: 'There should be proper survey',
				comments: [
				{
					name: 'Ramajun',
					comment: 'There were many such surverys'
				}
				]
			}
			]
		},
		{
			name: 'Lata',
			comment: 'blah blah blah',
			comments: []
		}
		]
	},
	{
		title: 'The cover of George Orwell\'s, "1984," becomes less censored with wear • /r/mildlyinteresting',
		comments: []
	}
	]

	$scope.addCommentDisc = function(disc, cc){
		console.log(disc)
		disc.comments.push({
			name:cc.name,
			comment:cc.comment
		});
		$scope.newComment = {};
		$scope.newChildComment = {};
		$scope.showReplyBox = false;
		cc = {};
		return disc;
	}

}]);

app.directive('comment', function () {
  return {
      restrict: "E",
      replace: true,
      scope: {
          collection: '='
      },
      template: "static/templates/comments.html"
  }
})
