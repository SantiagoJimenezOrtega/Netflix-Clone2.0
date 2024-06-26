import { Movie } from "../typings";
import Image from "next/image";

interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-40 md:min-w-[260px] md:hover:scale-105 hover:border-white hover:border-2 rounded">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="rounded-sm object-fit:cover md:rounded"
        layout="fill"
        alt="Movie Thumbnail Image"
      />
    </div>
  );
}

export default Thumbnail;
