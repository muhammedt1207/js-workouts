import React, { useState, useEffect, useRef } from 'react';
import { Download, Upload } from 'lucide-react';

const TextToSpeech = ({ uploadToCloudinary }) => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('');
  const [voices, setVoices] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const getVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    getVoices();
    window.speechSynthesis.onvoiceschanged = getVoices;
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleVoiceChange = (e) => {
    setVoice(e.target.value);
  };

  const handleSpeak = () => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      const selectedVoice = voices.find(v => v.name === voice);
      if (selectedVoice) utterance.voice = selectedVoice;

      utterance.onend = () => {
        resolve();
      };

      window.speechSynthesis.speak(utterance);
    });
  };

  const handleGenerateAudio = async () => {
    await handleSpeak();
    const audio = await createAudioBlob();
    setAudioUrl(URL.createObjectURL(audio));
  };

  const createAudioBlob = () => {
    return new Promise((resolve) => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const mediaStreamDestination = audioContext.createMediaStreamDestination();
      const mediaRecorder = new MediaRecorder(mediaStreamDestination.stream);
      const audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        resolve(audioBlob);
      };

      const oscillator = audioContext.createOscillator();
      oscillator.connect(mediaStreamDestination);

      mediaRecorder.start();
      oscillator.start();

      handleSpeak().then(() => {
        oscillator.stop();
        mediaRecorder.stop();
      });
    });
  };

  const handleDownload = () => {
    if (audioUrl) {
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = 'generated_audio.wav';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleUpload = async () => {
    if (audioUrl) {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const file = new File([blob], 'generated_audio.wav', { type: 'audio/wav' });
      await uploadToCloudinary(file);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text to convert to speech"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <select
        value={voice}
        onChange={handleVoiceChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="" disabled>Select a voice</option>
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleGenerateAudio}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Generate Audio
      </button>
      {audioUrl && (
        <div className="space-y-2">
          <audio ref={audioRef} controls src={audioUrl} />
          <div className="flex space-x-2">
            <button
              onClick={handleDownload}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md"
            >
              <Download className="mr-2 h-4 w-4" /> Download
            </button>
            <button
              onClick={handleUpload}
              className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md"
            >
              <Upload className="mr-2 h-4 w-4" /> Upload to Cloudinary
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;
