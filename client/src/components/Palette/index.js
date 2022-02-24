import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Paper from '@mui/material/Paper';

import { useMutation } from "@apollo/client";
import { ADD_PALETTE } from "../../utils/mutations";
import { QUERY_PALETTE, QUERY_ME } from "../../utils/queries";

const PaletteForm = () => {
  const [PaletteText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPalette, { error }] = useMutation(ADD_PALETTE, {
    update(cache, { data: { addPalette } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { palette } = cache.readQuery({ query: QUERY_PALETTE });
        cache.writeQuery({
          query: QUERY_PALETTE,
          data: { palette: [addPalette, ...palette] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, palette: [...me.palette, addPalette] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPalette({
        variables: { PaletteText },
      });
      
      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Paper elevation={3} />
      <CardContent>
        <form
          className="flex-row justify-center justify-space-between-md align-stretch"
          onSubmit={handleFormSubmit}
        >
          <Typography gutterBottom variant="h8" component="div">
            Description
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <TextareaAutosize
              aria-label="maximum height"
              maxRows={5}
              style={{ width: 300 }}
              value={PaletteText}
              className={`m-0 ${
                characterCount === 280 || error ? "text-error" : ""
              }`}
              className="form-input col-12 col-md-9"
              onChange={handleChange}
            />
          </Typography>

          <CardActions>
            <Button size="small" type="submit">
              Submit
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaletteForm;
