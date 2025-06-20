import Hero from "./Hero";
import OurPopularDishes from "./OurPopularDishes";
import FoodApp from "./FoodApp";
import Reviews from "./Reviews";
import Invite from "./Invite";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <OurPopularDishes />
            <FoodApp />
            <Reviews />
            <Invite />
            <Footer />
        </>
    );
}
