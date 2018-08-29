export const UserViews = [

    {
        tag: 'dashboard',
        name: 'Dashboard',
        icon: 'fa fa-dashboard',
        show: false
    }, {
        tag: 'search',
        name: 'Search',
        icon: 'fa fa-search',
        show: false,
        child_views: [
            {
                tag: 'search-by-id',
                name: 'By Id',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'search-by-basic',
                name: 'Basic',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'search-by-advanced',
                name: 'Advanced',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'search-by-astrology',
                name: 'Astrology',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'search-by-distance',
                name: 'Distance',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'search-by-calendar',
                name: 'Calendar',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'search-by-keyword',
                name: 'Keyword',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'search-by-D3Js',
                name: 'D3Js',
                icon: 'fa fa-circle-o'
            }
        ]
    }, {
        tag: 'myprofile',
        name: 'My Profile',
        icon: 'fa fa-user',
        show: false
    }, {
        tag: 'news',
        name: 'News',
        icon: 'fa fa-bullhorn',
        show: false
    }
];
