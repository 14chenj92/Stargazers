import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Star from "./pages/SeeStar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SingleStar from "./pages/SingleStar";
import Profile from "./pages/Profile";
import MoonPhases from "./pages/MoonPhases";
import StarCharts from "./pages/StarCharts";
import Homepage from "./pages/Homepage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Horoscopes from "./pages/Horoscopes";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/me" element={<Profile />} />
            <Route path="/profiles/:username" element={<Profile />} />
            <Route path="/thoughts/:thoughtId" element={<SingleStar />} />
            <Route path="/stars" element={<Star />} />
            <Route path="/horoscopes" element={<Horoscopes />} />
            <Route path="/moonphases" element={<MoonPhases />} />
            <Route path="/starcharts" element={<StarCharts />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
