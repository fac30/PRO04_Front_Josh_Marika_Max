const fetchData = async (
  table: string,
  method: string,
  body?: string | object,
): Promise<any> => {
  try {
    const response = await fetch(`http://ec2-18-175-142-8.eu-west-2.compute.amazonaws.com/${table}`, {
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
