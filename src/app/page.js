import React from "react";
import AppNavbar from "@/components/NavBar";
import AppSearch from "@/components/SearchBar";
import SavedSongs from "@/components/SavedSongs";
export default function App() {
  return (
    <div>
      <AppNavbar/>
      <AppSearch/>
      <SavedSongs/>
    </div>
  );
}
