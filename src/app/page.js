import Recorder from '@/components/Recorder';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center mt-20 gap-6">
        <h1 className="text-5xl text-blue-500 font-bold mb-8">
          React audio recorder
        </h1>
        <Recorder />
      </div>
    </>
  );
}
