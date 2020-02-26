import React from 'react';
import './slot-container.styles.scss';
import Reel from '../reel/reel.component';

const SlotContainer = (reels) => {
    return (
        <div className='slot-container'>
            <div className='reel'>
                <div>botleft</div>
                <div>midleft</div>
                <div>topleft</div>
            </div>
            <div className='reel'>
                <div>botmid</div>
                <div>midmid</div>
                <div>topmid</div>
            </div>
            <div className='reel'>
                <div>botright</div>
                <div>midright</div>
                <div>leftright</div>
            </div>
        </div>
    )
}

export default SlotContainer;

// <div className='slot-container'>
// <div className='reel'>
// <div>{reels[0][0]}</div>
// <div>{reels[0][1]}</div>
// <div>{reels[0][2]}</div>
// </div>
// <div className='reel'>
// <div>{reels[1][0]}</div>
// <div>{reels[1][1]}</div>
// <div>{reels[1][2]}</div>
// </div>
// <div>
// <div>{reels[2][0]}</div>
// <div>{reels[2][1]}</div>
// <div>{reels[2][2]}</div>
// </div>
// </div>