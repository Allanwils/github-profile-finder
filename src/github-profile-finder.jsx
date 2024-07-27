import { useState, useEffect } from "react";
import User from "./user";
import './styles.css';
function GitHubProfileFinder() {
  const [username, setUsername] = useState("Allanwils");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData(url) {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    //console.log(data);
    if(data){
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search by username"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null? <User user={userData}/>: <p>No user found</p>
      }
    </div>
  );
}

export default GitHubProfileFinder;