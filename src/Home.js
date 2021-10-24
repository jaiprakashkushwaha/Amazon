import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />

                <div className="home_row">
                    <Product
                    id="1"
                    // title="The lean startup"
                    title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate
                    Colour:Blue
                    Size name:4GB RAM & 64GB Storage"
                    price={9}
                    
                    image="https://m.media-amazon.com/images/I/71r69Y7BSeL._SL1500_.jpg"
                    rating ={4}
                    />
                    <Product
                    id="2"
                    title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB RAM, 512GB SSD) - Space Grey "
                    price={10}
                    image="https://m.media-amazon.com/images/I/81jMsojO7vL._SL1500_.jpg"
                    rating ={5}
                    />

                    {/* for parctice */}
                    <Product
                    id="3"
                    // title="The lean startup"
                    title="Helix Timex Metalfit SPO2 smartwatch with Full Metal Body and Touch to Wake Feature, HRM, Sleep & Activity Tracker, 10 Days Battery and Female Health Monitor"
                    price={9}
                    
                    image="https://m.media-amazon.com/images/I/614DnVG5buL._UL1500_.jpg"
                    rating ={4}
                    />
                    <Product
                    id="4"
                    title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black)  "
                    price={10}
                    image="https://m.media-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg"
                    rating ={3}
                    />
                    
                    {/* Product */}
                    {/* Product */}

                </div>
                <div className="home_row">
                    <Product
                     id="5"
                     title="LG 6.5 Kg 4 Star Semi-Automatic Top Loading Washing Machine (P6510NBAY, Dark Blue, Rat Away Technology)"
                     price={129}
                     image="https://m.media-amazon.com/images/I/616NUYJiN0L._SL1500_.jpg"
                     rating ={5}
                    />
                    <Product
                     id="4"
                     title="Whirlpool 200 L 4 Star Inverter Direct-Cool Single Door Refrigerator (215 ICEMAGIC PRO ROY 4S INV, Sapphire Mulia, Base Stand)  "
                     price={17100.00}
                     image="https://m.media-amazon.com/images/I/71VkrrSIeZL._SL1500_.jpg"
                     rating ={4}
                    />
                    <Product
                     id="4"
                     title="OnePlus 163.8 cm (65 inches) U Series 4K LED Smart Android TV 65U1S (Black) (2021 Model) "
                     price={65999}
                     image="https://m.media-amazon.com/images/I/71jv5i4cRKS._SL1500_.jpg"
                     rating ={4}
                    
                    />

                    <Product
                     id="6"
                     title="KENT Supreme 2020 (11111), Wall Mountable, RO + UF + TDS Control + UV in Tank, 8 L Tank, White, 20 LPH Water Purifier "
                     price={12499}
                     image="https://m.media-amazon.com/images/I/717V+1YgBwL._SL1500_.jpg"
                     rating ={5}
                    />  
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>
                <div className="home_row">
                    {/* Product */}
                    
                    <Product
                     id="6"
                     title="MBTC Worksmart Multipurpose Foldable Laptop Table/Lapdesk/Study Table with Tablet & Mobile Stand, Cupholder, & Handle "
                     price={769.00}
                     image="https://m.media-amazon.com/images/I/71moyEetPdL._SL1500_.jpg"
                     rating ={4}
                    />

                    {/* for parctice */}

                    <Product
                    id="1"
                    // title="The lean startup"
                    title="Spacewood Winner Engineered Wood Study Desk (Walnut finish,Walnut Rigato) "
                    price={6824}
                    
                    image="https://m.media-amazon.com/images/I/61nJ+da6btL._SL1128_.jpg"
                    rating ={4}
                    />
                    <Product
                    id="2"
                    title="Rolling Nature Good Luck Jade Plant in White Round Dew Ceramic Pot "
                    price={369}
                    image="https://m.media-amazon.com/images/I/81Bt83fKapL._SL1500_.jpg"
                    rating ={3}
                    />

                    <Product
                     id="6"
                     title="Green Soul Monster Ultimate Series (T) Multi Functional Ergonomic Gaming Chair with Premium & Soft Fabric, Best in Class Comfort, 3 Years Warranty, Size - Large (Full Black) "
                     price={13199.00}
                     image="https://m.media-amazon.com/images/I/71KFirs5cWL._SL1500_.jpg"
                     rating ={4}
                    />
                </div>


                <div className="home_row">
                    {/* Product */}
                    
                    <Product
                     id="6"
                     title="RARE Women's Synthetic a-line Knee-Long Dress "
                     price={555.00}
                     image="https://m.media-amazon.com/images/I/61xaEhY5L1L._UL1500_.jpg"
                     rating ={4}
                    />

                    {/* for parctice */}

                    <Product
                    id="1"
                    // title="The lean startup"
                    title=" MIRCHI FASHION Women's Cotton Blend Bandhani Style Dots Printed Saree with Blouse Piece "
                    price={399}
                    
                    image="https://m.media-amazon.com/images/I/91JZh95UEqL._UL1500_.jpg"
                    rating ={3}
                    />
                    <Product
                    id="2"
                    title="Dennis Lingo Men's Slim fit Casual Shirt "
                    price={511}
                    image="https://m.media-amazon.com/images/I/61j0cpBJjJS._UL1500_.jpg"
                    rating ={5}
                    />

                    <Product
                     id="6"
                     title="Killer Brand - House & Shields Men's Stretch Slim Jeans "
                     price={699.00}
                     image="https://m.media-amazon.com/images/I/81aBuBf206L._UL1500_.jpg"
                     rating ={3}
                    />
                </div>


                <div className="home_row">
                    {/* Product */}
                    
                    <Product
                     id="6"
                     title="Kore PVC 20-50 Kg Home Gym Set with One Plain + One Curl and One Pair Dumbbell Rods with Gym Accessories and PVC Dumbbells "
                     price={1999.00}
                     image="https://m.media-amazon.com/images/I/81TrFwscrQL._SL1500_.jpg"
                     rating ={3}
                    />

                    <Product
                     id="6"
                     title="Skybags Rubik Polyester 58 Cms Blue Softsided Cabin Luggage (STRUW58EBLU) "
                     price={2499.00}
                     image="https://m.media-amazon.com/images/I/51VYP5WiaEL._SL1000_.jpg"
                     rating ={4}
                    />  
                </div>


                <div className="home_row">
                    {/* Product */}
                    
                    <Product
                     id="6"
                     title="Duroflex Durobond NXT Queen Size Double Sided High Density Coir Mattress (78 * 60 * 5 Inches)  "
                     price={13999.00}
                     image="https://m.media-amazon.com/images/I/81iwypgdzmL._SL1500_.jpg"
                     rating ={3}
                    />
                </div>
            </div>
          {/* <p>I am the Home component</p>   */}
        </div>
    );
}

export default Home;
