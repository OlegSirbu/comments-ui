class ItemsService {
	/*@ngInject*/
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
	}
	getData() {
		var users = [
			{
				username: "john",
				fullName: "John Doe",
				email: "john@example.com"
			},
			{
				username: "michael",
				fullName: "Michael Goodman",
				email: "michael@example.com"
			},
			{
				username: "kathy",
				fullName: "Kathy Curio",
				email: "kathy@example.com"
			}
		];
		var comments = [
			{
				time: 1484199140737,
				username: "john",
				text: "Guys, check this out."
			},
			{
				time: 1485235940737,
				username: "kathy",
				text: "John, I think this needs to be changed."
			},
			{
				time: 1485929960737,
				username: "john",
				text: "OK, I'll make the changes."
			},
			{
				time: 1486100787910,
				username: "kathy",
				text: "Michael, what do you think about this?"
			},
			{
				time: 1486102287910,
				username: "michael",
				text: "Yeah, this is cool."
			}
		];

		var dataFromServer = {
			users: users,
			comments: comments
		};
		return this.$q.resolve(dataFromServer);
	}
}

export default ItemsService;