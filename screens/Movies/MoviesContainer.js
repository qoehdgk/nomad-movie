import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null,
    error: null
  };

  async componentDidMount() {
    let upcoming, popular, nowPlaying, error;
    try {
      ({
        data: { results: upcoming }
      } = await moviesApi.getUpComing());
      ({
        data: { results: popular }
      } = await moviesApi.getPopular());
      ({
        data: { results: nowPlaying }
      } = await moviesApi.getNowPlaying());
    } catch (error) {
      error = "Can't get Movies.";
    } finally {
      this.setState({
        loading: false,
        error,
        upcoming,
        popular,
        nowPlaying
      });
    }
  }

  render() {
    const { loading, upcoming, popular, nowPlaying } = this.state;
    return (
      <MoviesPresenter
        loading={loading}
        popular={popular}
        upcoming={upcoming}
        nowPlaying={nowPlaying}
      />
    );
  }
}
