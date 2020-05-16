import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";
import Pagination from "react-js-pagination";
import './App.css';
import { Table } from "./Table";
import {Loader} from "./Loader";
import {Search } from "./Search";

export const defaultQuery = "sumit"; // can not find the query to fetch all repos. so defined default query param.
const repoPerPage = 10;
const baseurl = "https://api.github.com/search/repositories";

export const GithubRepoList = () => {
  const [repoList, setRepoList] = useState([]);
  const [query, setQuery] = useState(defaultQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  const [showLoader, setLoader] = useState(false);

  const fetchGithubRepo = useCallback(async (query) => {
    const api = `${baseurl}?q=${query}&sort=stars&order=desc&page=${currentPage}&per_page=${repoPerPage}`;
    try {
      setLoader(true);
      const response = await fetch(api);
      const repos = await response.json();
      setRepoList(repos.items);
      setLoader(false);
    } catch (e) {
      setLoader(false);
      setError(e.message)
    }
  }, [currentPage]);

  useEffect(() => {
    fetchGithubRepo(defaultQuery);
  }, [defaultQuery]);

  const onSearch = debounce((searchStr) => { //using debounce to reduce the calls
    setQuery(searchStr);
    fetchGithubRepo(searchStr);
  }, 1000);

  return (
    <div className="container">
      <Search onSearch={onSearch}/>
      <Loader showLoader={showLoader}>
        {repoList && repoList.length > 0 && <Table rows={repoList} />}
      </Loader>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={10}
        totalItemsCount={1000} //github restrict accessing more than 1000 records so hard coding it here
        pageRangeDisplayed={10}
        onChange={(activePage) => { 
          setCurrentPage(activePage); 
          fetchGithubRepo(query || defaultQuery);
        }}
      />
    </div>
  );

}
