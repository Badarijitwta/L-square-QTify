import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/index";
import Hero from "./components/Hero/index";
// import Card from "./components/Card";
import Section from "./components/Section";
import axios from "axios";
import Accordion from "./components/Accordion";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setnewAlbums] = useState([]);
  const [allAlbums, setallAlbums] = useState([]);
  const ENDPOINT = `https://qtify-backend-labs.crio.do/`;
  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setnewAlbums(data);
    });
    axios.get(`${ENDPOINT}songs`).then(({ data }) => {
      setallAlbums(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section heading={"Top Albums"} data={topAlbums} />
      <Section heading={"New Albums"} data={newAlbums} />
      <Section heading={"Songs"} data={allAlbums} />
      <Accordion />
    </div>
  );
}

export default App;
