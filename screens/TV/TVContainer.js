import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";
export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    airingThisWeek: null,
    airingToday: null,
    error: null
  };
  async componentDidMount() {
    let popular, airingThisWeek, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await tvApi.getPopular());
      ({
        data: { results: airingThisWeek }
      } = await tvApi.getAiringThisWeek());
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
        airingThisWeek,
        airingToday
      });
    }
  }
  render() {
    const { loading, popular, airingThisWeek, airingToday } = this.state;
    return (
      <TVPresenter
        loading={loading}
        airingThisWeek={airingThisWeek}
        popular={popular}
        airingToday={airingToday}
      />
    );
  }
}
