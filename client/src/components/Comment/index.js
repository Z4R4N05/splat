import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ commentid }) => {
  const [commentBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentBody, commentid },
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <Typography variant="body2" color="text.secondary">
          <TextareaAutosize
            aria-label="maximum height"
            maxRows={5}
            style={{ width: 300 }}
            value={commentBody}
            className={`m-0 ${
              characterCount === 280 || error ? "text-error" : ""
            }`}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          />
        </Typography>

        <Button size="small" type="submit">
          Submit
        </Button>
      </form>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default CommentForm;
