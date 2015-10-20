app.factory('todoFact', ['$resource', function ($resource) {
	return $resource('http://jsonplaceholder.typicode.com/posts');
}])