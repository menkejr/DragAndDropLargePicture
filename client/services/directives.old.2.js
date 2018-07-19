(function () {
    'use strict';

    var app = angular.module('app');

    app.directive('ttDropit', function (imageReader) {
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
                        // id++;
                        // var currentFilePosition = filePosition;
                        // imageReader.convertToData(myFiles[currentFilePosition], id, scope).then(convertSucess, convertFail);
                        // function convertSucess(data){                            
                        //     scope.vm.dropit(data)
                        //             .then(function(d){
                        //                 var newFilePosition = currentFilePosition + 1;
                        //                 if(myFiles.length > newFilePosition){                                
                        //                     imagesSelected(myFiles, newFilePosition);
                        //                 }   
                        //             })
                        //             .catch(function(e){

                        //             });
                                                    
                        // }
                        // function convertFail(error){

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
                        // for (var i = 0; i < myFiles.length; i++) {  // scope.vm.vin, scope.vm.list,
                        //     id++;                           
                        //     imageReader.convertToData(myFiles[i], id, scope).then(convertSucess, convertFail);
                        //     function convertSucess(data){
                        //         var d = data;
                                
                               
                        //             scope.vm.dropit(data); 
                                                                                                                                                                                          
                        //     }
                        //     function convertFail(error){
                        //         var c = error;
                        //     }
                        //     //scope.$apply();

                        //     // var imageReader = new FileReader();
                        //     // imageReader.onload = function () {

                        //     //     var dataURL = imageReader.result;
                        //     //     scope.vm.dropit(dataURL);
                        //     // };
                        //     // imageReader.readAsDataURL(myFiles[i]);
                        // }

                        //imageReader.convertToData(myFiles, 0, scope);//[i], id, scope.vm.vin, scope.vm.list, scope);
                        // for (var i = 0; i < myFiles.length; i++) {
                        //     (function (i) {
                                 
                                
                        //         // setTimeout(function () {
                        //         //     id++;
                        //         //     imageReader.convertToData(myFiles[i], id, scope.vm.vin, scope.vm.list, scope);
                        //         // }, 0);
                        //     })(i);
                        // };
                    }
                }
            }
        }
    });
})();