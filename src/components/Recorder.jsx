'use client';

import { useAudioRecorder } from 'react-audio-voice-recorder';
import { Button } from './ui/button';
import { Check, Mic, Pause, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Recorder() {
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
  } = useAudioRecorder();

  const [shouldCancel, setShouldCancel] = useState(false);
  const [audioURL, setAudioURL] = useState(null);

  useEffect(() => {
    console.log('useEffect');

    if (!recordingBlob) return;

    console.log('should cancel');

    if (shouldCancel) {
      setShouldCancel(false);
      return;
    }

    // recordingBlob will be present at this point after 'stopRecording' has been called
    console.log('received blob: ', recordingBlob);
    const url = URL.createObjectURL(recordingBlob);
    setAudioURL(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordingBlob]);

  const handleStartRecording = () => {
    console.log('handleStartRecording');
    startRecording();
  };

  const handleAcceptRecording = () => {
    console.log('handleAcceptRecording');
    stopRecording();
  };

  const handleCancelRecording = () => {
    console.log('handleCancelRecording');
    setShouldCancel(true);
    stopRecording();
  };

  const handleTogglePauseResume = () => {
    console.log('handlePauseRecording');
    togglePauseResume();
  };

  return (
    <>
      <div className="flex items-center">
        <div className="mr-3 ">
          <Button size="xs" variant="outline" onClick={handleStartRecording}>
            <Mic className="h-4 w-4" />
          </Button>
        </div>

        {isRecording && (
          <>
            <div className="flex items-center bg-secondary rounded-2xl px-5 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
              <span className="ml-2 text-sm font-medium animate-pulse">
                Recording
              </span>
              <span className="ml-5 font-mono text-sm font-medium">
                {formatRecordingTime(recordingTime)}
              </span>
            </div>
            <div className="flex ml-3 gap-1.5">
              <Button
                size="xs"
                variant="outline"
                onClick={handleTogglePauseResume}
              >
                {isPaused ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Pause className="h-4 w-4" />
                )}
              </Button>
              <Button
                size="xs"
                variant="outline"
                onClick={handleAcceptRecording}
              >
                <Check className="h-4 w-4" />
              </Button>
              <Button
                size="xs"
                variant="outline"
                onClick={handleCancelRecording}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </div>

      {audioURL && <audio controls className=" p-2" src={audioURL}></audio>}
    </>
  );
}

const formatRecordingTime = (time) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};
