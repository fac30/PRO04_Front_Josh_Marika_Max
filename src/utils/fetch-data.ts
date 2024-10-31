type FetchDataResponse = { [key: string]: any };

const fetchData = async (
  table: string,
  method: string,
  body?: string,
): Promise<FetchDataResponse> => {
  try {
    const response = await fetch(`http://localhost:3000/${table}`, {
      // const response = await fetch(`http://18.175.143.146:3000/${table}`, {
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
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };
