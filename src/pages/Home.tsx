import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch-data";
import LatestReleases from "../components/homepage-sections/LatestReleases";
import StaffPicks from "../components/homepage-sections/StaffPicks";
import GenreSection from "../components/homepage-sections/BrowseByGenre";
import { Vinyl, Genre } from "../utils/types";
import { useCartContext } from "../Context/Cart";

const Home = () => {
  const [latestReleases, setLatestReleases] = useState<Vinyl[]>([]);
  const [staffPicks, setStaffPicks] = useState<Vinyl[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreVinyls, setGenreVinyls] = useState<{
    [key: string]: Vinyl[] | null;
  }>({});
  const { dispatch } = useCartContext();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData: Genre[] = await fetchData("genres", "GET");
        setGenres(genresData);

        const covers: { [key: string]: string | null } = {}; // Initialize an empty object to hold covers

        for (const genre of genresData) {
          const vinyls: Vinyl[] = await fetchData(
            `vinyls?genre=${genre.genre}`,
            "GET",
          );

          setGenreVinyls((prev) => ({
            ...prev,
            [genre.genre]: vinyls.length > 0 ? vinyls : null,
          }));

          if (vinyls.length > 0) {
            const randomVinyl =
              vinyls[Math.floor(Math.random() * vinyls.length)];
            covers[genre.genre] = randomVinyl.image_url;
          } else {
            covers[genre.genre] = null;
          }
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

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

    fetchGenres();
    fetchProductData();
  }, []);

  const addToCart = (product: Vinyl) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

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
      <LatestReleases vinyl={latestReleases} addToCart={addToCart} />
      <StaffPicks vinyl={staffPicks} addToCart={addToCart} />
      <div id="genres">
        <GenreSection genres={genres} genreVinyls={genreVinyls} />
      </div>
      <section
        className="mb-12 max-w-90"
        aria-labelledby="newsletter"
      ></section>
    </div>
  );
};

export default Home;
