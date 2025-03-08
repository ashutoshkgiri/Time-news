import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { NewsCard } from "../components/NewsCard";

export const HomeScreen = () => {
  const API_KEY = "72e57f63d2d448f38a3b103b2fba4199";

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const newsUrl = `https://newsapi.org/v2/everything?q=apple&from=2025-03-07&to=2025-03-07&sortBy=popularity&apiKey=${API_KEY}`;

    try {
      const res = await axios.get(newsUrl);
      setNews(res.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("News API Failed to fetch");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time fast news app</Text>

      {loading ? (
        <ActivityIndicator size="large" color="red" style={styles.loader} />
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <NewsCard news={item} />}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  loader: {
    marginTop: 20,
  },
  list: {
    paddingBottom: 20,
  },
});
