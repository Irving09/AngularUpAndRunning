
function ItemService() {
	var items = [
		{id : 1, label : 'Item 0'},
		{id : 2, label : 'Item 1'}
	];

	this.list = function() {
		return items;
	};

	this.add = function(item) {
		items.push(item);
	};
}

//service defines the public API by defining methods (add,list) on its instance
//(using the this keyword).

//Private state for the service is still defined as local variables inside the function definition.
function ItemService2() {
	var items = [
		{id : 1, label : 'Item 0'},
		{id : 2, label : 'Item 1'}
	];

	this.list = function() {
		return items;
	};

	this.add = function(item) {
		items.push(item);
	};
}

var notesApp = angular.module('notesApp', []);

//Using .service() instead of factory for defining AngularJS service
notesApp.service('ItemService', [ItemService]);
//Service definition function is now a Javascript class function
notesApp.service('ItemService2', [ItemService2])

notesApp.controller('MainCtrl', [function() {
	var self = this;
	self.tab = 'first';
	self.open = function(tab) {
		self.tab = tab;
	};
}]);

notesApp.controller('SubCtrl', ['ItemService', 'ItemService2', function(ItemService, ItemService2) {
	var self = this;
	self.list = function() {
		return ItemService.list();
	};
	
	self.add = function() {
		ItemService.add({
            id: self.list().length + 1,
            label: 'Item ' + self.list().length
          });
	};

	self.list2 = function() {
		return ItemService2.list();
	};

	self.add2 = function() {
		ItemService2.add({
            id: self.list2().length + 1,
            label: 'Item ' + self.list2().length
          });
	};
}]);