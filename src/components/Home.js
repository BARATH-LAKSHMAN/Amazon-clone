import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return(
        <div className="home">
            <div className="home-container">
                <img className="home-image" alt="ads" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                <div className="home-row">
                <Product content="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty" price="2,399" star={5} src="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_SY400_.jpg"></Product>
                <Product content="iQOO Z5 5G (Mystic Space, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge" price="20,990" star={4} src="https://images-eu.ssl-images-amazon.com/images/I/71wevQRS5qL._AC_UL320_SR320,320_.jpg"></Product>
                </div>
                <div className="home-row">
                <Product content="Melomane Melophones Opera Jh-913 Bluetooth Wireless On Ear Headphones" price="1,990" star={4} src="https://m.media-amazon.com/images/I/71I+UCgT3qL._SX679_.jpg"></Product>
                <Product content="Royal Look Shoes For Men ll Casual Shoes For Men ll Latest Patent Leather Boots for Menn" price="499" star={4} src="https://m.media-amazon.com/images/I/71t3JkD-0cL._UY695_.jpg"></Product>
                <Product content="Casio G-Shock Analog-Digital Black Dial Men's Watch-GA-120-1ADR (G346)" price="9,795" star={5} src="https://m.media-amazon.com/images/I/61JbXAH0LYL._UX679_.jpg"></Product>
                </div>
                <div className="home-row">
                <Product content="Freakway Ceramic Classic Bowl - Pack of 6, Blue" price="685" star={5} src="https://m.media-amazon.com/images/I/71it2biogSS._SX679_.jpg"></Product>
                </div>
            </div>
        </div>

    )
}


export default Home;