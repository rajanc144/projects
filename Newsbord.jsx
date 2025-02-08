import { useEffect, useState } from "react";
import Newsitem from "./newsitem";

const Newsbord = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);  // New state to track loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2b2739c04a2044cb97ee5a6e1aed513a`;
        const response = await fetch(url);
        const data = await response.json();

        // Check if the API returns articles data
        if (data.articles) {
          setArticles(data.articles);
        } else {
          console.error('No articles found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after the data is fetched
      }
    };

    fetchData();
  }, [category]);

  return (
      <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
    <div  style={{
          display: "flex",
          flexWrap: "wrap", // Enables wrapping of cards
          justifyContent: "center", // Centers the cards
          gap: "20px", // Adds space between cards
          padding: "20px",
        }} >
      
      {loading ? (
        <p>Loading...</p>  // Show loading while fetching the data
      ) : articles.length > 0 ? (
        articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p>No articles available at the moment.</p>  // Show if no articles are returned
      )}
    </div>
    </div>

  );
};

export default Newsbord;
