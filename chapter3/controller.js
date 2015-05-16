var notesApp = angular.module('notesApp', []);

notesApp.controller('ListCtrl', [function() {
	var that = this;
	that.items = [
		{id: 1, label: 'First', done: true},
		{id: 2, label: 'Second', done: false}
	];

	that.getDoneClass = function(item) {
		return {
			finished : item.done,
			unfinished : !item.done
		};
	}
}]);