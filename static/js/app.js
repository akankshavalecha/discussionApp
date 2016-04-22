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
	
	$scope.reinit = function(){
		$scope.newComment = {};
		$scope.level = 1;
		$scope.newChildComment = {};
		$scope.updateInput = false;
		$scope.showReplyBox = false;
	}
	$scope.reinit();
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
				name: 'Lavish',
				comment: 'I have no problem using female as in "female writer" I just think it\'s a little annoying when I see people use men and females in the same sentence, instead of men and women.',
				comments: [
				{
					name: 'Ramajun',
					comment: 'Feminist, checking in. Feminism\'s not a hive mind, so I\'m speaking for myself when I say: you\'re right about why "female" is sometimes cringe-worthy. When people use it as a weird, dehumanizing substitute for "woman" or just "person". Like, "The thing about females is..." or "You can\'t let a female..." But that\'s not this. OP could have said "female author", would have sounded fine. FWIW'
				}
				]
			}
			]
		},
		{
			name: 'Lata',
			comment: 'Saying men & females or women & males is like saying dogs & felines or cats & lines.',
			comments: []
		}
		]
	},
	{
		title: 'The cover of George Orwell\'s, "1984," becomes less censored with wear • /r/mildlyinteresting',
		comments: [
		{
			name: 'Krishna',
			comment: 'We have noticed your thread\'s title mentioned a popular book title in /r/books. Please consider visiting some of these recent threads! You might also enjoy the subreddit /r/1984! I am a bot, and this action was performed automatically. Please contact the moderators of this subreddit if you have any questions or concerns.',
			comments: []
		}
		]
	}
	]
	$scope.saved = angular.fromJson(localStorage.getItem('discussionList'));
	$scope.discussionList = (localStorage.getItem('discussionList'))!==null ? $scope.saved : $scope.discussionList;
	localStorage.setItem('discussionList', angular.toJson($scope.discussionList));

	$scope.addCommentDisc = function(disc, cc){
		disc.comments.push({
			name:cc.name,
			comment:cc.comment
		});
		$scope.reinit();
		localStorage.setItem('discussionList', angular.toJson($scope.discussionList));
		return disc;
	}

	$scope.updateDiscussionList = function(disc){
		$scope.reinit();
		localStorage.setItem('discussionList', angular.toJson($scope.discussionList));
	}

}]);

app.filter('reverse', function() {
	return function(items) {
		return items.slice().reverse();
	};
});