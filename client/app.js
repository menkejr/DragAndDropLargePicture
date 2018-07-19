(function(){
    'use strict';
    var app = angular.module('app', ['dndLists']);  

    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    app.config(['$provide', function ($provide) {
        $provide.decorator('$exceptionHandler',
            ['$delegate', 'logger', extendExceptionHandler]);
    }]);
    
    // Extend the $exceptionHandler service to also display a toast.
    function extendExceptionHandler($delegate, logger) {        
        var logError = logger.getLogFn('app', 'error'); 
        return function (exception, cause) {
            $delegate(exception, cause);
            if (exception.message.length === 0) { return; }

            var errorData = { exception: exception, cause: cause };
            var msg = exception.message;           
           
            logError(msg, errorData, true); 
        };
    }

}());