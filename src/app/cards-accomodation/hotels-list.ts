
export interface HotelsList {
    name: string;
    desc?:string;
    description:string;
    image: string;
    address: string;
    hotel: boolean;
    flag:boolean;
    link?:string;
}

export const Hotels: HotelsList[] = [
    {  
        name:"Park Hotel & Spa",
        desc: "Set in Skopje, 1 km away from Skopje city centre, Park Hotel & Spa is surrounded by the greenery of the City Park and features a sun terrace by the river Vardar, a spa centre spa and a fitness centre with professional equipment. An on-site restaurant and a bar are available for the guests. Rooms come with a flat-screen TV with satellite channels.  ",
        description: "Set in Skopje, 1 km away from Skopje city centre, Park Hotel & Spa is surrounded by the greenery of the City Park and features a sun terrace by the river Vardar, a spa centre spa and a fitness centre with professional equipment. An on-site restaurant and a bar are available for the guests. Rooms come with a flat-screen TV with satellite channels. Some units include a seating area where you can relax. You will find a coffee machine in the room. Rooms are fitted with a private bathroom. For your comfort, you will find bath robes and slippers. Park Hotel & Spa features free WiFi throughout the property.",
        address: "Oktomvriska Revolucija 15",     
        image: "../../assets/images/Park-Hotel-Spa.png",
        hotel:true,
        flag:true,
        link: "https://www.booking.com/hotel/mk/park-skopje.html"
    },

    {  
        name:"DoubleTree By Hilton Skopje",
        desc: "Located along the river Vardar, DoubleTree by Hilton Skopje offers 5-star accommodation within a 10 minute drive of the city center, featuring luxuriously furnished rooms and suites, large indoor swimming pool with fitness and spa and an elegant roof bar with a relaxing view.The contemporary designed rooms and suites are fitted with stylish designed furniture.  ",
        description: "Located along the river Vardar, DoubleTree by Hilton Skopje offers 5-star accommodation within a 10 minute drive of the city center, featuring luxuriously furnished rooms and suites, large indoor swimming pool with fitness and spa and an elegant roof bar with a relaxing view.The contemporary designed rooms and suites are fitted with stylish designed furniture, air conditioning, Smart TV’s starting from 43’, kettle in every room, laundry service and complimentary WIFI. Deluxe Rooms include espresso machine and floor-to-ceiling windows, while suites offer a kitchenette. Each suite is fitted with either a bathtub or walk-in shower, while some feature both.The Chef at “Monte” restaurant, will take you on a five-continent culinary journey of flavors where you can experience private dining or be amazed at the Chef’s table. Plan your celebration or corporate event at the well-equipped Ballroom or the rest of conference and meeting rooms and amaze your guests by organizing a reception around the lavish fountain. DoubleTree by Hilton Skopje is positioned at a peaceful surrounding, only 15 km from the city airport, 2 km from the international bus and train station and 800 metres from the Capitol Mall.",  address: "Oktomvriska Revolucija 15",     
        image: "../../assets/images/doubletree.png",
        hotel:true,
        flag:true,
        
        link:"https://www.booking.com/hotel/us/doubletree-sacramento.html"
    },
 
    {
        name: "Hotel Aleksandar Palace",
        desc:"The hotel Aleksandar Palace, leading hotel in Macedonia, is located on the right bank of the river Vardar next to the city park, only 3 km away from Skopje center. Modern conference and banquette center consists of multifunctional Conference hall with capacity of 1500 seats and 4 smaller rooms with full equipment for business meetings. ",
        description: "The hotel Aleksandar Palace, leading hotel in Macedonia, is located on the right bank of the river Vardar next to the city park, only 3 km away from Skopje center. Modern conference and banquette center consists of multifunctional Conference hall with capacity of 1500 seats and 4 smaller rooms with full equipment for business meetings. The Sport facilities include solarium, gym, sauna, jacuzzi, aerobic ...",
        address: "Oktomvriska Revolucija 15",     
        image: "../../assets/images/alexandar-square2.png",
        hotel:true,
        flag:true,
        link:"https://www.booking.com/hotel/mk/aleksandar-palace-hotel-amp-spa.html"
    },
    {
    
        name: "Hotel 7",
        desc: "Located opposite the Clinical Center Skopje, not far from the city center (300m.). Hotel 7 offers accommodation in 8 well equiped comfortable rooms, which guarantee pleasant stay. Hotel 7 also offers 24h free Wi-Fi internet service and garage.",       
        description: "Located opposite the Clinical Center Skopje, not far from the city center (300m.). Hotel 7 offers accommodation in 8 well equiped comfortable rooms, which guarantee pleasant stay. Hotel 7 also offers 24h free Wi-Fi internet service and garage.",       
        image: "https://macedonian-hotels.mk/images/hotels/skopje/hotel-7/hotel-71303911463.jpg",
        address: "Vodnjanska 28",
        hotel:true,
        flag:false,
        link:"https://www.booking.com/hotel/pt/the7hotel.html"
    },   
    {
        name: "Hotel City Park",
        desc: "Opened in October 2010, the stylish City Park Hotel offers you elegant rooms with park views, LCD TVs and free Wi-Fi. Private parking is available for free on site. The government offices of the Republic of Macedonia are only 300 metres and the Philipp II Arena is only 400 metres away Hotel City Park. Refined international cuisine as well as Macedonian specialities are served. ",
        description: "Opened in October 2010, the stylish City Park Hotel offers you elegant rooms with park views, LCD TVs and free Wi-Fi. Private parking is available for free on site. The government offices of the Republic of Macedonia are only 300 metres and the Philipp II Arena is only 400 metres away Hotel City Park. Refined international cuisine as well as Macedonian specialities are served in the restaurant of the City Park Hotel features a summer terrace.",
        address: "Gjuro Gjakovic 78а",
        image: "https://macedonian-hotels.mk/images/hotels/skopje/hotel-city-park/hotel-city-park1304506403.png",
        hotel:true,
        flag:false,
    },
    {
        name: "Hotel Continental",
        desc:"The Hotel Continental is the largest luxury hotel in Skopje, conveniently located a 20 minute drive from Alexander the Great Airport and a 5-minute drive from the center of the city. The hotel is situated next to the convention center. The Olympic Pool is 2 miles from the hotel, and many famous sights are nearby. There are 7 meeting rooms on the first floor and the mezzanine. ",
        description:"The Hotel Continental is the largest luxury hotel in Skopje, conveniently located a 20 minute drive from Alexander the Great Airport and a 5-minute drive from the center of the city. The hotel is situated next to the convention center. The Olympic Pool is 2 miles from the hotel, and many famous sights are nearby. There are 7 meeting rooms on the first floor and the mezzanine, all of them with daylight and air-conditioning.",
        address:"Aleksandar Makedonski bb", 
        hotel: true,
        image:"https://macedonian-hotels.mk/images/hotels/skopje/hotel-continental/hotel-continental1304082598.jpg",
        flag:true,
        link:"https://www.booking.com/hotel/mk/aleksandar-palace-hotel-amp-spa.html"
    }, 
    {
        name: "Holiday Inn",
        desc:"Located in the city centre, next to the most important Government, business and administrative offices, shopping centres and main tourist attractions, this making the hotel convenient for both business and leisure travellers. It is the ideal choice for successful organization of conferences, meetings, business dinners and lunches. ",
        description:"Located in the city centre, next to the most important Government, business and administrative offices, shopping centres and main tourist attractions, this making the hotel convenient for both business and leisure travellers. It is the ideal choice for successful organization of conferences, meetings, business dinners and lunches, as well as for enjoying a perfect cup of coffee or drink and delicious snacks and specialties in the hotels bar and restaurant.",
        address:"Mosa Pijade 2",
        hotel:true,
        image:"https://macedonian-hotels.mk/images/hotels/skopje/holiday-inn/holiday-inn1304088019.jpg",
        flag:true,
        link:"https://www.booking.com/hotel/us/fraser-108-zerex-street.html"
    }
]