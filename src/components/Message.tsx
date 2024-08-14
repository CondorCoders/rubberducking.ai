import Image from "next/image";

interface MessageProps {
  role: "function" | "system" | "user" | "assistant" | "data" | "tool";
  content: string;
}

export const Message = ({ role, content }: MessageProps) => {
  return (
    <div className="bg-white/80 rounded-lg flex gap-4 p-5">
      <Image
        alt={`${role} Profile Pic`}
        className="size-[40px]"
        width={40}
        height={40}
        src={role === "user" ? "/User.png" : "/Patricio.png"}
      />
      <div className="flex flex-col flex-wrap">
        <strong>{role === "user" ? "Tú" : "Patricio"}</strong>
        {content}
      </div>
    </div>
  );
};
