import React from 'react';
import axios from 'axios';
import useInterval from '../useInterval';

async function fetchData() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('http://localhost:3001/api/raceLeaderboard?raceId=1', {
                headers: {
                    'Authorization': 'FIrtp3TpCLW8e1Mg5oSo7crcB1uYKvI7xgg257UDBiRsKgqsw5hEVBOSl9OaGTXZ',
                },
                withCredentials: true
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
                                <tr key={index} className="border-b-2 border-green-600 {index == 1 ? 'bg-green-700' : 'bg-green-600'}">
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