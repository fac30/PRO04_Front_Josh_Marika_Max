import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch-data";
import NewsletterForm from "../components/NewsLetterForm";
import LatestReleases from "../components/homepage-sections/LatestReleases"; // Corrected the typo
import StaffPicks from "../components/homepage-sections/StaffPicks";
import GenreSection from "../components/homepage-sections/BrowseByGenre";
import { Vinyl, Genre } from "../utils/types"; // Ensure Product is imported

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
  const [productData, setProductData] = useState<Vinyl[]>([]); // Changed to Vinyl[]
  const [cartItems, setCartItems] = useState<Vinyl[]>([]); // Changed to Vinyl[]

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

        // Ensure you map product data to include quantity
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
  }, [setCartCount]); // Add setCartCount as a dependency

  const addToCart = (product: Vinyl) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );

    let updatedCart;
    if (existingProductIndex >= 0) {
      // Product exists in cart, increment quantity
      updatedCart = cartItems.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      // Product doesn't exist in cart, add with quantity 1
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
      <GenreSection genres={genres} genreVinyls={genreVinyls} />

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
