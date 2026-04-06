import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const SelectedPlayers = ({SelectedPlayer,setSelectedPlayer,setCoin,coin}) => {
  // console.log(SelectedPlayer , 'selectedPlayer')
  const handleDeleteSelectedPlayer=(player)=>{
    console.log(player, 'player')
    const filteredPlayers = SelectedPlayer.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
    setSelectedPlayer(filteredPlayers)
    setCoin(coin + player.price )
    toast.info("Player Remove Succesfully" , {position:'top-center'})
  }
  return (
    <div className='container mx-auto'>
     {SelectedPlayer.length === 0?<div className='sm:h-90 h-[400px] flex flex-col gap-5 items-center justify-center text-center'>
      <h2 className='font-semibold text-3xl text-gray-400'>No Player Selected</h2>
      <p className='font-semibold text-gray-400'>Please Selecte Player</p>
     </div>:
     SelectedPlayer.map((player,ind) => {
      return <div key={ind} className='flex items-center justify-between gap-6 p-10 border rounded-2xl my-4'>
        <div className='flex gap-5 items-center'>
          <img className='h-[100px] w-[100px] rounded-md' src={player.playerImage} alt={player.playerName} />
          <div>
            <h2 className='flex items-center gap-2 font-semibold text-xl text-center'><FaUser/> {player.playerName}</h2>
            <p className='font-semibold'>{player.playerType}</p>
            <p className='font-semibold'>$ {player.price}</p>
          </div>
        </div>
        <button className='btn text-red-500' onClick={()=>handleDeleteSelectedPlayer(player)}><MdDelete></MdDelete></button>

      </div>
     })
     }
    </div>
  );
};

export default SelectedPlayers;