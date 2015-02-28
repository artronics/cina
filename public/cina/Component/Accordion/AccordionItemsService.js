angular.module('accordion')
    .factory('AccordionItemsService',[function(){
        var menu =[
            {
                id: 0,
                title: "Contacts",
                state: 'contact',
                link: '/contact',
                subtitles: [
                    {
                        id: 0,
                        title: 'Create',
                        state: 'contact.create',
                        link: '/contact/create',
                        icon:'bar'
                    },
                    {
                        id: 1,
                        title: 'Edit',
                        state: 'contact.edit',
                        link: '/kir',
                        icon: 'bar'
                    },
                    {
                        id: 2,
                        title: 'Delete',
                        state: 'contact.delete',
                        link: 'api/edit',
                        icon: 'bar'
                    }]
            }
        ];

        return menu;
    }]);