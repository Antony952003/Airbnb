import React from "react";
import "./SearchPage.css";
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchPage__info">
        <p>62 stays . 26 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexiblity</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filter...</Button>
      </div>
      <SearchResult
      img="https://st.hzcdn.com/simgs/pictures/bedrooms/landscape-house-abhishek-shah-img~0b81788c0e844727_4-2042-1-8d4f43f.jpg"
      location="Thiruvanmiyur, Chennai"
      title="Beautiful Beach View Villa !!"
      description="Enjoy your stay with free beverages on the house !!"
      star={4.8}
      price="$30/night"
      total="$117/total"
      />
      <SearchResult
      img="https://a0.muscache.com/im/pictures/miso/Hosting-50449441/original/6767e80f-148c-4755-b5b4-2c07858f1537.jpeg?im_w=720"
      location="Kandy,Srilanka"
      title="Deluxe Double room with balcony and mountain view."
      description="Mountain Views"
      star={4.5}
      price="₹10,447/Night"
      total="₹20,578/Total"
      />
      <SearchResult
      img="https://a0.muscache.com/im/pictures/94e6244c-b20b-4f8a-9e73-de1283bdd1cd.jpg?im_w=720"
      title="3BHK - Bay Walk (Maison Prema), White Town"
      description="Beach and Ocean Views"
      price="₹5,324/Night"
      star={4.2}
      total="₹26,874/Total"
      />
      <SearchResult
      img="https://a0.muscache.com/im/pictures/miso/Hosting-598817875487986040/original/805b67d4-aca3-4e56-9ece-44ce1c2324a5.jpeg?im_w=720"
      title="Coast Away, Mahabalipuram"
      description="Mountain Views"
      price="₹9,022/Night"
      star={4.2}
      total="₹27,032/Total"
      />
      <SearchResult
      img="https://a0.muscache.com/im/pictures/b4aaec26-f24f-4264-8280-ab67cc66ee36.jpg?im_w=720"
      title="2BR Sea View Condo with Parking. Near French Town."
      description="Night Views and Beach"
      price="₹6,997/Night"
      star={4.2}
      total="₹25,976/Total"
      />
      <SearchResult
      img="https://a0.muscache.com/im/pictures/miso/Hosting-40686633/original/ac92b555-c803-4f0b-92e7-cb0c15378dad.jpeg?im_w=720"
      title="Zacs Valley Resort - Luxury Cottages, Kodaikanal"
      description="Valley luxury cottages"
      price="₹6,447/Night"
      star={4.2}
      total="₹23,289/Total"
      />
      <SearchResult
      img="https://a0.muscache.com/im/pictures/82e3a044-9e2a-4555-9bee-608a862b3c59.jpg?im_w=720"
      title="StayVista at Talerock Inn - 1BR w/ breakfast"
      description="Talerock house"
      price="₹7,367/Night"
      star={4.2}
      total="₹22,032/Total"
      />
    </div>
  );
}

export default SearchPage;
