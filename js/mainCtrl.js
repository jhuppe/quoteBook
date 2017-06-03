angular.module('myApp').controller('mainCtrl', function ($scope, dataService) {
  console.log('controller')
  $scope.quotes = dataService.getQuotes();

  $scope.deleteMe = function(textToDelete) {
    dataService.removeData(textToDelete)
  }

  $scope.addQuote = function() {
    var newQuote = {
      text:$scope.newQuoteText,
      author:$scope.newQuoteAuthor
    }
    console.log('lkj')
    if(dataService.addData(newQuote)) {
      $scope.newQuoteText='';
      $scope.newQuoteAuthor='';
    }
  }
})
