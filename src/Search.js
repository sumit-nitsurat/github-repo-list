import * as React from "react";
import {defaultQuery} from "./GithubRepoList";

export const Search = ({ onSearch }) => (
    <input onChange={(e) => onSearch(!!e.target.value ? e.target.value : defaultQuery)} />
)