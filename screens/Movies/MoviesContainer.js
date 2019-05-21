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
    try {
      const upcoming = await moviesApi.getUpComing();
      const popular = await moviesApi.getPopular();
      const nowPlaying = await moviesApi.getNowPlaying();
      console.log(upcoming, popular, nowPlaying);
    } catch (error) {
      console.log(error);
      this.setState({ error: "Can't get Movies." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    console.log(this.state);
    return <MoviesPresenter loading={loading} />;
  }
}
