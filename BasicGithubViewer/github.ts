/// <reference path="_app.ts" />
module app {
	'use strict';

	export class Github {
		public static $inject = ['$http']

		getUser(username: String) {
			return this.$http.get("https://api.github.com/users/" + username)
				.then((response) => {
					return response.data;
			})
		}

        getRepos(user: any) {
            return this.$http.get(user.repos_url)
                .then((response) => {
                    return response.data;
            })
        }

        constructor(public $http: ng.IHttpService) { }
    }

    angModule.service("github", Github);
}