import { useEffect, useState } from "react";
import ProductCard from "../components/productsCard/ProductCard";
import { fetchData } from "../utils/fetch-data";
import GenreCard from "../components/common/GenreCard";

interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image_url: string;
  release_date: string;
  genre: string;
}

interface Genre {
  id: number;
  genre: string;
}

const Home = () => {
  const [latestReleases, setLatestReleases] = useState<Product[]>([]);
  const [staffPicks, setStaffPicks] = useState<Product[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreVinyls, setGenreVinyls] = useState<{
    [key: string]: Product | null;
  }>({});
  const [cartCount, setCartCount] = useState(0);

  // Fetch genres
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData: Genre[] = await fetchData("genres", "GET");
        setGenres(genresData);

        // Fetch a vinyl record for each genre
        genresData.forEach(async (genre) => {
          const vinyls: Product[] = await fetchData(
            `vinyls?genre=${genre.genre}`,
            "GET",
          );
          setGenreVinyls((prev) => ({
            ...prev,
            [genre.genre]: vinyls.length > 0 ? vinyls[0] : null,
          }));
        });
      } catch (error) {
        console.error("Error fetching genre data:", error);
      }
    };

    fetchGenres();
  }, []);

  // Fetch product data (latest releases and staff picks)
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data: Product[] = await fetchData("vinyls", "GET");

        const sortedLatest = data
          .sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime(),
          )
          .slice(0, 8);

        setLatestReleases(sortedLatest);

        const shuffledVinyls = data.sort(() => 0.5 - Math.random()).slice(0, 4);

        setStaffPicks(shuffledVinyls);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
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

      {/* Latest Releases */}
      <section className="mb-12 max-w-90" aria-labelledby="new-on-store">
        <h3
          id="new-on-store"
          className="text-2xl font-semibold mb-14 text-text-primary"
        >
          Latest Releases:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {latestReleases.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Staff's Picks */}
      <section className="mb-12 max-w-90" aria-labelledby="staff-picks">
        <h3
          id="staff-picks"
          className="text-2xl font-semibold mb-14 mt-20 text-text-primary"
        >
          Staff's Picks:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {staffPicks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Browse By Genre */}
      <section className="mb-12 max-w-90" aria-labelledby="genres">
        <h3
          id="genres"
          className="text-2xl font-semibold mb-14 mt-20 text-text-primary"
        >
          Browse By Genre:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {genres.slice(7, 12).map((genre) => (
            <GenreCard
              key={genre.id}
              genre={genre.genre}
              product={genreVinyls[genre.genre]}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
