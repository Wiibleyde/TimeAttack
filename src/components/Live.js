import React from 'react';
import axios from 'axios';

function Live() {
    let leaderboard = [];
    const url = "https://api-ta.bonnell.fr/api/raceLeaderboard?raceId=1";
    // Axios get with Authorization header
    axios.get(url, {
        headers: {
            'Authorization': 'WsSQR7xj7LKmBYmOf7gXDDPstfcXQkvy1le18PRHEhULdq84w5YgTZClSEKMpdSP',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        withCredentials: true
    })
    .then((response) => {
        console.log(response);
        leaderboard = response.data;
    })
    .catch((error) => {
        console.log(error);
    });
    console.log(leaderboard);

    return (
        <div className="Live">
            {/* Leaderboard from time attack API */}
            <div className="leaderboard">
                <h1 className="title text-3xl">Leaderboard</h1>
                <div className="leaderboardTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Nom</th>
                                <th>Temps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((racer, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{racer.RacerName}</td>
                                    <td>{racer.Duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Live;