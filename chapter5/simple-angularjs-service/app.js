var notesApp = angular.module('notesApp', []);

notesApp.controller('MainCtrl', [function() {
	 var self = this;
	 self.tab = 'first';
	 self.open = function(tab) {
	 	self.tab = tab;
	 };
}]);

//The subCtrl has a function list() which delegates and returns the value of the items in ItemService
notesApp.controller('SubCtrl', ['ItemService', 'ItemService2', function(ItemService, ItemService2) {
	var self = this;

	self.list2 = function() {
		return ItemService2.list();
	};

	self.list = function() {
		return ItemService.list();
	};

	self.add = function() {
		ItemService.add({
			id: self.list().length + 1,
			label: 'Item ' + self.list().length
		});
	};

	self.add2 = function() {
		ItemService2.add({
			id: self.list2().length + 1,
			label: 'Item ' + self.list2().length
		});
	};
}]);

//------------------------------------------------------------//

//The ItemService gets instantiated once when the application loads
//and the SubCtrl is loaded, at which point AngularJS decides it needs an instance
//of the ItemService. After it is created, all other
//controllers that ask for the ItemService will get the exact same
//instance that was returned the very first time.

//Instead of instantiating the list in the controller, we are storing the list in the service
notesApp.factory('ItemService2', [function() {
	var items = [
	 	{ id: 1, label: 'Item 0' },
	 	{ id: 2, label: 'Item 1' }
	];

	return {
		list : function() {
			return items;
		},
		add : function(item) {
			items.push(item);
		}
	};
}]);

//Instead of instantiating the list in the controller, we are storing the list in the service
notesApp.factory('ItemService', [function() {
	var items = [
	 	{ id: 1, label: 'Item 0' },
	 	{ id: 2, label: 'Item 1' }
	];

	return {
		list : function() {
			return items;
		},
		add : function(item) {
			items.push(item);
		}
	};
}]);