(function(){    
    'use strict';
    angular.module('app').service('pictureService', ['$http', '$q', 'logger', pictureService]);
    function pictureService($http, $q, logger){
        var getLogFn = logger.getLogFn;
        var logError = getLogFn('pictureService', 'error');
        var logSuccess = getLogFn('pictureService', 'success');

        return {            
            getPicture: getPicture,
            savePicture: savePicture                      
        };

        function getPicture(picture) {   
            var deferred = $q.defer();
            
            $http.get('api/picGet/' + picture.id)
                .then(function(response){                                                                                                 
                    deferred.resolve(response.data);
                    logSuccess('Picture Returned');
                })
                .catch(function (response) {                                                          
                    deferred.reject(response);   
                    logError("Picture Service: " + response.statusText + ' (' + response.status + ')' , response, true);                  
                });                                         
           return deferred.promise;     
        }


        function savePicture(picData) {           
            var deferred = $q.defer();            
           $http.post('api/picSave', picData)
                .then(function(response){                                                                                                                    
                    deferred.resolve(response.data);
                    logSuccess('Picture added');
                })
                .catch(function (response) {                                                                            
                    deferred.reject(response);   
                    logError("Picture Service: " + response.statusText + ' (' + response.status + ')' , response, true);                  
                });                                         
            return deferred.promise;     
        }             
    }
}());