import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => setData(res.data.msg))
    .catch(() => setData("Access Denied"));
  }, []);

  return (
    <h1 className="text-xl">{data}</h1>
  );
}
