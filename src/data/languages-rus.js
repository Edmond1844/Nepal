import Gids from "../app/pages/Gids/Gids";

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

        fastPickTourDisplayed: 'Туров показано',
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
                id: 1,
                img: '/images/tours/Tea-break.png',
                title: 'Чай-брейк на высоте',
                description: 'Комфортная прогулка с видами на Гималаи, обед инастоящий непальский чай.',
                price: 3500,
                level: 'beginner',
                levelDisplay: 'Новичок',
                daysDisplay: '2 день',
                daysNumber: 2, 
            },
            {
                id: 2,
                img: '/images/tours/View.png',
                title: 'Трек вокруг Аннапурны',
                description: 'Облегченная версия классики — 7 дней вместо 14, те же виды и без экстрима.',
                price: 28000,
                level: 'Average',   
                levelDisplay: 'Средний',
                daysDisplay: '7 дней',
                daysNumber: 7, 
            },
            {
                id: 3,
                img: '/images/tours/Everest.png',
                title: 'Базовый лагерь Эвереста',
                description: 'Путешествие к подножию высочайшей вершины мира. Это не просто трекинг — это вызов.',
                price: 65000,
                level: 'Pro',   
                levelDisplay: 'Профи',
                daysDisplay: '12 дней',
                daysNumber: 12,
            },
            {
                id: 4,
                img: '/images/tours/View.png',
                title: 'Долина Лангтанг',
                description: 'Первый высотный трек для новичков. Леса, яки, тишина и панорамы на 7000м пики.',
                price: 18000,
                level: 'beginner',
                levelDisplay: 'Новичок',
                daysDisplay: '1 день',
                daysNumber: 1,
            }
        ],

        // Section guides
        titleGuides: 'Наши гиды',
        buttonGides: 'Профиль',

        // Gids 
        gidsTitle: 'Наши гиды',

        backToGuides: 'Назад к гидам',
        writeButton: 'Написать',

        aboutGid: 'О гиде',
        specializationGid: 'Специализация',
        leadTours: 'Ведет туры',

        // Guides
        guides: [
            {
                id: 1,
                url: 'tenzing-norgay',
                img: '/images/guides/Tenzing.avif',
                name: 'Тензинг Норгей',
                motto: 'Медленно — это быстро',

                brief: {
                    experience: '18 лет опыта • 250+ восхождений',
                    levelDisplay: ['Новичок', 'Средний', 'Профи'],
                    level: ['beginner', 'Average', 'Pro'],
                },

                details: {
                    label: 'Опыт',
                    value: '18 лет'
                },

                language: {
                    label: 'Языки',
                    value: 'Русский, Английский, Непали'
                }, 

                favoriteRoute: {
                    label: 'Любимый маршрут',
                    value: 'Базовый лагерь Эвереста'
                },

                about: 'Тензинг начал свой путь в горах ещё подростком, погоняя яков в окрестностях Эвереста. За 18 лет он провёл более 250 успешных восхождений, и ни разу не было серьёзных происшествий. Его секрет прост: "Гора не убежит, а вот здоровье — может". Тензинг знает все тропы, все погодные ловушки и каждый камень на маршруте. Он не гонится за рекордами, а делает так, чтобы каждый участник вернулся с яркими воспоминаниями, а не с травмами. В свободное время учит молодых гидов и помогает в местной школе.',

                favoriteAltitude: {
                    label: 'Любимая высота',
                    value: '5,200 м — идеальный баланс между вызовом и комфортом, где воздух уже разрежен, но голова ещё ясная.'
                },

                specializations: [
                    'Базовый лагерь Эвереста',
                    'Треки для новичков',
                    'Акклиматизация',
                    'Горная фотография',
                    'Обучение гидов'
                ],

                toursTitle: 'Туры с Тензингом',

                toursId: [1,2,3],
            },

            
            {
                id: 2,
                url: 'lhakpa-sherpa',
                img: '/images/guides/Lhakpa.jpg',
                name: 'Лхакпа Шерпа',
                motto: 'Вершины не ждут',

                brief: {
                    experience: '12 лет опыта • Экстремал',
                    levelDisplay: ['Профи', 'Средний',],
                    level: ['Pro', 'Average'],
                },

                details: {
                    label: 'Опыт',
                    value: '12 лет'
                },

                language: {
                    label: 'Языки',
                    value: 'Русский, Английский'
                }, 

                favoriteRoute: {
                    label: 'Любимый маршрут',
                    value: 'Базовый лагерь Эвереста'
                },

                about: 'Лхакпа — из семьи знаменитых шерпов, его дядя участвовал в первом восхождении на Эверест. Впитав любовь к горам с молоком матери, он выбрал самый сложный путь — высотный гид. За его плечами 12 сезонов на Эвересте и 6 восхождений на восьмитысячники. Лхакпа не просто ведёт группу — он читает гору, как открытую книгу. В критической ситуации принимает молниеносные решения, за что его прозвали "Железный шерпа". Несмотря на суровость, умеет поддержать шуткой на самой тяжёлой высоте.',

                favoriteAltitude: {
                    label: 'Любимая высота',
                    value: '7,000 м — зона смерти, где чувствуешь себя по-настоящему живым.'
                },

                specializations: [
                    'Восхождения на восьмитысячники',
                    'Экстремальный трекинг',
                    'Высотное спасение',
                    'Ледовые маршруты',
                    'Работа с кислородом'
                ],

                toursTitle: 'Туры с Лхакпа Шерпа',
                
                toursId: [2,3],
            },        
            {
                id: 3,
                url: 'anura-tamang',
                img: '/images/guides/Anura.jpg',
                name: 'Анура Таманг',
                motto: 'Горы — это люди',

                brief: {
                    experience: '8 лет опыта • Культурный гид',
                    levelDisplay: ['Новичок', 'Средний'],
                    level: ['beginner', 'Average'],
                },

                toursId: [1,2],

                details: {
                    label: 'Опыт',
                    value: '8 лет'
                },

                language: {
                    label: 'Языки',
                    value: 'Русский, Английский'
                }, 

                favoriteRoute: {
                    label: 'Любимый маршрут',
                    value: 'Трек вокруг Аннапурны'
                },

                about: 'Анура — не просто гид, а настоящий посол непальской культуры. Он вырос в деревне Лубхра, где каждый дом — это маленький музей. Анура знает все легенды, связанные с горами, умеет различать 50 видов рододендронов и расскажет, почему молитвенный барабан нужно крутить по часовой стрелке. Его маршруты — это погружение в быт, философию и традиции. Туристы ценят его за душевность, неспешность и умение показать горы через призму местной мудрости. С ним вы не просто прошли трек — вы прожили маленькую жизнь в Гималаях.',

                favoriteAltitude: {
                    label: 'Любимая высота',
                    value: '3,500 м — зона цветущих рододендронов и тёплых деревенских чаев.'
                },

                specializations: [
                    'Этнографические туры',
                    'Треки с культурной программой',
                    'Флора и фауна Гималаев',
                    'Монастыри и молитвенные практики',
                    'Фотография в горах'
                ],
                toursTitle: 'Туры с Aнура Таманг',
                
                toursId: [1,2],
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