import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-4xl">
        <div className="relative z-10 p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Bienvenue sur ATF
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Votre application de gestion de tâches et de suivi des activités.
          </p>
        </div>
      </div>
    </div>
  );
}
