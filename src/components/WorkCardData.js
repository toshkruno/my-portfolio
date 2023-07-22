import mugirango from "../assets/mugirango.png";
import mcbbys from "../assets/mcbbys.png";
import restaurant from "../assets/restaurant.png";
import bank from "../assets/banking.png";
import store from "../assets/store.png";

const rootURL = "https://toshkruno.github.io/my-portfolio";

const ProjectCardData = [
    {
        imgsrc: mugirango,
        title: "West Mugirango Official Website",
        text: "A social platform courtesy of West Mugirango's MP Stephen Mogaka. It allows residents of the said constituency to seemlessly access crucial social services & information remotely.",
        view: "https://w-mugirango.org/",
    },

    {
        imgsrc: mcbbys,
        title: "Retail Ecommerce Website Design",
        text: "Thriving Online shop where you'll find a delightful array of handcrafted soaps and candles, designed to infuse your spaces with captivating scents and soothing serenity.",
        view: "../store_app/#2",
    },

    {
        imgsrc: restaurant,
        title: "Fine Restaurant Website Design",
        text: "Made for the finest. Showcase extraordinary culinary delights, combine artful flavors, impeccable service, and a warm ambiance unite to create unforgettable dining experiences.",
        view: rootURL + "/restaurant_app/",
    },

    {
        imgsrc: bank,
        title: "Online banking service Website Design",
        text: "Empower your financial journey with our secure online banking service, offering seamless transactions, robust account management, and personalized solutions for your needs.",
        view: rootURL + "/banking_app/",
    },

    {
        imgsrc: store,
        title: "Next-gen Ecommerce Website Design",
        text: "Step into a world of boundless choices and convenience. From everyday essentials to unique finds, we curate an extensive collection to cater to all your needs.",
        view: rootURL + "/online_store/",
    },
];

export default ProjectCardData;