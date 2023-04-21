import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TopicSearch() {
  const [topic, setSearchTopic] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (topic) {
      navigate(`/articles?topic=${topic}`);
    }
  };

  const handleOptionClick = (event) => {
    setSearchTopic(event.target.value);
  };

  return (
    <form className="topicSearch" onSubmit={handleFormSubmit}>
      {/* <label htmlFor="topic">Choose topic: </label> */}
      <select id="topic" value={topic} onChange={handleOptionClick}>
        <option>Choose topic . . .</option>
        <option value="football">Football</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
      </select>
      <button type="submit">Go</button>
    </form>
  );
}

export default TopicSearch;
