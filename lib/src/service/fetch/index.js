import axios from "axios";

const { useState, useEffect } = require("react");
const { View, Text } = require("react-native");

export const FetchDemo = () => {
  const [data, setData] = useState([]);
  const [datanew, setDataNew] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    getData();
    getAxiosData();
  }, []);

  const getData = () => {
    fetch("https://reactnative.dev/movies.json")
      .then((respone) => respone.json())
      .then((res) => setData(res.movies));
  };

  getAxiosData = () => {
    // const obj = axios.create({
    //   baseURL: "https://reactnative.dev/",
    //   timeout: 1000,
    //   headers: { "X-Custom-Header": "foobar" },
    // });
    // obj.get("movies.json").then((respone) => {
    //   setDataNew(JSON.stringify(respone.data));
    // });
    axios
      .get("https://reactnative.dev/movies.json")
      .then((respone) => {
        setDataNew(JSON.stringify(respone.data));
        setError(null);
      })
      .catch((e) => {
        setDataNew(null);
        setError(e.message);
      });
  };

  return (
    <View>
      <Text>{data[0]?.title}</Text>
      <Text>{(datanew?.length && datanew) || error}</Text>
    </View>
  );
};
