app.controller('mainController', function ($scope, blogservice, $http) {
    function getblog() {
        $http.get('http://127.0.0.1:8000/api/post/')
            .success(function (data) {
                $scope.blogs = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }

    $scope.createblog = function () {
        blogservice.createBlog($scope.formData).then(function successCallback(response) {
            getblog()

        });
    };
    $scope.deleteblog = function (id) {
        $http.delete('http://127.0.0.1:8000/api/post/' + id)
            .success(function (data) {
                $scope.blogs = data;
                console.log(data);
                getblog()
            })
            .error(function (data) {
                console.log('Error:' + data);
            });
    };
    blogservice.listblog().then(function successCallback(response) {
        $scope.blogs = response.data;

    }, function errorCallback(response) {
        $scope.showToast("ERROR");
    });


});
