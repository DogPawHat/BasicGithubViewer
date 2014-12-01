/// <reference path="_app.ts" />
module app {
    export class GithubCollaborators {
        public static $inject = ['$http'];

        getRepo(username: string, reponame: string) {
            return this.$http.get("https://api.github.com/repos/" + username +'/' + reponame)
                .then((response) => {
                    return response.data;
                })
            }

        getRepoCollabs(repo: any) {
            return this.$http.get("https://api.github.com/repos/" + repo.full_name + "/collaborators")
                .then((response) => {
                    return response.data;
                })
            }

        constructor(public $http: ng.IHttpService) { }
    
    }

    angModule.service("githubCollabs", GithubCollaborators);
} 