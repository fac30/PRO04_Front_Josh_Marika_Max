const fetchData = async (
  table: string,
  method: string,
  body?: string,
): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:3000/${table}`, {
      // const response = await fetch(`http://18.175.143.146:3000/${table}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: method === "POST" ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };
