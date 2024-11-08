import React from 'react';
import './hero.css'; // Import your CSS file

function HeroSection() {
    return (
        <div className="relative w-full">
            <video 
                className="css-yj28j3 h-[615px] w-full object-cover" 
                autoPlay 
                muted // Muted to allow autoplay
                controlsList="nofullscreen nodownload" 
                disablePictureInPicture 
                disableRemotePlayback 
                loop 
                playsInline 
                poster="" 
                preload="metadata" 
                tabIndex="-1" 
                data-play="1"
            >
                <source 
                    src="https://media.rolex.com/video/upload/c_limit,w_2440/f_auto:video/q_auto:eco/v1/rolexcom/new-watches/2024/hub-watches/videos/cover/rolex-watches-collection-hub-cover-autoplay" 
                    type="video/mp4" 
                />
            </video>
        </div>
    );
}

export default HeroSection;
