import React, { useState } from 'react';
import { FaFlag } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';
import { toast } from 'react-toastify';

const Card = ({ player,setCoin,coin,setSelectedPlayer,SelectedPlayer }) => {
  const [isSelected,setIsSelected]= useState(false);

  const handleChoosePlayer = ()=>{

    let newCoin = coin - player.price;
    if(newCoin >=0){
      setCoin(coin - player.price);
    }else {
      toast.error("Not Enough coin to purces this player", {position:'top-center'});
      return;
    }

    toast.success(`${player.playerName} is Selected` , {position:'top-center'});
    setIsSelected(true);
    
    setSelectedPlayer([...SelectedPlayer, player])
  }

  return (
    <div className="card-body">
      <h2 className="card-title"><HiUser></HiUser>{player.playerName}</h2>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <FaFlag></FaFlag>
          <h3>{player.playerCountry}</h3>
        </div>
        <button className='btn btn-ghost'>{player.playerType}</button>
      </div>
      <div className="divider"></div>
      <h2 className='font-bold'>Rating: {player.rating}</h2>

      <div className='flex justify-between items-center gap-5'>
        <p className='font-bold'>{player.battingStyle}</p>
        <p className='font-bold text-right'>{player.bowlingStyle}</p>
      </div>
      <div className='flex justify-between items-center gap-5'>
        <p className='font-bold'>Price: ${player.price}</p>
        <button type="button" onClick={handleChoosePlayer} className='btn rounded-2xl' disabled={isSelected}>
          {isSelected == true ? 'Selected' : 'Choose Player'}
        </button>
      </div>
    </div>
  );
};

export default Card;