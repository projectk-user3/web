export const UserViews = [

    {
        tag: 'user-dashboard',
        name: 'Dashboard',
        icon: 'fa fa-dashboard'
    }, {
        tag: 'user-search',
        name: 'Search',
        icon: 'fa fa-search',
        child_views: [
            {
                tag: 'user-search-by-id',
                name: 'By Id',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'user-search-by-basic',
                name: 'Basic',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'user-search-by-advanced',
                name: 'Advanced',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'user-search-by-astrology',
                name: 'Astrology',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'user-search-by-distance',
                name: 'Distance',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'user-search-by-calendar',
                name: 'Calendar',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'user-search-by-keyword',
                name: 'Keyword',
                icon: 'fa fa-circle-o'
            },
            {
                tag: 'user-search-by-D3Js',
                name: 'D3Js',
                icon: 'fa fa-circle-o'
            }
        ]
    }, {
        tag: 'user-my-account',
        name: 'My Account',
        icon: 'fa fa-user'
    }, {
        tag: 'user-news',
        name: 'News',
        icon: 'fa fa-bullhorn'
    }, {
        tag: 'user-contact-us',
        name: 'Contact Us',
        icon: 'fa fa-address-card'
    }, {
        tag: 'user-about-us',
        name: 'About Us',
        icon: 'fa fa-info-circle'
    }, {
        tag: 'user-logout',
        name: 'Logout',
        icon: 'fa fa-sign-out'
    }
];
