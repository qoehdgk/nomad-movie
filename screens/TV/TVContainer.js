import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";
export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null,
    error: null
  };
  async componentDidMount() {
    let popular, topRated, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await tvApi.getPopular());
      ({
        data: { results: topRated }
      } = await tvApi.getTopRated());
      ({
        data: { results: airingToday }
      } = await tvApi.getAiringToday());
    } catch (error) {
      error = "Can't get TV";
    } finally {
      this.setState({
        loading: false,
        error,
        popular,
        topRated,
        airingToday
      });
    }
  }
  render() {
    const { loading, popular, topRated, airingToday } = this.state;
    return (
      <TVPresenter
        loading={loading}
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
      />
    );
  }
}
