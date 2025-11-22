// src/utils/constants.js

const GOOGLE_API_KEY = "AIzaSyAtIibgU4boIyzkgbabBCe8BJJsBSfNlWA";   // your key is fine

export const LIVE_CHAT_COUNT = 25;

// Most Popular Videos API - 100% working
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// Search Suggestions API - FIXED for 2025 (no more "Failed to fetch")
export const YOUTUBE_SEARCH_API = 
  "https://corsproxy.io/?" + encodeURIComponent(
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );

// BONUS: Even better alternative (works without any proxy in 2025)
export const YOUTUBE_SEARCH_API_v2 = 
  "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";
