import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvApi, moviesApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: false,
    tvResults: null,
    movieResults: null,
    searchTerm: "",
    error: null
  };

  handleSearchUpadate = text => {
    this.setState({
      searchTerm: text
    });
  };

  onSubmitEditing = async () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      let tvResults, movieResults, error;
      this.setState({
        loading: true
      });
      try {
        ({
          data: { results: movieResults }
        } = await moviesApi.searchMovies(searchTerm));
        ({
          data: { results: tvResults }
        } = await tvApi.searchTV(searchTerm));
      } catch {
        error = "Can't Search";
      } finally {
        this.setState({
          loading: false,
          movieResults,
          tvResults
        });
      }
      return;
    }
  };

  render() {
    const { loading, movieResults, tvResults, searchTerm } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        handleSearchUpdate={this.handleSearchUpadate}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}
