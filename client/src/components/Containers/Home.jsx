import React, { useEffect, useState } from "react";
import Cards from ".././dumbs/Cards";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { getCountries } from "../../redux/actions";
import "../Containers/estilos/Home.css";
import SearchBar from "./SearchBar";

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

function Home({ getCountries, countries }) {
  useEffect(() => {
    getCountries();
  }, []);

  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setCurrentPage(1);
  }, [order]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home-container">
      <SearchBar />
      <Filter setOrder={setOrder} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={countries.length}
        paginate={paginate}
      />
      <Cards className="Cards-container" countries={currentPosts} />
    </div>
  );
}

export default connect(mapStateToProps, { getCountries })(Home);
