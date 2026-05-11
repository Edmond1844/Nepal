export const languageEng = {
	en: {
		language: "EN",

        BottonMoreDetails: 'More details',
        notFound: 'Not found',

        //  Header
        navLinks: [
            { to: "/tours", text: "Tours" },
            { to: "/gids", text: "Guides" },
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
        
        fastPickTourDisplayed: 'Turov shown',
        fastPickOf: 'of', 

        fastPickPriceTour: 'Tour prices from',
        fastPickPpriceTourTo: 'to', 

        fastPickButtonMoreTours: 'Show more tours',

         // Section Advantages
        SectionAdvantagesTitle: 'Why choose us',
        
        // Filter botton 
        buttonsFilterToursLevel: [
            {
                id: 1, 
                name: 'Novice',
                filterType: 'beginner',
            },
            {
                id: 2, 
                name: 'Intermediate',
                filterType: 'Average',
            },
            {
                id: 3, 
                name: 'Pro',
                filterType: 'Pro',
            },
            {
                id: 4,
                name: 'Crazy',
                filterType: 'Crazy',
            }
        ],

        buttonsFilterToursDuration: [
            {
                id: 1, 
                name: '1 Day',
                filterType: '1days',
            },
            {
                id: 2, 
                name: '2-4 days',
                filterType: '2-4days',
            },
            {
                id: 3, 
                name: '5-8 days',
                filterType: '5-8days',
            },
            {
                id: 4, 
                name: '9+ days',
                filterType: '9+days',
            },
        ],
    // Tours 
        tours: [
            {
                id: 1,
                img: '/images/tours/Tea-break.png',
                title: 'Tea break at altitude',
                description: 'A comfortable walk with calendars in the Himalayas, lunch and constant Nepalese tea.',
                price: 3500,
                level: 'beginner',
                levelDisplay: 'Newbie',
                daysDisplay: '1 day',
                daysNumber: 2,
            },
            {
                id: 2,
                img: '/images/tours/View.png',
                title: 'Annapurna Circuit Trek',
                description: 'A lighter version of the classic – 7 days instead of 14, the same types and without the extreme.',
                price: 28000,
                level: 'Average',   
                levelDisplay: 'Average',
                daysDisplay: '7 days',
                daysNumber: 7,
            },
            {
                id: 3,
                img: '/images/tours/Everest.png',
                title: 'Everest Base Camp',
                description: 'A journey to the foot of the worlds highest peak. This isn\'t just trekking — it\'s a challenge',
                price: 65000,
                level: 'Pro',   
                levelDisplay: 'Pro',
                daysDisplay: '12 days',
                daysNumber: 12,
            },
            {
                id: 'Langtang',
                img: '/images/tours/View.png',
                title: 'Langtang Valley',
                description: 'The first high-altitude trek for beginners. Forests, yaks, silence, and panoramic views of the 7,000-meter peak.',
                price: 18000,
                level: 'beginner',
                levelDisplay: 'Newbie',
                daysDisplay: '1 day',
                daysNumber: 1,
                // toursId: [1],
            }, 
        ],

        // Section guides
        titleGuides: 'Our guides',
        buttonGides: 'Profile',

        // Gids 
        gidsTitle: 'Our guides',
        backToGuides: 'Back to guides',
        writeButton: 'Write',

        aboutGid: 'About guide',
        specializationGid: 'Specialization',
        leadTours: 'Lead tours',

         // Guides
        guides: [
            {
                id: 1,
                url: 'tenzing-norgay',
                img: '/images/guides/Tenzing.avif',
                name: 'Tenzing Norgay',
                motto: 'Slow is fast',

                brief: {
                    experience: '18 years of experience • 250+ ascents',
                    levelDisplay: ['Beginner', 'Average', 'Pro'],
                    level: ['beginner', 'Average', 'Pro'],
                },

                
                details: {
                    label: 'Experience',
                    value: '18 years'
                },

                language: {
                    label: 'Language',
                    value: 'English'
                },
                
                favoriteRoute: {
                    label: 'Favorite route',
                    value: 'Everest Base Camp'
                },

                about: '18 years of experience, 250+ ascents. Knows every stone on Everest. Tenzing is a guide trusted with life. Calm, imperturbable, with almost Zen-Buddhist serenity. His phrase "Slow is fast" has become a mantra for many beginner trekkers. He knows when to stop, when to continue, and how to make every member of the group feel safe.',
                                
                favoriteAltitude: {
                    label: 'Favorite altitude',
                    value: '5,200 m — where the air still allows you to breathe, but you already feel like you are on top of the world.'
                },

                specializations: [
                    'Everest Base Camp',
                    'Beginner Treks',
                    'Acclimatization',
                    'Altitude Medicine',
                    'Mountain Photography'
                ],

                toursTitle: 'Tours with Tenzing',

                toursId: [1,2,3],

            },
            {
                id: 2,
                url: 'lhakpa-sherpa',
                img: '/images/guides/Lhakpa.jpg',
                name: 'Lhakpa Sherpa',
                motto: 'The peaks don\'t wait',

                brief: {
                    experience: '12 years of experience • Extreme',
                    levelDisplay: ['Pro', 'Average',],
                    level: ['Pro', 'Average'],
                },

                toursId: [3,4],

                details: {
                    label: 'Experience',
                    value: '12 years'
                },

                language: {
                    label: 'Languages',
                    value: 'Russian, English'
                }, 

                favoriteRoute: {
                    label: 'Favorite route',
                    value: 'Everest Base Camp'
                }
            },        
            {
                id: 3,
                url: 'anura-tamang',
                img: '/images/guides/Anura.jpg',
                name: 'Anura Tamang',
                motto: 'Mountains are people',

                brief: {
                    experience: '8 years of experience • Cultural guide',
                    levelDisplay: ['Beginner', 'Average'],
                    level: ['beginner', 'Average'],
                },

                toursId: [1,2], 

                details: {
                    label: 'Experience',
                    value: '8 years'
                },

                language: {
                    label: 'Languages',
                    value: 'Russian, English'
                }, 

                favoriteRoute: {
                    label: 'Favorite route',
                    value: 'Annapurna Circuit Trek'
                }

            },
        ],

        // Section Advantages
        SectionAdvantagesTitle: 'Why choose us',

        advantages: [
            {
                id: 'advantages-1',
                icon: 'icon-safery',
                title: 'Safety',
                description: 'Experienced guidance, medical supervision and the "slow is fast" rule.',
            },
            {
                id: 'advantages-2',
                icon: 'icon-height',
                title: 'Height',
                description: 'From a comfortable 2000m to an extreme 5500m. We\'ll find your level.',
            },
            {
                id: 'advantages-3',
                icon: 'icon-with-heart',
                title: 'With humor',
                description: 'Mountains are serious things, but we can joke even on the pass.',
            },
            {
                id: 'advantages-4',
                icon: 'icon-tea',
                title: 'Masala tea',
                description: 'The best in the Himalayas. We brew it at every stop. That\'s important.',
            }
        ],

        // Footer
        footer: '© 2026 Nepal Peak Station Journey to the Peaks',
	},

}