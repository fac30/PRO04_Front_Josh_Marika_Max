const fetchData = async (table: string, method: string): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:3000/${table}`, {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };
