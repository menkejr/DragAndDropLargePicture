(function(){ 
    angular.module("app").controller("listController", ['$scope', 'logger', 'imageReader', 'pictureService', listController]); 
    function listController($scope, logger, imageReader, pictureService) {     
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

        function dropit(files, filePostion){ 
            var id = vm.list.length + 1;  
            var currentFilePosition = filePostion;              
            imageReader.convertToData(files[currentFilePosition], id, $scope)
                        .then(function(data){
                            pictureService.savePicture(data).then(success);
                        });
                       
            function success(data){
                vm.list.push({id: data.id, name: data.name});
                var newFilePosition = currentFilePosition + 1;
                if(newFilePosition < files.length){
                    dropit(files, newFilePosition);
                }                
            }                                                       
         } 
       
        function submit(list){
            list.forEach(pic => {
                pictureService.getPicture(pic).then(success);
            });
            
            function success(data){ 
                vm.list.splice(0, 1);
                vm.getlist.push({id: data.id, name: data.name});                 
                vm.vin = undefined;                                                                                    
            }
            
        }     
    };
}());

