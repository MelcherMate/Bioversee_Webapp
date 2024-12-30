import React from "react";
import "./InfoCard.css";

interface InfoCardProps {
  title: string;
  subtitle: string;
  content: string;
  imagePath: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  content,
  imagePath,
}) => {
  return (
    <div className="infoCard">
      <h1 id="title">{title}</h1>
      <img src={imagePath} alt={title} id="image" />
      <h2 id="subtitle">{subtitle}</h2>
      <p id="text">{content}</p>
    </div>
  );
};

export default InfoCard;
