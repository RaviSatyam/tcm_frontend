import React, { useState } from 'react'
import PairHashPack from '../hashconnect/PairHashPack';

function Button() {
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(true);
    };
  return (
    <div>
      <button onClick={handleClick}>Connect Wallet</button>
      {showComponent && <PairHashPack/>}
    </div>
  )
}

export default Button
