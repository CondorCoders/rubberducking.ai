import { Chat } from "@/components/Chat";

export default async function Home() {
  return (
    <main className="flex bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 h-screen flex-col gap-4 pt-12">
      <Chat />
    </main>
  );
}
