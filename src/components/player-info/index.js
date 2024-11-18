import React from "react";
import players1 from "../../players.json";
export default function PlayerDetail({ close, i, addPlayer, selectedPlayers }) {
	const [players] = React.useState([...players1]);
	const player = players[i];
	return (
		//Style fixed to center
		<div
			className="card outlined mt-0"
			style={{
				position: "fixed",
				left: "50%",
				transform: "translateX(-50%)",
				padding: "20px",
				width: "500px",
				top: "30%",
			}}
			data-testid={`player-${player.name}-details`}
		>
			<h1 className="card-title" style={{ textAlign: "center" }}>
				Player Detail
			</h1>
			<p>
				<strong>Name:</strong> <span data-testid={`player-detail-${player.name.replace('-', ' ')}-name`}>{player.name}</span>
			</p>
			<p>
				<strong>Type:</strong> <span data-testid={`player-detail-${player.name.replace('-', ' ')}-${player.type}`}>{player.type}</span>
			</p>
			<p>
				<strong>Batting:</strong> <span data-testid={`player-detail-${player.name.replace('-', ' ')}-${player.battingSkill}`}>{player.battingSkill}</span>
			</p>
			<p>
				<strong>Bowling:</strong> <span data-testid={`player-detail-${player.name.replace('-', ' ')}-${player.bowlingSkill}`}>{player.bowlingSkill}</span>
			</p>
			<button
				disabled={selectedPlayers.includes(player)}
				onClick={() => addPlayer(i)}
				data-testid={`player-detail-${player.name.replace('-', ' ')}-add`}
			>
				Select
			</button>
			<button onClick={close} className="danger" data-testid={`player-detail-${player.name.replace('-', ' ')}-close`}>
				Close
			</button>
		</div>
	);
}
