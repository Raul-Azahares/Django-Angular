app.factory("blogservice", function($http){

    var service = {};


    service.listblog = function(){
        return $http({
            method: 'GET',
            isArray: true,
            url: 'http://127.0.0.1:8000/api/post/'
        });
    };
        service.createBlog = function(data){
        return $http({
            method: 'POST',
            isArray: true,
            url: 'http://127.0.0.1:8000/api/post/',
            data:data
        });
    };

  return service;
});