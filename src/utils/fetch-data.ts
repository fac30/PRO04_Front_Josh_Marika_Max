const fetchData = async (table: string): Promise<any> => {
  try {
    const response = await fetch(`http://localhost:3000/${table}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } 
};

export { fetchData };
