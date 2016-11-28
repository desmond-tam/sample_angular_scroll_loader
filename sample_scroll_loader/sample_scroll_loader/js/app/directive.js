'use strict';
app.directive("pager", ['$compile', '$window', 'pagerService', function ($compile, $window, pagerService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, cntrl) {
            angular.element($window).bind("scroll", function () {
                if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                    scope.getMore(element);
                }
            })

        }
    }
}]);