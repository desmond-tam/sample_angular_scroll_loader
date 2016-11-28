'use strict';
app.controller('pagerController', ['$scope', '$compile', '$interpolate', 'pagerService', function ($scope, $compile, $interpolate, pagerService) {
    $scope.page = 1;
    $("#spinner").show();
    $scope.getFirst = function () {
        pagerService.get({ page: 1 })
        .then(function (data) {
            $("#spinner").hide();
            $scope.list = data;
        });
    }

    $scope.getMore = function (ele) {
        $scope.page++;
        $("#spinner").show();
        pagerService.get({ page: $scope.page })
                .then(function (data) {
                    angular.forEach(data, function (item, key) {
                        $scope.item = item;
                        $("#spinner").hide();
                        var template = $interpolate($("#product-item").html())($scope);
                        var el = angular.element(template);
                        $compile(el)($scope);
                        ele.append(el);
                    });

                }, function (error) {
                });
    }

    $scope.getFirst();
}]);