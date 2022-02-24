import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Palette from "../components/Palette";


import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_PALETTES, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PALETTES);
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const palette = data?.palette || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <Navbar />
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <Palette />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <palette
              palette={palette}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
        </div>
      <Footer />
    </main>
  );
};

export default Home;
