(function(){ 
    angular.module("app").controller("listController", ['$scope', '$q', 'logger', 'imageReader', 'pictureService', listController]); 
    function listController($scope, $q, logger, imageReader, pictureService) {     
        var getLogFn = logger.getLogFn;
        var log = getLogFn('listController');
        var logError = getLogFn('listController', 'error');
        var logSuccess = getLogFn('listController', 'success');
        
        var vm = this;          
        
        vm.list = []; 
        vm.getlist = [];       
        vm.vin = undefined;
        vm.disableSubmit = false;
        
        vm.dropit=dropit;
        vm.submit=submit;
        vm.log = log;
               

        // function dropit(picData, id){ 
        //     //var id = vm.list.length;
        //     pictureService.savePicture(picData, id, ).then(successSave, failedSave); 
        //     //imageReader.convertToData(picData, id, vm.vin).then(success, failed);  
        //     // for (var i = 0; i < picData.length; i++) {
        //     //     id++;
        //     //     imageReader.convertToData(picData[i], id, vm.vin).then(success, failed);               
        //     //  }                                                        
           
        //     function success(data){ 
        //        vm.list.push({id: data.id, name: data.name});
        //        //pictureService.savePicture(data);//.then(successSave, failedSave);                                            
                                              
        //     }
        //     function failed(error){
                
        //     } 
        //     function successSave(data){                                                              
        //         vm.list.push({id: data.id, name: data.name});                               
        //     }
        //     function failedSave(error){
                
        //     }                                        
        // } 
        function dropit(files, filePostion){ 
            var id = vm.list.length;  
            var currentFilePosition = filePostion;              
            imageReader.convertToData(files[currentFilePosition], id, $scope)
                        .then(function(data){
                            pictureService.savePicture(data).then(success, failed);
                        })
                        .catch(function(error){

                        });
            function success(data){
                vm.list.push({id: data.id, name: data.name});
                var newFilePosition = currentFilePosition + 1;
                if(newFilePosition < files.length){
                    dropit(files, newFilePosition);
                }                
            }
            function failed(error){

            }
                                             
         } 

        // function dropit(picData){                 
        //    var deferred = $q.defer();                                  
        //    pictureService.savePicture(picData).then(success, failed);
        //     function success(data){ 
        //         var a = data; 
        //         deferred.resolve(data);                                           
        //         vm.list.push({id: data.id, name: data.name}); 
        //         logSuccess('Picture added');                              
        //     }
        //     function failed(error){
        //         deferred.reject(error);
        //         logError("Picture Service: " + error.statusText + ' (' + error.status + ')' , error, true);                
        //     }
        //     return deferred.promise;                                        
        // } 
        // function submit(list){
        //     pictureService.getPictures(list).then(success, failed);
        //     function success(data){  
        //         data.forEach(i => {                    
        //             vm.getlist.push({id: i.id, name: i.name});
        //         });
        //         // vm.list = [];  
        //         // vm.vin = undefined;                                                                                    
        //     }
        //     function failed(error){
                
        //     }   
        // } 
        function submit(list){
            list.forEach(pic => {
                pictureService.getPicture(pic).then(success, failed);
            });
            
            function success(data){ 
                vm.list.splice(0, 1);
                vm.getlist.push({id: data.id, name: data.name});                 
                vm.vin = undefined;                                                                                    
            }
            function failed(error){
                
            }   
        }     
    };
}());

