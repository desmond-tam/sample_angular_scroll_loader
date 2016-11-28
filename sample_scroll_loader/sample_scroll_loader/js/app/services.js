'use strict';
app.service("pagerService", ['$http', '$log', '$q', function ($http, $log, $q) {
    return {
        get: function (model) {
            var deferred = $q.defer();
            $http({
                url: '/api/values/get/',
                method: 'GET',
                params: {
                    page: model.page
                }
            })
            .success(function (response, status, header, config) {
                deferred.resolve(response);
            })
            .error(function (response, status, header, config) {
                deferred.reject({
                    msg: response,
                    code: status
                })
            });
            return deferred.promise;
        }
    }
}]);