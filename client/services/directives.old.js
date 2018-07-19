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
                        imagesSelected(e.dataTransfer.files);
                    } else {
                        scope.$apply(function () {
                            scope.vm.log("VIN is required");
                        });
                    }

                    e.stopPropagation();
                    e.preventDefault();

                    function imagesSelected(myFiles) {
                        // for(var i = 0; i < myFiles.length; i++)
                        // {
                        //     id++; 
                        //     //scope.$apply(function(){ 
                        //         scope.vm.dropit(myFiles[i], id);                           
                        //     //});                                                        
                        // }                                                                                                                              

                        // for (var i = 0, f; f = myFiles[i]; i++) {
                        // var imageReader = new FileReader();                      
                        // imageReader.onload = (function(aFile) {
                        //     return function(e) {                                                     

                        //         scope.$apply(function(){  
                        //             id++;                                                                                                
                        //             var picData = {
                        //                 id: id,
                        //                 vin: scope.vm.vin,
                        //                 name: aFile.name,
                        //                 type: aFile.type,
                        //                 size: aFile.size,
                        //                 data: e.target.result
                        //             }
                        //             scope.vm.dropit(picData);                               
                        //         });                                                   
                        //     };
                        // })(f);
                        // imageReader.readAsDataURL(f);
                        // }
                        for (var i = 0; i < myFiles.length; i++) {
                            var reader = new FileReader();
                            reader.onload = function () {
                                var dataURL = reader.result;
                                scope.vm.dropit(dataURL);
                            };
                            reader.readAsDataURL(myFiles[i]);
                        }


                        // for (var i = 0; i < myFiles.length; i++) {
                        //     var imageReader = new FileReader();
                        //     imageReader.onload = function (aFile) {
                        //         return function (e) {
                        //             var picData = {
                        //                 id: id,
                        //                 vin: scope.vm.vin,
                        //                 name: "aFile.name",
                        //                 type: "aFile.type",
                        //                 size: "aFile.size",
                        //                 data: "e.target.result"
                        //             }
                        //         };
                        //     }

                        //     scope.vm.dropit(imageReader.readAsText(myFiles[0]));
                        // }
                    }
                }
            }
        }
    });
})();