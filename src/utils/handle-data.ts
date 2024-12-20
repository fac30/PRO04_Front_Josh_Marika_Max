const handleData = async (
  query: string,
  method: string,
  body?: any,
): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:3000/${query}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
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

export { handleData };
