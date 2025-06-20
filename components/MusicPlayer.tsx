'use client';

import { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  
  // Ganti dengan path file musik Anda
  const musicUrl = '/music/background-music.mp3';

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/10">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 rounded-full hover:bg-white/20 transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </button>
        <div className="w-48">
          <AudioPlayer
            src={musicUrl}
            autoPlay
            loop
            volume={0.2}
            muted={isMuted}
            showSkipControls={false}
            showJumpControls={false}
            layout="horizontal-reverse"
            customVolumeControls={[]}
            customAdditionalControls={[]}
            className="bg-transparent shadow-none"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
