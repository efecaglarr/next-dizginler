import { title } from "process";

export const features = [
  {
    title: 'Sizler için',
    icon: '/car.png',
    variant: 'green',
    description:
      "Kuzey Kıbrıs'ta, müşterilerimize, araç kiralama ihtiyaçları için kusursuz hizmet vermek adına, yorulmaksızın çalışıyoruz. Size destek olmak için, pek çok noktada çağrınızı bekliyoruz.",
  },
  {
    title: 'Fiyat Politikası',
    icon: '/car-lease.png',
    variant: 'green',
    description:
      "Her bütçeye uygun araç kiralama fiyatlarımız ile kaliteli, güvenli ve sorunsuz bir deneyim yaşayın.",
  },
  {
    title: 'Şartlar',
    icon: '/car-service.png',
    variant: 'green',
    description:
      "Kuzey Kıbrıs’ta araç kiralamak için sürüş ehliyetine ihtiyaç vardır. Dizgin Rent a Car'dan araç kiralamak için en az 25 yaşında olmak gereklidir, ki Kuzey Kıbrıs’ta birçok araç kiralama şirketi aynı kıstası uygulamaktadır. Daha fazla bilgi için Kiralama Şartlarını ziyaret ediniz.",
  },
  {
    title: 'Hızlı Rezervasyon',
    icon: '/cyprus.png',
    variant: 'orange',
    description:
      'Rezervasyonlarınızı web sitemiz üzerinden anında yapılabilir veya bizlerle iletişime geçerek aracınızı kiralayabilirsiniz.',
  },
];


export const manufacturers = [
  "Ford",
  "Opel",
];

export const yearsOfProduction = [
  { title: "Year", value: "", name: "" },
  { title: "2015", value: "2015", name: "2015" },
  { title: "2016", value: "2016", name: "2016" },
  { title: "2017", value: "2017", name: "2017" },
  { title: "2018", value: "2018", name: "2018" },
  { title: "2019", value: "2019", name: "2019" },
  { title: "2020", value: "2020", name: "2020" },
  { title: "2021", value: "2021", name: "2021" },
  { title: "2022", value: "2022", name: "2022" },
  { title: "2023", value: "2023", name: "2023" },
];


export const fuels = [
  {
    name: "Fuel",
    value: "",
  },
  {
    name: "Gas",
    value: "Gas",
  },
  {
    name: "Diesel",
    value: "Diesel",
  },
  {
    name: "Electricity",
    value: "Electricity",
  },
];

export const times = [
  { name: "09:00", title: "pickupTime", value: "09:00" },
  { name: "10:00", title: "pickupTime", value: "10:00" },
  { name: "11:00", title: "pickupTime", value: "11:00" },
  { name: "12:00", title: "pickupTime", value: "12:00" },
  { name: "13:00", title: "pickupTime", value: "13:00" },
  { name: "14:00", title: "pickupTime", value: "14:00" },
  { name: "15:00", title: "pickupTime", value: "15:00" },
  { name: "16:00", title: "pickupTime", value: "16:00" },
  { name: "17:00", title: "pickupTime", value: "17:00" },
  { name: "18:00", title: "pickupTime", value: "18:00" },
];


export const locations = [
  {
    name: "Konum Seçin",
    value: "",
  },
  {
    name: "Dizgin Rent a Car",
    value: "Dizgin Rent a Car",
  },
  {
    name: "Ercan Havalimanı",
    value: "Ercan Havalimanı",
  },
  {
    name: "Lefkoşa",
    value: "Lefkoşa",
  },
];

export const deliveryLocations = [
  {
    name: "Dizgin Rent a Car",
    title: "deliveryLocation",
    value: "Dizgin Rent a Car",
  },
  {
    name: "Ercan Havalimanı",
    title: "deliveryLocation",
    value: "Ercan Havalimanı",
  },
  {
    name: "Lefkoşa",
    title: "deliveryLocation",
    value: "Lefkoşa",
  },
];

export const footerLinks = [
  // {
  //   title: "About",
  //   links: [
  //     { title: "Who we are", url: "/" },
  //     { title: "Featured", url: "/" },
  //     { title: "Partnership", url: "/" },
  //     { title: "Bussiness Relation", url: "/" },
  //   ],
  // },
  // {
  //   title: "Company",
  //   links: [
  //     { title: "Events", url: "/" },
  //     { title: "Blog", url: "/" },
  //     { title: "Invite a friend", url: "/" },
  //   ],
  // },
  // {
  //   title: "Socials",
  //   links: [
  //     { title: "Instagram", url: "/" },
  //     { title: "Facebook", url: "/" },
  //   ],
  // },

  {
    title: "Çalışma Saatleri",
    links: [
      { title: "Pazartesi - Cumartesi: 09:00 - 18:00", url: "/" },
      { title: "Pazar - Kapalı", url: "/" },
    ],
  },
  {
    title: "İletişim",
    links: [
      { title: "dizginrentacar@gmail.com", url: "/" },
      { title: "+90 533 846 15 15", url: "/" },
    ],
  }
];
