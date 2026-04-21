export const languageRus = {
	ru: {
		language: "RU",

        BottonMoreDetails: 'Подробнее',
        notFound: 'Ничего не найдено',
        
        //  Header
        headerLogo: 'Путешествие к вершинам',
        navLinks: [
            { to: "/tours", text: "Туры" },
            { to: "/gids", text: "Гиды" },
            { to: "/about-us", text: "О нас" },
        ],
        
        // Hero
        title: 'Горный непал',
        subtitlePrimary: 'Путешествие к вершинам',
        subtitleSecondary: 'Туры для всех: от чая на высоте до Эвереста',

        buttonText: 'Выбрать тур',

        // Section fast pick
        fastPickTitle: 'Быстрый выбор',
        fastPickFilterTitle: 'Фильтр',
        fastPickFilterButtonRest: 'Сбросить',
        fastPickSearch: 'Поиск',
        fastPickLevel: 'Уровень',   
        fastPickDuration: 'Длительность',

        fastPickPriceInput: 'Макс. цена',

        fastPickButtonMoreTours: 'Туров показано',
        fastPickOf: 'из', 

        fastPickPriceTour: 'Цены туров от',
        fastPickPpriceTourTo: 'до', 

        fastPickButtonMoreTours: 'Показать ещё туры',

        // Filter buttons
        buttonsFilterToursLevel: [
            {
                id: 1, 
                name: 'Новичок',
                filterType: 'beginner',
            },
            {
                id: 2,
                name: 'Средний',
                filterType: 'Average',
            },
            {
                id: 3,
                name: 'Профи',
                filterType: 'Pro',
            },
            {
                id: 4,
                name: 'Crazy',
                filterType: 'Crazy',
            },
        ],

        buttonsFilterToursDuration: [
            {
                id: 1,
                name: '1 день',
                filterType: '1days',
            },
            {
                id: 2,
                name: '2-4 дня',
                filterType: '2-4days',
            },
            {
                id: 3,
                name: '5-8 дней',
                filterType: '5-8days',
            },
            {
                id: 4,
                name: '9+ дней',
                filterType: '9+days',
            },
        ],
    
        // Tours 
        tours: [
            {
                id: 'Tea-break',
                img: './src/images/tours/Tea-break.png',
                title: 'Чай-брейк на высоте',
                description: 'Комфортная прогулка с видами на Гималаи, обед инастоящий непальский чай.',
                price: 3500,
                level: 'beginner',
                levelDisplay: 'Новичок',
                daysDisplay: '2 день',
                daysNumber: 2, 
                toursId: [1],
            },
            {
                id: 'Annapurna',
                img: './src/images/tours/View.png',
                title: 'Трек вокруг Аннапурны',
                description: 'Облегченная версия классики — 7 дней вместо 14, те же виды и без экстрима.',
                price: 28000,
                level: 'Average',   
                levelDisplay: 'Средний',
                daysDisplay: '7 дней',
                daysNumber: 7, 
                toursId: [2],
            },
            {
                id: 'Everest',
                img: './src/images/tours/Everest.png',
                title: 'Базовый лагерь Эвереста',
                description: 'Путешествие к подножию высочайшей вершины мира. Это не просто трекинг — это вызов.',
                price: 65000,
                level: 'Pro',   
                levelDisplay: 'Профи',
                daysDisplay: '12 дней',
                daysNumber: 12,
                toursId: [3],
            },
            {
                id: 'Langtang',
                img: './src/images/tours/View.png',
                title: 'Долина Лангтанг',
                description: 'Первый высотный трек для новичков. Леса, яки, тишина и панорамы на 7000м пики.',
                price: 18000,
                level: 'beginner',
                levelDisplay: 'Новичок',
                daysDisplay: '1 день',
                daysNumber: 1,
                toursId: [1],
            }
        ],

        // Section guides
        titleGuides: 'Наши гиды',
        buttonGides: 'Профиль',

        // Guides
        guides: [
            {
                id: 1,
                url: 'tenzing-norgay',
                img: 'src/images/guides/Tenzing.avif',
                name: 'Тензинг Норгей',
                motto: 'Медленно — это быстро',
                experience: '18 лет опыта • 250+ восхождений',
                levelDisplay: ['Новичок', 'Средний', 'Профи'],
                level: ['beginner', 'Average', 'Pro'],
                toursId: [1,2,3]
            },
            {
                id: 2,
                url: 'lhakpa-sherpa',
                img: 'src/images/guides/Lhakpa.jpg',
                name: 'Лхакпа Шерпа',
                motto: 'Вершины не ждут',
                experience: '12 лет опыта • Экстремал',
                levelDisplay: ['Профи', 'Средний',],
                level: ['Pro', 'Average'],
                toursId: [3,4]
            },
            {
                id: 3,
                url: 'anura-tamang',
                img: 'src/images/guides/Anura.jpg',
                name: 'Анура Таманг',
                motto: 'Горы — это люди',
                experience: '8 лет опыта • Культурный гид',
                levelDisplay: ['Новичок', 'Средний'],
                level: ['beginner', 'Average'],
                toursId: [1,2]
            },
        ],

        // Section Advantages
        SectionAdvantagesTitle: 'Почему с нами',

        advantages: [
            {
                id: 'advantages-1',
                icon: 'icon-safery',
                title: 'Безопасность',
                description: 'Опытные гиды, медицинский контроль и правило "медленно — это быстро".',
            },
            {
                id: 'advantages-2',
                icon: 'icon-height',
                title: 'Высота',
                description: 'От комфортных 2000м до экстремальных 5500м. Найдем ваш уровень.',
            },
            {
                id: 'advantages-3',
                icon: 'icon-with-heart',
                title: 'С юмором',
                description: 'Горы — это серьезно, но мы умеем шутить даже на перевале.',
            },
            {
                id: 'advantages-4',
                icon: 'icon-tea',
                title: 'Чай масала',
                description: 'Лучший в Гималаях. Варим на каждой остановке. Это важно.',
            }
        ],

        // Footer
        footer: '© 2026 Nepal Peak Station Путешествие к вершинам',
	},

}