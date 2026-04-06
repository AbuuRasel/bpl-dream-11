import React, { use, useState } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ PlayerPromis, setCoin, coin }) => {
  // console.log(PlayerPromis)
  const players = use(PlayerPromis)

  const [selected, setSelected] = useState('available');
  const [SelectedPlayer, setSelectedPlayer] = useState([]);
  return (
    <div>
      {/* Selected Player (4/6) */}

      <div className='flex container mx-auto mt-20 justify-between'>
        {selected === 'available' ? <h1 className='text-3xl font-bold'>Avalable Player ({players.length - SelectedPlayer.length})</h1> : <h1 className='text-3xl font-bold'>Selected Player ({SelectedPlayer.length}/{players.length})</h1>
        }
        <div>
          <button onClick={() => setSelected('available')} className={`btn ${selected === "available" ? 'bg-[#E7FE29]' : 'bg-[#FFFFFF]'}  rounded-r-none rounded-l-xl`}>Available</button>
          <button onClick={() => setSelected('selected')} className={`btn ${selected === "selected" ? 'bg-[#E7FE29]' : 'bg-[#FFFFFF]'} rounded-l-none rounded-r-xl`}>Selected ({SelectedPlayer.length})</button>
        </div>
      </div>

      {
        selected === 'available' ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} setSelectedPlayer={setSelectedPlayer} SelectedPlayer={SelectedPlayer}></AvailablePlayers> : <SelectedPlayers SelectedPlayer={SelectedPlayer} setSelectedPlayer={setSelectedPlayer} setCoin={setCoin} coin={coin}></SelectedPlayers>
      }

    </div>
  );
};

export default Players;