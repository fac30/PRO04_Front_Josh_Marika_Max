import { fetchData } from "./fetch-data";

interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
}

const productData = async (): Promise<Product[]> => {
  try {
    const data: Product[] = await fetchData("vinyl", "GET");
    return data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
};

export { productData };
