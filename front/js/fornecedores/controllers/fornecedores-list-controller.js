angular.module('app').controller('FornecedoresListController', function ($scope, $http) {

    $scope.titulo = 'Fornecedores';

    $scope.fornecedores = [];

    $http.get('http://localhost:3000/api/fornecedores')
        .success(function (fornecedores) {
            $scope.fornecedores = fornecedores;
        })
        .catch(function (erro) {
            console.log(erro);
        });

    $scope.remover = function (fornecedor) {
        if (!confirm('Deseja realmente excluir o registro?'))
            return;
        $http.delete('http://localhost:3000/api/fornecedores/' + fornecedor._id)
            .success(function () {
                var posicaoRegistro = $scope.fornecedores.indexOf(fornecedor);
                $scope.fornecedores.splice(posicaoRegistro, 1);
                alert('Registro excluído com sucesso!!!');
            })
            .catch(function (erro) {
                console.log(erro);
            });
    };
});