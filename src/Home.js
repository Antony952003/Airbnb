import React from 'react'
import Banner from './Banner'
import Card from './Card'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <Banner />
        <div className='home__section'>
            <Card src="https://a0.muscache.com/im/pictures/94e6244c-b20b-4f8a-9e73-de1283bdd1cd.jpg?im_w=720"
            title="3BHK - Bay Walk (Maison Prema), White Town"
            description="Beach and Ocean Views"
            price="₹5,324/Night"/>
            <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-598817875487986040/original/805b67d4-aca3-4e56-9ece-44ce1c2324a5.jpeg?im_w=720"
            title="Coast Away, Mahabalipuram"
            description="Mountain Views"
            price="₹9,022/Night"/>
            <Card src="https://a0.muscache.com/im/pictures/b4aaec26-f24f-4264-8280-ab67cc66ee36.jpg?im_w=720"
            title="2BR Sea View Condo with Parking. Near French Town."
            description="Night Views and Beach"
            price="₹6,997/Night"/>
        </div>
        <div className='home__section'>
            <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-50449441/original/6767e80f-148c-4755-b5b4-2c07858f1537.jpeg?im_w=720"
            title="Deluxe Double room with balcony and mountain view."
            description="Mountain Views"
            price="₹10,447/Night"/>
            <Card src="https://a0.muscache.com/im/pictures/fdf0082d-03e0-4e1a-864e-10c3fad17390.jpg?im_w=720"
            title="Modern,earthy, luxury Apartment"
            description="Luxury Apartments"
            price="₹4,398/Night"/>
            <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-53177061/original/a4044694-74fc-4f17-81b2-d289944d9e8f.jpeg?im_w=720"
            title="Cozy Treehouse in Sigiriya with Amazing Lake View"
            description="Treehouse Lake"
            price="₹7,456/Night"/>
        </div>
        <div className='home__section'>
            <Card src="https://a0.muscache.com/im/pictures/c0ec02f3-c959-41a9-88ba-f2a317947443.jpg?im_w=720"
            title="KERALA HOUSE- HOME STAY"
            description="Kerala homestay"
            price="₹8,412/Night"/>
            <Card src="https://a0.muscache.com/im/pictures/82e3a044-9e2a-4555-9bee-608a862b3c59.jpg?im_w=720"
            title="StayVista at Talerock Inn - 1BR w/ breakfast"
            description="Talerock house"
            price="₹7,367/Night"/>
            <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-40686633/original/ac92b555-c803-4f0b-92e7-cb0c15378dad.jpeg?im_w=720"
            title="Zacs Valley Resort - Luxury Cottages, Kodaikanal"
            description="Valley luxury cottages"
            price="₹6,447/Night"/>
        </div>
    </div>
  )
}

export default Home