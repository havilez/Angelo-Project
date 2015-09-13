(function() {

    angular.module("Angello").controller('MainCtrl',function(AngelloModel){
        // set view model to controller this ptr
        var vm = this;

        vm.stories = AngelloModel.getStories();

        vm.createStory = function () {
            return AngelloModel.createStory();
        }


    });


}())