import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3
    },
];

export const statistics = [
    { value: '1kk+', label: 'Brands'},
    { value: '500k+', label: 'Shops'},
    { value: '250k+', label: 'Customers'}
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$400"
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$500"
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-010",
        price: "$600"
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-100",
        price: "$700"
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy shopping with our complimentary shipping service"
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    }
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: "Andrew Johnson",
        rating: "4.5",
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: "Vanessa Murray",
        rating: "5.0",
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer! Just do it!"
    },
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/"},
            { name: "Court Vision", link: "/"},
            { name: "Dunk Low", link: "/"},
            { name: "Air Jordan 1", link: "/"},
            { name: "Magista", link: "/"},
        ]
    },
    {
        title: "Help",
        links: [
            { name: "About Us", link: "/"},
            { name: "FAQs", link: "/"},
            { name: "How it works", link: "/"},
            { name: "Privacy policy", link: "/"},
            { name: "Payment policy", link: "/"},
        ]
    },
    {
        title: "Get in touch",
        links: [
            { name: "justbuyit@nike.com", link: "mailto:justbuyit@nike.com" },
            { name: "+873929402", link: "tel:++873929402"}
        ]
    }
];

export const socialMedia = [
    { src: facebook, alt: "Facebook logo"},
    { src: twitter, alt: "Twitter logo"},
    { src: instagram, alt: "Instagram logo"},
]