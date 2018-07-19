(function () {
    'use strict';

    var app = angular.module('app');

    app.directive('ttDropit', function () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var dropItEl = element[0];
            dropItEl.ondrop = function (e) {
                if (e.dataTransfer.files.length > 0) {
                    var id = scope.vm.list.length;
                    if (scope.vm.vin) {
                        imagesSelected(e.dataTransfer.files, 0);
                    } else {
                        scope.$apply(function () {
                            scope.vm.log("VIN is required");
                        });
                    }

                    e.stopPropagation();
                    e.preventDefault();

                    function imagesSelected(myFiles, filePosition) {
                        scope.vm.dropit(myFiles, filePosition);                       
                    }
                }
            }
        }
    });
})();