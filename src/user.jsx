function User({ user }) {
  const {
    avatar_url,
    followers,
    public_repos,
    following,
    name,
    login,
    created_at,
  } = user;
  const createdDate = new Date(created_at).toDateString();

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>Joined on : {createdDate}</p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          {followers}
          <p></p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
