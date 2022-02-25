import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Posts = ({ palettes, title }) => {
  if (!palettes.length) {
    return <h3>No Palettes Yet</h3>;
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div>
          <h3>{title}</h3>
          {palettes &&
            palettes.map((palettes) => (
              <div key={palettes._id} className="card mb-3">
                <p className="card-header">
                  <Link
                    to={`/profile/${palettes.username}`}
                    style={{ fontWeight: 700 }}
                    className="text-light"
                  >
                    {palettes.username}
                  </Link>{" "}
                  palettes on {palettes.createdAt}
                </p>
                <div className="card-body">
                  <Link to={`/palettes/${palettes._id}`}>
                    <p>{palettes.postText}</p>
                    <p className="mb-0">
                      Comments: {palettes.commentCount} || Click to{" "}
                      {palettes.commentCount ? "see" : "comment"} the discussion!
                    </p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Posts;
