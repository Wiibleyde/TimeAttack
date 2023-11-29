import React from 'react';
import axios from 'axios';
import useInterval from '../useInterval';

async function fetchData() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('https://api-ta.bonnell.fr/api/raceLeaderboard?raceId=1', {
                headers: {
                    'Authorization': 'WsSQR7xj7LKmBYmOf7gXDDPstfcXQkvy1le18PRHEhULdq84w5YgTZClSEKMpdSP',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            resolve(response.data);
        } catch (error) {
            reject(error);
        }
    })    
}

function Live() {
    const [leaderboard, setLeaderboard] = React.useState([]);
    React.useEffect(() => {
        fetchData().then((data) => {
            setLeaderboard(data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    React.useEffect(() => {
        const header = document.getElementById('header');
        const footer = document.getElementById('footer');
        header.classList.add('hidden');
        footer.classList.add('hidden');
        return () => {
            header.classList.remove('hidden');
            footer.classList.remove('hidden');
        }
    });

    useInterval(() => {
        fetchData().then((data) => {
            setLeaderboard(data);
        }).catch((error) => {
            console.log(error);
        })
    }
    , 500);

    if (leaderboard === "Unauthorized") {
        return (
            <div className="Live">
                <div className="leaderboard">
                    <div className="leaderboardTable">
                        <table className="table-auto w-full text-center">
                            <thead className="bg-green-600 text-white">
                                <tr className="border-b-2 border-green-600">
                                    <th>Position</th>
                                    <th>Nom</th>
                                    <th>Temps</th>
                                </tr>
                            </thead>
                            <tbody className="text-white">
                                <tr className="border-b-2 border-green-600 bg-green-600">
                                    <td>Chargement</td>
                                    <td>Chargement</td>
                                    <td>Chargement</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="Live">
            <div className="leaderboard">
                <div className="leaderboardTable">
                    <table className="table-auto w-full text-center">
                        <thead className="bg-green-600 text-white">
                            <tr className="border-b-2 border-green-600">
                                <th>Position</th>
                                <th>Nom</th>
                                <th>Temps</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {leaderboard.map((racer, index) => (
                                <tr key={index} className="border-b-2 border-green-600">
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