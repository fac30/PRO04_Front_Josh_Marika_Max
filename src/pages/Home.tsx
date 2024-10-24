import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch-data";
import NewsletterForm from "../components/NewsLetterForm";
import LatestReleases from "../components/homepage-sections/LatestReleases";
import StaffPicks from "../components/homepage-sections/StaffPicks";
import GenreSection from "../components/homepage-sections/BrowseByGenre";
import { Vinyl, Genre } from "../utils/types";

interface HomeProps {
  setCartCount: (count: number) => void;
}

const Home = ({ setCartCount }: HomeProps) => {
  const [latestReleases, setLatestReleases] = useState<Vinyl[]>([]);
  const [staffPicks, setStaffPicks] = useState<Vinyl[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreVinyls, setGenreVinyls] = useState<{
    [key: string]: Vinyl[] | null;
  }>({});
  const [coversByGenre, setCoversByGenre] = useState<{
    [key: string]: string | null;
  }>({});
  const [productData, setProductData] = useState<Vinyl[]>([]);
  const [cartItems, setCartItems] = useState<Vinyl[]>([]);

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

          // Get a random vinyl cover image for the genre
          if (vinyls.length > 0) {
            const randomVinyl =
              vinyls[Math.floor(Math.random() * vinyls.length)];
            covers[genre.genre] = randomVinyl.coverImageUrl; // Adjust this to match your cover image property
          } else {
            covers[genre.genre] = null; // No vinyls found for this genre
          }
        }

        setCoversByGenre(covers); // Update state with the new covers object
      } catch (error) {
        console.error("Error fetching genre data:", error);
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

        const productsWithQuantity = data.map((product) => ({
          ...product,
          quantity: 0,
        }));
        setProductData(productsWithQuantity);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchGenres();
    fetchProductData();

    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      setCartCount(parsedCart.length);
    }
  }, [setCartCount]);

  const addToCart = (product: Vinyl) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );

    let updatedCart;
    if (existingProductIndex >= 0) {
      updatedCart = cartItems.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    const newCartCount = updatedCart.reduce(
      (acc, item) => acc + item.quantity,
      0,
    );
    setCartCount(newCartCount);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
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
      <GenreSection
        genres={genres}
        genreVinyls={genreVinyls}
        coversByGenre={coversByGenre}
      />{" "}
      {/* Pass coversByGenre */}
      <section className="mb-12 max-w-90" aria-labelledby="newsletter">
        <h3
          id="newsletter"
          className="text-2xl font-semibold mb-14 mt-20 text-text-primary"
        >
          Sign Up To Our Newsletter:
        </h3>
      </section>
      <NewsletterForm />
    </div>
  );
};

export default Home;
