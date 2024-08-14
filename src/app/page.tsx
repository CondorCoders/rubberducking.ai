import { Chat } from "@/components/Chat";

export default async function Home() {
  return (
    <main className="flex rela bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 min-h-screen flex-col p-24">
      <Chat />
    </main>
  );
}
