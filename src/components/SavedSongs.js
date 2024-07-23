import { DecodeHtmlEntities } from "@/lib/func";
import { PlayIcon } from "lucide-react";



export default async function SongList() {
  let songs = await fetch(
    "https://saavn.dev/api/playlists?link=https%3A%2F%2Fwww.jiosaavn.com%2Ffeatured%2Fhindi-viral-hits%2FKsNSWjWnbqxFo9wdEAzFBA__&page=0&limit=20"
  );
  songs = await songs.json();
  songs = songs.data.songs;

  return (
    <>
      <div className="list">
        {songs.map((song, index) => {
          // if (index >= 1) return;
          return <SongCard key={index} song={song} />;
        })}
      </div>
    </>
  );
}

export const SongCard = ({ song }) => {
  return (
    <div className="shadow-sm m-2 backdrop-blur-2xl flex justify-between px-4 h-14
    p-1
    ">
      <div className=" flex text-sm">
        <img
          className="w-14 h-14 object-cover"
          src={song.image[2].url}
          alt={song.name}
        />
        <div className="ml-4 block mt-1">
          <h2 className="">{<DecodeHtmlEntities>{song.name}</DecodeHtmlEntities>}</h2>
          {/* <p className="">{song.album.name}</p> */}
          <p className=" text-xs">
            
            {song.artists.primary.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <button className="
        hover:text-teal-200
        " >
          <PlayIcon/>
        </button>
      </div>
    </div>
  );
};
