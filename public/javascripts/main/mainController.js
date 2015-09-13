(function() {

    angular.module("Angello").controller('MainCtrl',function(){
        // set view model to controller this ptr
        var vm = this;

        vm.stories = [
            {
                title: 'First story',
                description: 'Our first story.',
                criteria: 'Criteria pending.' ,
                status: 'To Do',
                type:  'Feature',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            },
            {
                title: 'Second story',
                description: 'Do something.',
                criteria: 'Criteria pending.' ,
                status: 'Back Log',
                type:  'Feature',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            },
            {
                title: 'Another story',
                description: 'Just one more.',
                criteria: 'Criteria pending.' ,
                status: 'Code Review',
                type:  'Enhancement',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            }

        ]

        vm.createStory = function() {
            vm.stories.push({
                title:'New Story',
                description: 'Description pending.',
                criteria: 'Criteria pending.',
                status: 'Back Log',
                type: 'Feature',
                reporter: 'Pending',
                assignee: 'Pending'
            })
        }


    });


}())