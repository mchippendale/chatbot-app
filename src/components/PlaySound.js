import Sound from "react-sound";
import Rainforest from './sounds/rainforest.mp3'
import { useContext } from 'react'
import { ChatbotContext } from '../ChatbotContext'

const PlaySound = (
    handleSongLoading, 
    handleSongPlaying,
    handleSongFinishedPlaying,
) => {

    const {
        isPlaying,
    } = useContext(ChatbotContext)

    return (
        <div>
            <Sound
                url={Rainforest}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED }
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
                loop={false}
            />
        </div>
    )
}

export default PlaySound;