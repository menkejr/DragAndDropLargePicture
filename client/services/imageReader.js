(function () {
    'use strict';
    angular.module('app').factory('imageReader', ['$q', imageReader]);
    function imageReader($q) {
        return {
            convertToData: convertToData
        }

        function convertToData(aFile, id,  scope) { //vin, list,
            var vin = scope.vm.vin;
            var deferred = $q.defer();
            var imageReader = new FileReader();
            imageReader.onload = function () {
                var picData = {
                    id: id,
                    vin: vin,
                    name: aFile.name,
                    type: aFile.type,
                    size: aFile.size,
                    data: imageReader.result
                };
                //list.push({id: picData.id, name: picData.name});
                //scope.$apply();
                deferred.resolve(picData);                
            };
            imageReader.onerror = function () {
                deferred.reject(imageReader.error);
            }
            imageReader.readAsDataURL(aFile);

            return deferred.promise;
        }
        // function convertToData(files, fileId, scope){
        //     var currentFileId = fileId;
        //     if(files.length > currentFileId){
        //         var list = scope.vm.list;
        //         var id = list.length;
        //         var imageReader = new FileReader();
        //         imageReader.onload = function(){
        //             id++;
        //             scope.$apply(function(){
        //                 list.push({id: id, name: "Item"});
        //             });                        
        //         }; 
        //         imageReader.readAsDataURL(files[fileId]);

        //         (function timer(){
        //             setTimeout(function () {                    
        //                 if(imageReader.readyState == 2){
        //                     var newFileId = currentFileId + 1;
        //                     //var f = files.splice(0, 1);
        //                     convertToData(files, newFileId, scope);
        //                 }else{
        //                     //var a = 0;
        //                     timer();
        //                 }
        //             }, 100);
        //         }());
                
        //     }
            
        //     //  for (var i = 0, f; f = files[i]; i++) {
        //     //     var imageReader = new FileReader();
        //     //     imageReader.onload = function(){
        //     //         id++;
        //     //         scope.$apply(function(){
        //     //             list.push({id: id, name: i});
        //     //         });
                    
        //     //     }; 
        //     //     imageReader.readAsDataURL(files[i]);                     
              
              
        //     // }
        // }
    }
}());