import Banner from "../Banner/Banner";
import NewCollection from "../NewCollection/NewCollection";
import NewsLetter from "../NewsLetter/NewsLetter";
import Offer from "../Offer/Offer";
import Popular from "../Popular/Popular";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Offer></Offer>
            <NewCollection></NewCollection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;