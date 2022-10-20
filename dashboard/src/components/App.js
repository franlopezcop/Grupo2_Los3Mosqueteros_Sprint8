import { Switch, Route } from "react-router-dom";

import SideBar from "./SideBar";
import EmptyWrapper from "./EmptyWrapper";
import ContentWrapper from "./ContentWrapper";
import SearchMovies from "./SearchMovies";
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import Chart from "./Chart";
import NotFound from "./NotFound";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <EmptyWrapper>
        <Switch>
          <Route exact path="/" component={ContentWrapper} />
          <Route path="/search-movies" component={SearchMovies} />
          <Route path="/content-movies" component={ContentRowMovies} />
          <Route path="/last-movie-in-db" component={LastMovieInDb} />
          <Route path="/genres-in-db" component={GenresInDb} />
          <Route path="/movies-chart" component={Chart} />
          <Route component={NotFound} />
        </Switch>
      </EmptyWrapper>
    </div>
  );
}

export default App;
