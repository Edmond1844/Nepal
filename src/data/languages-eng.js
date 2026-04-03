export const languageEng = {
	en: {
		language: "EN",

        //  Header
        navLinks: [
            { to: "/tours", text: "Tours" },
            { to: "/guides", text: "Guides" },
            { to: "/about-us", text: "About us" },
        ],

        // Hero 
        title: 'Mountain Nepal',
        subtitlePrimary: 'Journey to the heights',
        subtitleSecondary: 'Tours for everyone: from high-altitude tea to Everest',

        buttonText: 'Select tour',

        // Section fast pick
        fastPickTitle: 'Fast pick',
        fastPickFilterTitle: 'Filter',
        fastPickFilterButtonRest: 'Reset',
        fastPickSearch: 'Search',
        fastPickLevel: 'Level',
        fastPickDuration: 'Duration',

        fastPickPriceInput: 'Max. price',
        fastPickSortingInput: 'Sorting',
        
        BottonMoreDetails: 'More details',
        
        // Filter botton 
        buttonsFilterToursLevel: [
            {
                id: 1, 
                name: 'Novice',
            },
            {
                id: 2, 
                name: 'Intermediate',
            },
            {
                id: 3, 
                name: 'Pro',
            },
            {
                id: 4,
                name: 'Crazy'
            }
        ],

        buttonsFilterToursDuration: [
            {
                id: 1, 
                name: '1 Day',
            },
            {
                id: 2, 
                name: '2-4 days',
            },
            {
                id: 3, 
                name: '5-8 days',

            },
            {
                id: 4, 
                name: '9+ days',
            },
        ],
    // Tours 
        tours: [
            {
                id: 'Tea-break',
                img: './src/images/tours/Tea-break.png',
                title: 'Tea break at altitude',
                description: 'A comfortable walk with calendars in the Himalayas, lunch and constant Nepalese tea.',
                price: 3500,
                level: 'beginner',
                levelDisplay: 'Newbie',
                daysDisplay: '1 day',
                toursId: [1],
            },
            {
                id: 'Annapurna',
                img: './src/images/tours/View.png',
                title: 'Annapurna Circuit Trek',
                description: 'A lighter version of the classic – 7 days instead of 14, the same types and without the extreme.',
                price: 28000,
                level: 'Average',   
                levelDisplay: 'Average',
                daysDisplay: '7 days',
                toursId: [2],
            },
            {
                id: 'Everest',
                img: './src/images/tours/Everest.png',
                title: 'Everest Base Camp',
                description: 'A journey to the foot of the worlds highest peak. This isn\'t just trekking — it\'s a challenge',
                price: 65000,
                level: 'Pro',   
                levelDisplay: 'Pro',
                daysDisplay: '12 days',
                toursId: [3],
            },
            {
                id: 'Langtang',
                img: './src/images/tours/View.png',
                title: 'Langtang Valley',
                description: 'The first high-altitude trek for beginners. Forests, yaks, silence, and panoramic views of the 7,000-meter peak.',
                price: 18000,
                level: 'beginner',
                levelDisplay: 'Newbie',
                daysDisplay: '1 day',
                toursId: [1],
            }
        ],
	},

}