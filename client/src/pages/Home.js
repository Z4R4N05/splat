import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swatch from "../components/Swatch";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const [color6, setColor6] = useState("");
  const [color7, setColor7] = useState("");
  const [copied, setCopy] = useState(false);

  const colors = [
    "#9253a1",
    "#f063a4",
    "#2dc5f4",
    "#fcee21",
    "#f16164",
    "#70327e",
    "#a42963",
  ];

  return (
    <main>
      <Navbar />
      <div className="Home">
        <h1>Welcome to Color Palette</h1>
        <h2>Start editing your colors</h2>
      </div>

      <Grid
        container
        wrap="wrap"
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={5}>
          <Swatch colors={colors} value={color1} setValue={setColor1} />
          <CopyToClipboard text={[color1]} onCopy={() => setCopy(true)}>
            <button>Copy</button>
          </CopyToClipboard>
        </Grid>

        <Grid item xs={5}>
          <Swatch colors={colors} value={color2} setValue={setColor2} />
          <CopyToClipboard text={[color2]} onCopy={() => setCopy(true)}>
            <button>Copy</button>
          </CopyToClipboard>
        </Grid>

        <Grid item xs={5}>
          <Swatch colors={colors} value={color3} setValue={setColor3} />
          <CopyToClipboard text={[color3]} onCopy={() => setCopy(true)}>
            <button>Copy</button>
          </CopyToClipboard>
        </Grid>

        <Grid item xs={5}>
          <Swatch colors={colors} value={color4} setValue={setColor4} />
          <CopyToClipboard text={[color4]} onCopy={() => setCopy(true)}>
            <button>Copy</button>
          </CopyToClipboard>
        </Grid>

        <Grid item xs={5}>
          <Swatch colors={colors} value={color5} setValue={setColor5} />
          <CopyToClipboard text={[color5]} onCopy={() => setCopy(true)}>
            <button>Copy</button>
          </CopyToClipboard>
        </Grid>

        <Grid item xs={5}>
          <Swatch colors={colors} value={color6} setValue={setColor6} />
          <CopyToClipboard text={[color6]} onCopy={() => setCopy(true)}>
            <button>Copy</button>
          </CopyToClipboard>
        </Grid>

        <Grid item xs={5}>
          <Swatch colors={colors} value={color7} setValue={setColor7} />
          <CopyToClipboard text={[color7]} onCopy={() => setCopy(true)}>
            <button>Copy</button>
          </CopyToClipboard>
        </Grid>

        {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
      </Grid>
      <Footer />
    </main>
  );
};

export default Home;
