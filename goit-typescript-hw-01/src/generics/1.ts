import axios from "axios";

async function fetchData(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching from ${url}: ${error}");
  }
}

type User = {
  id: number;
  name: string;
};

async function example() {
  const user = await fetchData<User>("https://api.example.com/user/1");
  console.log(user.id, user.name);
}
