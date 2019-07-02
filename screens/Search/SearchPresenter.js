import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, GREY_COLOR, TINT_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";
import NonePresenter from "../../components/NonePresenter";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;

const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);
  width: ${Layout.width / 1.6};
  border-radius: 20px;
  padding: 10px;
  text-align: center;
`;

const SearchResults = styled.ScrollView`
  margin-top: 20px;
`;

const SearchPresenter = ({
  loading,
  tvResults,
  searchTerm,
  movieResults,
  handleSearchUpdate,
  onSubmitEditing,
  displayNone
}) => (
  <Container>
    <InputContainer>
      <Input
        onChangeText={handleSearchUpdate}
        value={searchTerm}
        returnKeyType={"search"}
        placeholder={"Search movies and tv"}
        placeholderTextColor={GREY_COLOR}
        onSubmitEditing={onSubmitEditing}
      />
    </InputContainer>

    <SearchResults>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults ? (
            movieResults.length > 0 ? (
              <Section title="Movie Results">
                {movieResults
                  .filter(movie => movie.poster_path !== null)
                  .map(movie => (
                    <MovieItem
                      key={movie.id}
                      id={movie.id}
                      posterPhoto={movie.poster_path}
                      title={movie.title}
                      voteAvg={movie.vote_average}
                      overview={movie.overview}
                    />
                  ))}
              </Section>
            ) : tvResults.length > 0 ? (
              (displayNone = false)
            ) : (
              (displayNone = true)
            )
          ) : null}

          {tvResults ? (
            tvResults.length > 0 ? (
              <Section title="TV Results">
                {tvResults
                  .filter(tv => tv.poster_path !== null)
                  .map(tv => (
                    <MovieItem
                      key={tv.id}
                      id={tv.id}
                      posterPhoto={tv.poster_path}
                      title={tv.name}
                      voteAvg={tv.vote_average}
                      overview={tv.overview}
                    />
                  ))}
              </Section>
            ) : movieResults.length > 0 ? (
              (displayNone = false)
            ) : (
              (displayNone = true)
            )
          ) : null}
        </>
      )}
      <NonePresenter display={displayNone} />
    </SearchResults>
  </Container>
);

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  tvResults: PropTypes.array,
  movieResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSearchUpdate: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired
};

export default SearchPresenter;
