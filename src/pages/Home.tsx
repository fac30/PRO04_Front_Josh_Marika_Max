import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch-data";
import NewsletterForm from "../components/NewsLetterForm";
import LatestReleases from "../components/homepage-sections/LatestRelases"; // Corrected the typo
import StaffPicks from "../components/homepage-sections/StaffPicks";
import GenreSection from "../components/homepage-sections/BrowseByGenre";
import { Vinyl, Genre } from "../utils/types";

const Home = () => {
  const [latestReleases, setLatestReleases] = useState<Vinyl[]>([]);
  const [staffPicks, setStaffPicks] = useState<Vinyl[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreVinyls, setGenreVinyls] = useState<{
    [key: string]: Vinyl[] | null;
  }>({});

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData: Genre[] = await fetchData("genres", "GET");
        setGenres(genresData);

        for (const genre of genresData) {
          const vinyls: Vinyl[] = await fetchData(
            `vinyls?genre=${genre.genre}`,
            "GET",
          );
          setGenreVinyls((prev) => ({
            ...prev,
            [genre.genre]: vinyls.length > 0 ? vinyls : null,
          }));
        }
      } catch (error) {
        console.error("Error fetching genre data:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data: Vinyl[] = await fetchData("vinyls", "GET");

        const sortedLatest = data
          .sort((a, b) => {
            const dateA = new Date(a.release_date || 0).getTime();
            const dateB = new Date(b.release_date || 0).getTime();
            return dateB - dateA;
          })
          .slice(0, 8);

        setLatestReleases(sortedLatest);

        const shuffledVinyls = [...data]
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);

        setStaffPicks(shuffledVinyls);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div
      id="main-content"
      className="items-center justify-center text-center px-4 py-4 flex flex-col"
      role="main"
    >
      <h2 className="text-4xl font-bold mb-4 mt-11 text-text-primary">
        Welcome to Font Hill Records
      </h2>
      <p className="text-xl mb-6 text-text-secondary">
        Discover and collect your favorite vinyl records
      </p>

      <LatestReleases products={latestReleases} />
      <StaffPicks products={staffPicks} />
      <GenreSection genres={genres} genreVinyls={genreVinyls} />

      <section className="mb-12 max-w-90" aria-labelledby="newsletter">
        <h3
          id="newsletter"
          className="text-2xl font-semibold mb-14 mt-20 text-text-primary"
        >
          Sign Up To Our Newsletter:
        </h3>
        <NewsletterForm />
      </section>
    </div>
  );
};

export default Home;
