// Importar o CSS que criamos
import "../styles/game-card.css";

// Definir o tipo do jogo (se não existir, criamos)
interface Game {
  id: number;
  title: string;
  description: string;
  category: string;
  points: number;
  icon: string;
}

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    // Adicionamos o atributo data-category para aplicar cores diferentes
    <div className="game-card" data-category={game.category}>
      <div className="game-icon-container">
        <div className="game-icon-emoji">{game.icon}</div>
      </div>
      
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      
      <div className="game-category">{game.category}</div>
      
      <div className="game-points">
        ⭐ {game.points} pontos
      </div>
    </div>
  );
  
}
