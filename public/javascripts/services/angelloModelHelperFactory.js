(function () {

    angular.module('Angello').factory('AngelloHelper', function () {

        var buildIndex = function (source, property) {

            var tempArray= [ ];

            // replace this code with lodash
            for (var i= 0, len = source.length; i <  len; i++) {
                tempArray[ source[i][property] ] = source[i];
            }

            return tempArray;
        };

        return {
            buildIndex: buildIndex
        };



        });


}())