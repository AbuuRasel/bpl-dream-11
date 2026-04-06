import Card from '../Ui/Card'
import React from 'react';


const AvailablePlayers = ({ players,setCoin,coin,setSelectedPlayer,SelectedPlayer }) => {
  console.log(players, 'players')
  // const {name}={players}
  return (
    <div className='container mx-auto mt-10'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 border-gray-400'>
        {
          players.map((player,ind )=> {
            return <div key={ind} className="card bg-base-100 shadow-sm">
              <figure className="h-100 overflow-hidden">
                <img className='w-full h-full object-cover'
                  src={player.playerImage}
                  alt="Shoes" />
              </figure>
              <Card key={player.playerName} player={player} setCoin={setCoin} coin={coin} setSelectedPlayer={setSelectedPlayer} SelectedPlayer={SelectedPlayer}></Card>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default AvailablePlayers;