/**
 * Created by semianchuk on 28.04.16.
 */
var data={

}
data.type =  function(data){
    var type=''
    switch (data){
        case 'chast':
            type = 'Частный сектор'
            break;
        case 'pansionat':
            type = 'Пансионат'
            break;
        case 'hotel':
            type = 'Гостиница'
            break;
        case 'sanatoriy':
            type = 'Санаторий'
            break;
        case 'otel':
            type = 'Отель'
            break;
        case 'children':
            type = 'Детский лагерь'
            break;
        case 'basi':
            type = 'База отдыха'
            break;
        case 'room':
            type = 'Квартира'
            break;
        default :
            type = 'Частный сектор'
    }
    return type;
};
data.socialButton =[
    {
        link: 'https://vk.com/gport',
        url: '/site-images/soc-icon/vk.png'
    },
    {
        link: 'https://www.youtube.com/channel/UCRVZ2jPsor1wUEMTxlSg1Kw',
        url: '/site-images/soc-icon/youtube.png'
    },
    {
        link: 'https://www.instagram.com/gportvlog/',
        url: '/site-images/soc-icon/instagram.png'
    },
    {
        link: 'https://twitter.com/GportUkraine',
        url: '/site-images/soc-icon/twitter.png'
    },
    {
        link: 'https://www.takeit.to/gport/',
        url: '/site-images/soc-icon/tito.png'
    }
]

data.filterData ={
    type: [
            'chast',
            'pansionat',
            'hotel',
            'sanatoriy',
            'otel',
            'children',
            'basi',
            'room',
            'children'
        ]
    ,
    distance: [
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
            '1000',
            '1100',
            '1200',
            '1300',
            '1400'
        ]
    ,
    toilet:  [
            true,
            false
        ],
     tv:  [
            true,
            false
        ],
    refrigeter:  [
            true,
            false
        ],
    conditioner:  [
            true,
            false
        ],
    wifi: [
            true,
            false
        ],
    eat:  [
            true,
            false
        ],
    children:  [
            true,
            false
        ],
    swiming:  [
            true,
            false
        ]
    }


/*
{type: 'chast', distance: '100', toilet: true,  tv: true, refrigeter: true, conditioner: true, wifi: true, eat: true, children: true, swiming: true, parking: true},
{type: 'pansionat', distance: '200', toilet: false,  tv: false, refrigeter: false, conditioner: false, wifi: false, eat: false, children: false, swiming: false, parking: false},
{type: 'hotel', distance: '300'},
{type: 'sanatoriy', distance: '400'},
{type: 'otel', distance: '500'},
{type: 'children', distance: '600'},
{type: 'basi', distance: '700'},
{type: 'room', distance: '800'},
{type: 'children', distance: '900'}
*/


data.endPoint = [
    {
        name: "bazarNew",
        label: "Рынок паритет",
        lng: 32.2871071100235,
        lat: 46.12479026908993,
        url: 'bazar-new.jpg',
        icon: 'bazar.png',
        description: 'Рынок нвходится на ул Школьная возле автоваказла, р-н Золотая Нива. Вы сможете преобрести свежие ' +
            'домашнее мясо, фрукты, овощи. А также купить все продовольственные товары, преобрести себе сувениры и ' +
            'одежду.'
    },
    {
        name: "stambul",
        label: "Стамбул",
        lng: 32.29300931096077,
        lat: 46.11728678470934,
        url: 'stambul.jpeg',
        icon: 'club.png',
        description: 'Один из самых известных ночных клубов Железного порта это конечноже клуб Стамбул. В вашем ' +
            'расположении 3 этажа, хорошая музыка, вкусная кухня и море хорошего настроения. А днем напротив ' +
            'него на пляжу вас будут развлекать аниматоры стамбула.'
    },
    {
        name: "tarantino",
        label: "Тарантино",
        lng: 32.29033246636391,
        lat: 46.11795425696045,
        url: 'tarantino.jpg',
        icon: 'club.png',
        description: 'Новый сезон! Новое #лето2016! Ждет вас в Beach Club TARANTINO!'+
        ' Готовьтесь, будет интересно. Самые яркие и незабываемые летние вечеринки. Популярные артисты. Лучшая музыка. Неповторимая атмосфера. Будем рады каждому. #TARANTINO2016 #TARANTINOKS'
    },
    {
        name: "tsunami",
        label: "Цунами",
        lng: 32.29427397251129,
        lat: 46.11696234193457,
        url: 'tsunami.jpg',
        icon: 'club.png',
        description: 'Цунами - сумасшедшие вечеринки. Цунами - лучшие люди из разных городов Украины. Цунами - море позитива, драйва и удовольствий.'
    },
    {
        name: "briz",
        label: "Бриз",
        lng: 32.291562259197235,
        lat: 46.11757125158769,
        url: 'briz.jpg',
        icon: 'club.png',
        description: 'Beach Club BRIZ расположен в самом центре Железного Порта, на берегу Черного моря.  Лучшее место для людей, ' +
            ' которые любят морской отдых, приятное общение, хорошую музыку и яркие шоу-программы.'+
            'Заказ столиков по тел : +38-095-489-11-90 '
    },
    {
        name: "attika",
        label: "Аттика",
        lng: 32.290087044239044,
        lat: 46.11794681998827,
        url: 'attika.jpg',
        icon: 'club.png',
        description: 'Мы – это компания людей, которые смотрят на сферу обслуживания и развлечения под несколько необычным для нашей страны углом. Мы стремимся к развитию бизнеса и человека.'
    },
    {
        name: "yamayka",
        label: "Ямайка",
        lng: 32.30121821165085,
        lat: 46.115532539842086,
        url: 'yamayka.jpg',
        icon: 'club.png',
        description: 'Здесь мы хотим видеть истинных ценителей Ямайских развлечений и людей, которые имеют прямое отношение к организации досуга клаберов.'
    },
    {
        name: "moxito",
        label: "Мохито",
        lng: 32.291918992996216,
        lat: 46.11752848868671,
        url: 'moxito.jpg',
        icon: 'club.png',
        description: 'Beach club Мохито - это незабываемые, яркие и полны отличного настроения вечеринки каждый день. Только тут можно услышать самые яркие музыкальные хиты лета от DJ\'s, увидеть самых горячих go-go и веселиться с под приятный голос МС.'+
        'Только тут вас ожидают самые запоминающиеся пенные вечеринки.'+
        'Не упустите свой шанс, провести лучшее лето с Beach club Мохито. Посвятив хотябы час времени, ваш отдых, проведенный в Beach club Мохито останется надолго в памяти ярким и незабываемым.'
    },
    {
        name: "chigabiga",
        label: "Чига-Бига",
        lng: 32.2895472496748,
        lat: 46.11795193290676,
        url: 'chigabiga.jpg',
        icon: 'club.png',
        description: 'Чига-Бига" Фестиваль уличной еды и музыки. '+
        'Приезжайте, берите с собой своих сорванцов и тихонь, неженок и ботаников, маленьких разбойников и маминых дочек. Для всех найдем интересное и вкусное Ждем всех!'
    },
    {
        name: "solomhead",
        label: "Соломенная шляпка",
        lng: 32.2878098487854,
        lat: 46.118311230444895,
        url: 'solomhead.jpg',
        icon: 'club.png',
        description: 'Лучшая кухня на побережье,кулинарные изыски на любой вкус и кошелёк,высокопрофессиональные повара,любезные и квалифицированные официанты,богатый выбор лучших блюд европейской кухни.Плюс всевозможная домашняя выпечка. А вечером для Вас вокальный шоу-дуэт "BiG BanG" Лучшая музыка от 70х и до наших дней, исполнение песен более чем на шести языках.Игры,конкурсы,тематические вечера.призы и дискотека-подарят Вам отличное настроение!'
    },
    {
        name: "tropikanka",
        label: "Тропиканка",
        lng: 32.284856736660004,
        lat: 46.11901959285532,
        url: 'tropikanka.jpg',
        icon: 'club.png',
        description: 'Развлекательный комплекс Тропиканка предлагает множество развлечений круглосуточно - 3d кинотеатр, ресторан, диско-бар, ночной клуб - и много много чего интересного для детей и взрослых.'
    },
    {
        name: "bazarOld",
        label: "Старый рынок",
        lng: 32.30046719312668,
        lat: 46.11692050819993,
        url: 'bazar-old.jpg',
        icon: 'bazar.png',
        description: 'Рынок нвходится на ул Морська с левой стороны Железного порта. Вы сможете преобрести свежие ' +
            'домашнее мясо, фрукты, овощи. А также купить все продовольственные товары, преобрести себе сувениры и ' +
            'одежду.'
    },
    {
        name: "children",
        label: "Детская площадка",
        lng: 32.304906249046326,
        lat: 46.1207486282121,
        url: 'children.jpg',
        icon: 'green-icon.png',
        description: 'Это площадка радует детей любого возраста, доставляет удовольствия. Добро пожаловать во вселенную ярких эмоций детей.'
    },
    {
        name: "sovet",
        label: "Сельський совет",
        lng: 32.29328691959381,
        lat: 46.12309296475996,
        url: 'selsovet.jpg',
        icon: 'green-icon.png',
        description: 'Адрес: Школьная 43, село Железный порт, Голопристанский район, Херсонская область.'
    },
    {
        name: "policia",
        label: "Милиция",
        lng: 32.29328691959381,
        lat: 46.12309296475996,
        url: 'selsovet.jpg',
        icon: 'green-icon.png',
        description: 'Полиция железного порта'
    },
    {
        name: "medicina",
        label: "Мед пункт",
        lng: 32.29328691959381,
        lat: 46.12309296475996,
        url: 'medicin.jpg',
        icon: 'medicin.png',
        description: 'Если вам нужно получить медицинскую помощь то вам следует обратится в мед пункт, который находится ' +
            'по улице школьной в здании сельського совета.'
    },
    {
        name: "medicin3",
        label: "Аптека №3",
        lng: 32.293001264333725,
        lat: 46.1228289762,
        url: 'medicin.jpg',
        icon: 'medicin.png',
        description: 'Аптека №3'
    },
    {
        name: "medicin1",
        label: "Аптека №1",
        lng: 32.28679597377777,
        lat: 46.124455645868764,
        url: 'medicin.jpg',
        icon: 'medicin.png',
        description: 'Аптека №1'
    },
    {
        name: "bus1",
        label: "Цент. Автостанция №1",
        lng: 32.28527247905731,
        lat: 46.12484603942919,
        url: 'bus.png',
        icon: 'bus.png',
        description: 'Центральная Автостанция №1'
    },
    {
        name: "bus2",
        label: "Автостанция №2",
        lng: 32.28765159845352,
        lat: 46.1241563422655,
        url: 'bus.png',
        description: 'Автостанция №2'
    },
    {
        name: "bus3",
        label: "Автостанция №3",
        lng: 32.29310318827629,
        lat: 46.123228676668,
        url: 'bus.png',
        icon: 'bus.png',
        description: 'Автостанция №3'
    },
    {
        name: "bus4",
        label: "Автостанция №4",
        lng: 32.291473746299744,
        lat: 46.1189600982000,
        url: 'bus.png',
        icon: 'bus.png',
        description: 'Автостанция №4'
    },
    {
        name: "bus5",
        label: "Автостанция №5",
        lng: 32.29784667491913,
        lat: 46.12254081834422,
        url: 'bus.png',
        icon: 'bus.png',
        description: 'Автостанция №5'
    },
    {
        name: "bus6",
        label: "Автостанция №6",
        lng: 32.29784667491913,
        lat: 46.12254081834422,
        url: 'bus.png',
        icon: 'bus.png',
        description: 'Автостанция №6'
    },
    {
        name: "bus7",
        label: "Автостанция №7",
        lng: 32.296414375305176,
        lat: 46.1181160108,
        url: 'bus.png',
        description: 'Автостанция №7'
    },
    {
        name: "bus8",
        label: "Автостанция №8",
        lng: 32.29680061340332,
        lat: 46.118532478474,
        url: 'bus.png',
        icon: 'bus.png',
        description: 'Автостанция №8'
    },
    {
        name: "bus9",
        label: "Автостанция №9",
        lng: 32.302175760269165,
        lat: 46.118086263049705,
        url: 'bus.png',
        description: 'Автостанция №9'
    },
    {
        name: "atm1",
        label: "Банкомат №1",
        lng: 32.30254992842674,
        lat: 46.11941839130809,
        url: 'atm.jpg',
        icon: 'atm.png',
        description: 'Банкомат №1'
    },
    {
        name: "atm2",
        label: "Банкомат №2",
        lng: 32.29308307170868,
        lat: 46.12321008601553,
        url: 'atm.jpg',
        icon: 'atm.png',
        description: 'Банкомат №2'
    },
    {
        name: "atm3",
        label: "Банкомат №3",
        lng: 32.28768244385719,
        lat: 46.11851760468566,
        url: 'atm.jpg',
        icon: 'atm.png',
        description: 'Банкомат №3'
    },
    {
        name: "luna",
        label: "Луна парк №1",
        lng: 32.283432483673096,
        lat: 46.11935238989867,
        url: 'luna.jpg',
        icon: 'enterteiment.png',
        description: 'Одно из наиболее популярных мест летнего отдыха в Железном Порту – заезжий Лунапарк, ежегодно размещающийся неподалеку от центрального базара. '
    },
    {
        name: "luna2",
        label: "Луна парк №2",
        lng:32.301918268203735,
        lat: 46.11615262111802,
        url: 'luna.jpg',
        icon: 'enterteiment.png',
        description: 'Одно из наиболее популярных мест летнего отдыха в Железном Порту – заезжий Лунапарк, ежегодно размещающийся неподалеку от старого базара' +
            ' с левой стороны железного порта. '
    },
    {
        name: "aquapark",
        label: "Аква парк",
        lng: 32.28700250387192,
        lat: 46.11836514811394,
        url: 'aquapark.jpg',
        icon: 'enterteiment.png',
        description: 'Развлечения в поселке Железный Порт. Аквапарк '+
        'В Аквапарке Вас ждет множество различных горок на любой вкус и для разного возраста.' +
            ' с левой стороны железного порта. '
    },
    {
        name: "circle",
        label: "Колесо обозрение",
        lng: 32.28623002767563,
        lat: 46.11874442953607,
        url: 'circle.png',
        icon: 'enterteiment.png',
        description: 'Хотите увидить всю красоту железного порта тогда вам нужно прокатится на колесе обозрения. ' +
            'От туда вы сможете увидить всю красоту моря, природы.'
    },
    {
        name: "church",
        label: "Церковь",
        lng: 32.30024188756943,
        lat: 46.12330489827817,
        url: 'church.jpg',
        icon: 'church.png',
        description: '(Железный Порт это курортный поселек на берегу Черного моря. За лето его посещает очень много отдыхаюших.)'+
            'Раньше в Железном Порту храма никогда не было. Желающие посетить службу божью ездили в соседние сёла: Чулаковку, Бехтеры, Круглоозёрку.'+
            'В 1997 году образовалась община желающая иметь храм в своём селе, собрав подписи они подали их на регистрацию, и в этом же году под председательством Отца Петра (Коваль) было проведено собрание на котором определили приходу быть в честь Преподобного Сергия Радонежского, и выбрали старосту Вожжову М. А. и казначеем Никифорову Н.П.'+
            'В 1998 году община обратилась к директору санатория «Золотая Нива» о выделении помещения для проведения богослужений, директор Огиенко И. И. пошёл на встречу и выделил помещение.'+
            'В этом же году община обратилась с просьбой к Преосвященнейшему владыке Иову о назначении священника в село.'+
            'Весной Великим постом по благословению Владыки был прислан молодой священник иерей Василий Касянец.'+
            'Первая служба состоялась в оборудованном под храм помещении в Вербное воскресение.'+
            'Так началась литургическая жизнь прихода.'+
            'В 1999 году была выделена земля под строительство храма в центре села.'+
            'В 2000 году Высокопреосвященнийшим Архиепископом Ионафаном был заложен первый камень для строительства нового храма.'+
            'В 2001 году вырыли котлован и залита подушка под новый храм. Но испытывая материальные трудности и понимая что строительство большого храма может занять много времени было принято решение построить малый (временный храм) на территории участка.'+
            'В 2002 году перешли служить в временный храм без внутренней отделки со временем оканчивая строительные работы.'+
            'В 2008 году, на 1020-летие крещения Руси и 10-летие основания общины наш приход посетил Высокопреосвященный Иоанн Архиепископ Херсонский и Таврический.'+
            'В 2009 году началось строительство большого храма.'+
            '06-02-2009 — начало строительства цокольного этажа (нижний-зимний храм)'+
            '18-03-2009 — закончена коробка цокольного этажа'+
            '18-04-2009 — перекрытие цокольного этажа'+
            '22-05-2009 начало строительства верхнего-летнего храма'+
            '09-09-2009 — второй уровень верхнего-летнего храма'+
            '08-05-2010 — вот уже и крыша готова для жестянщиков!'+
            '21-04-2011 — Установка креста на въезде в Железный Порт'+
            '08-10-2011 — Освящение нашего креста.'+
            '30-10-2011 — наш приход посетил Высокопреосвященный Иоанн Архиепископ Херсонский и Таврический. Владыка освятил накупольные кресты и освятил купола.'+
            '2-11-2011 — Были установлены купола на храм.'+
            '05-01-2012 установлены кресты на наши златоглавые купола.'
    },
    {
        name: "wild",
        label: "Дикий пляж",
        lng: 32.32280731201172,
        lat: 46.118108573906774,
        url: 'wild.JPG',
        icon: 'green-icon.png',
        description: 'Для людей который любят спокойствие и природу.'
    },
    {
        name: "zapovednik",
        label: "Черноморский заповедник",
        lng: 32.26133108139038,
        lat: 46.12463782987457,
        url: 'zapovednik.jpg',
        icon: 'green-icon.png',
        description: 'Черноморский заповедник – это крупнейший заповедник в Украине, основан в 1927 году. Он состоит из нескольких разных участков-ландшафтов. На территории находится около 3445 вида животных и 728 видов растений. Заповедник создан для охраны птиц и среды их обитания. Там есть чайки и крачки. В заливах – лебеди, утки, кулики, много гусей. На лесостепных участках встречаются дрофа, орлан-белохвост, стрепет. Из животных – пятнистый олень. В водах обитают кефаль, глосса, бычки. '
    },
    {
        name: "geize",
        label: "Гейзер",
        lng: 32.13681221008301,
        lat: 46.21595132425727,
        url: 'geize.jpg',
        icon: 'green-icon.png',
        description: 'Для людей который любят спокойствие и природу.'
    },
    {
        name: "magazine1",
        label: "Магазин №1",
        lng: 32.27801442146301,
        lat: 46.12468244627395,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №1'
    },
    {
        name: "magazine2",
        label: "Магазин №2",
        lng: 32.28776156902313,
        lat: 46.124288333495954,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №2'
    },
    {
        name: "magazine3",
        label: "Магазин №3",
        lng: 32.2880619764328,
        lat: 46.125262456177616,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №3'
    },
    {
        name: "magazin4",
        label: "Магазин №4",
        lng: 32.28762745857239,
        lat: 46.125976306137474,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №4'
    },
    {
        name: "magazin5",
        label: "Магазин №5",
        lng: 32.28850722312927,
        lat: 46.12386447321068,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №5'
    },
    {
        name: "magazin6",
        label: "Магазин №6",
        lng: 32.29301333427429,
        lat: 46.12320264975274,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №6'
    },
    {
        name: "magazin7",
        label: "Магазин №7",
        lng: 32.293201088905334,
        lat: 46.12368228664735,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №7'
    },
    {
        name: "magazin8",
        label: "Магазин №8",
        lng: 32.2930508852005,
        lat: 46.1239053721523,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №8'
    },
    {
        name: "magazin9",
        label: "Магазин №9",
        lng: 32.298179268836975,
        lat: 46.12223220884586,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №9'
    },
    {
        name: "magazin10",
        label: "Магазин №10",
        lng: 32.2962749004364,
        lat: 46.117346281171365,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №10'
    },
    {
        name: "magazin11",
        label: "Магазин №11",
        lng: 32.30346858501434,
        lat: 46.122916352872,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №11'
    },
    {
        name: "magazin12",
        label: "Магазин №12",
        lng: 32.30146765708923,
        lat:46.11697070867767,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №12'
    },
    {
        name: "magazin13",
        label: "Магазин №13",
        lng: 32.30686157941818,
        lat:46.11780179883003,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №13'
    },
    {
        name: "magazin14",
        label: "Магазин №14",
        lng: 32.29272097349167,
        lat:46.12293308454881,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №14'
    },
    {
        name: "magazin15",
        label: "Магазин №15",
        lng: 32.286162972450256,
        lat:46.12006073892421,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №15'
    },
    {
        name: "magazin16",
        label: "Магазин №16",
        lng: 32.28724658489227,
        lat:46.11842650263865,
        url: 'shop.png',
        icon: 'shop.png',
        description: 'Магазин №16'
    },
    {
        name: "gas",
        label: "Заправка(Газ, бензин)",
        lng: 32.30507791042328,
        lat:46.12716603551412,
        url: 'gas.png',
        icon: 'gas.png',
        description: 'Заправка(Газ, бензин)'
    },
    {
        name: "tire",
        label: "Шиномонтаж",
        lng: 32.30653166770935,
        lat:46.12760474173719,
        url: 'tire.png',
        icon: 'tire.png',
        description: 'Шиномонтаж'
    },
    {
        name: "canteen",
        label: "Столовая №1",
        lng: 32.28861451148987,
        lat:46.12557104870162,
        url: 'canteen.png',
        icon: 'canteen.png',
        description: 'Столовая №1'
    },
    {
        name: "canteen",
        label: "Столовая №2",
        lng: 32.28861451148987,
        lat:46.12557104870162,
        url: 'canteen.png',
        icon: 'canteen.png',
        description: 'Столовая №2'
    },
    {
        name: "canteen",
        label: "Столовая Хуторок",
        lng: 32.28600203990936,
        lat:46.120532966548765,
        url: 'canteen.png',
        icon: 'canteen.png',
        description: 'Столовая Хуторок'
    },
    {
        name: "canteen",
        label: "Столовая Блис",
        lng: 32.29093998670578,
        lat:46.1180844038112,
        url: 'canteen.png',
        icon: 'canteen.png',
        description: 'Столовая Блис'
    },
    {
        name: "canteen",
        label: "Столовая Тройка",
        lng: 32.29352295398712,
        lat:46.11716779159258,
        url: 'canteen.png',
        icon: 'canteen.png',
        description: 'Столовая Тройка'
    },
    {
        name: "canteen",
        label: "Столовая Баста Паста",
        lng: 32.2928524017334,
        lat:46.11730537736064,
        url: 'canteen.png',
        icon: 'canteen.png',
        description: 'Столовая Баста Паста'
    },
    {
        name: "canteen",
        label: "Столовая Козацька Мрия",
        lng: 32.30062544345856,
        lat:46.115665481392895,
        url: 'canteen.png',
        icon: 'canteen.png',
        description: 'Столовая Козацька Мрия'
    }

]

module.exports = data;