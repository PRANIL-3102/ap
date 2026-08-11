function SocialCard({ name, icon, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card"
    >
      <span className="social-icon">{icon}</span>

      <span className="social-name">{name}</span>
    </a>
  );
}

export default SocialCard;