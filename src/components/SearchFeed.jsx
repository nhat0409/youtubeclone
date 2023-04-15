import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        p={2}
        mb={2}
        sx={{ color: "white" }}
      >
        Search result for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ mr: { sm: "150px" } }} />

        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
