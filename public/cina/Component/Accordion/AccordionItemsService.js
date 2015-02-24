angular.module('accordion')
    .factory('AccordionItemsService',[function(){
        var menu =[
            {
                id: 0,
                title: "Contacts",
                subtitles: [
                    {
                        id: 0,
                        title: 'Create',
                        link: 'api/foo',
                        icon:'bar'
                    },
                    {
                        id: 1,
                        title: 'Edit',
                        link: 'api/edit',
                        icon: 'bar'
                    },
                    {
                        id: 2,
                        title: 'Delete',
                        link: 'api/edit',
                        icon: 'bar'
                    }]
            },
            {
                id: 1,
                title: "dovvomi",

                subtitles: [
                    {
                        id: 0,
                        title: 'create',
                        link: 'api/foo',
                        icon:'bar'
                    },
                    {
                        id: 1,
                        title: 'Edit',
                        link: 'api/edit',
                        icon: 'bar'
                    }]
            },{
                id: 1,
                title: "dovvomi",

                subtitles: [
                    {
                        id: 0,
                        title: 'create',
                        link: 'api/foo',
                        icon:'bar'
                    },
                    {
                        id: 1,
                        title: 'Edit',
                        link: 'api/edit',
                        icon: 'bar'
                    }]
            }
        ];

        return menu;
    }]);