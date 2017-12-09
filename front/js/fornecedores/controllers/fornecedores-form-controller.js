angular.module('app').controller('FornecedoresFormController', function ($scope, $routeParams, $http) {

    $scope.model = {};
    $scope.mensagem = '';
    $scope.error = false;

    if (!$routeParams.id) {
        $scope.titulo = 'Novo Fornecedor';
    } else {
        $scope.titulo = 'Editando Fornecedor';
        $http.get('http://localhost:3000/api/fornecedores/' + $routeParams.id)
            .success(function (fornecedor) {
                $scope.model = fornecedor;
            })
            .catch(function (erro) {
                console.log(erro);
            });
    }

    $scope.submit = function () {
        if ($scope.model._id) {
            // Editar
            $http.put('http://localhost:3000/api/fornecedores/' + $scope.model._id, $scope.model)
                .success(function () {
                    $scope.mensagem = 'Fornecedor atualizado com sucesso!';
                })
                .catch(function (erro) {
                    console.log(erro);
                    $scope.mensagem = 'Problemas ao atualizar o fornecedor!';
                    $scope.error = true;
                });
        } else {
            // Inserir
            $http.post('http://localhost:3000/api/fornecedores', $scope.model)
                .success(function () {
                    $scope.mensagem = 'Fornecedor inserido com sucesso!';
                })
                .catch(function (erro) {
                    console.log(erro);
                    $scope.mensagem = 'Problemas ao inserir o fornecedor!';
                    $scope.error = true;
                });
        }
    }
});