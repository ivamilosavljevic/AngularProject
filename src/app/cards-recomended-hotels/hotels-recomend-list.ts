
export interface HotelsRecomList {
    [x: string]: any;
    name: string;
    desc?:string;
    description?:string;
    image: string;
    address: string;
    hotel: boolean;
    flag:boolean;
    link?:string;
}

export let HotelsRecom: HotelsRecomList[] = [
    {  
        name:"Park Hotel & Spa",
        desc: "Set in Skopje, 1 km away from Skopje city centre, Park Hotel & Spa is surrounded by the greenery of the City Park and features a sun terrace by the river Vardar, a spa centre spa and a fitness centre with professional equipment. An on-site restaurant and a bar are available for the guests. Rooms come with a flat-screen TV with satellite channels. Some units include a seating area where...  ",
        description: "Set in Skopje, 1 km away from Skopje city centre, Park Hotel & Spa is surrounded by the greenery of the City Park and features a sun terrace by the river Vardar, a spa centre spa and a fitness centre with professional equipment. An on-site restaurant and a bar are available for the guests. Rooms come with a flat-screen TV with satellite channels. Some units include a seating area where you can relax. You will find a coffee machine in the room. Rooms are fitted with a private bathroom. For your comfort, you will find bath robes and slippers. Park Hotel & Spa features free WiFi throughout the property.",
        address: "Oktomvriska Revolucija 15",     
        image: "../../assets/images/Park-Hotel-Spa.png",
        hotel:true,
        flag:true,
        link: "https://www.booking.com/hotel/mk/park-skopje.html"
    },

    {  
        name:"DoubleTree By Hilton Skopje",
        desc: "Located along the river Vardar, DoubleTree by Hilton Skopje offers 5-star accommodation within a 10 minute drive of the city center, featuring luxuriously furnished rooms and suites, large indoor swimming pool with fitness and spa and an elegant roof bar with a relaxing view.The contemporary designed rooms and suites are fitted with stylish designed furniture, air conditioning, Smart TV...  ",
        description: "Located along the river Vardar, DoubleTree by Hilton Skopje offers 5-star accommodation within a 10 minute drive of the city center, featuring luxuriously furnished rooms and suites, large indoor swimming pool with fitness and spa and an elegant roof bar with a relaxing view.The contemporary designed rooms and suites are fitted with stylish designed furniture, air conditioning, Smart TV’s starting from 43’, kettle in every room, laundry service and complimentary WIFI. Deluxe Rooms include espresso machine and floor-to-ceiling windows, while suites offer a kitchenette. Each suite is fitted with either a bathtub or walk-in shower, while some feature both.The Chef at “Monte” restaurant, will take you on a five-continent culinary journey of flavors where you can experience private dining or be amazed at the Chef’s table. Plan your celebration or corporate event at the well-equipped Ballroom or the rest of conference and meeting rooms and amaze your guests by organizing a reception around the lavish fountain. DoubleTree by Hilton Skopje is positioned at a peaceful surrounding, only 15 km from the city airport, 2 km from the international bus and train station and 800 metres from the Capitol Mall.",  address: "Oktomvriska Revolucija 15",     
        image: "../../assets/images/doubletree.png",
        hotel:true,
        flag:true,
        link:"https://www.booking.com/hotel/us/doubletree-sacramento.html"
    },
 
    {
        name: "Hotel Aleksandar Palace",
        desc:"The hotel Aleksandar Palace, leading hotel in Macedonia, is located on the right bank of the river Vardar next to the city park, only 3 km away from Skopje center. Modern conference and banquette center consists of multifunctional Conference hall with capacity of 1500 seats and 4 smaller rooms with full equipment for business meetings. The Sport facilities include solarium, gym, sauna... ",
        description: "The hotel Aleksandar Palace, leading hotel in Macedonia, is located on the right bank of the river Vardar next to the city park, only 3 km away from Skopje center. Modern conference and banquette center consists of multifunctional Conference hall with capacity of 1500 seats and 4 smaller rooms with full equipment for business meetings. The Sport facilities include solarium, gym, sauna, jacuzzi, aerobic ...",
        address: "Oktomvriska Revolucija 15",     
        image: "../../assets/images/alexandar-square2.png",
        hotel:true,
        flag:true,
        link:"https://www.booking.com/hotel/mk/aleksandar-palace-hotel-amp-spa.html"
    }
]