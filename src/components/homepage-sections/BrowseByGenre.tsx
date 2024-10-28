import { Genre, Vinyl } from "../../utils/types";
import GenreCard from "../common/GenreCard";

interface GenreSectionProps {
  genres: Genre[];
  genreVinyls: { [key: string]: Vinyl[] | null };
}

const GenreSection = ({ genres, genreVinyls }: GenreSectionProps) => {
  return (
    <section className="mb-12 max-w-90" aria-labelledby="genres">
      <h3
        id="genres"
        className="text-2xl font-semibold mb-14 mt-20 text-text-primary"
      >
        Browse By Genre:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {genres.slice(7, 12).map((genre) => {
          const vinyls = genreVinyls[genre.genre];
          const vinyl = vinyls && vinyls.length > 0 ? vinyls[0] : null;

          return <GenreCard key={genre.id} genre={genre.genre} vinyl={vinyl} />;
        })}
      </div>
    </section>
  );
};

export default GenreSection;
