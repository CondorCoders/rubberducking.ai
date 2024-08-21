import Image from "next/image";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";

interface MessageProps {
  role: "function" | "system" | "user" | "assistant" | "data" | "tool";
  content: string;
  isLoading: boolean;
}

export const Message = ({ role, content, isLoading }: MessageProps) => {
  return (
    <div className="w-full bg-white/80 rounded-lg flex flex-col gap-4 p-5">
      <div className="flex items-center gap-2">
        <div>
          <Image
            alt={`${role} Profile Pic`}
            width={40}
            height={40}
            src={role === "user" ? "/User.png" : "/Patricio.png"}
          />
        </div>
        <strong>{role === "user" ? "Tú" : "Patricio"}</strong>
      </div>
      <div className="w-full space-y-4">
        {isLoading && role !== "user" && !content.length ? (
          <span>...</span>
        ) : (
          <Markdown
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");

                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    language={match[1]}
                    PreTag="div"
                    showLineNumbers
                    customStyle={{
                      margin: 0,
                      padding: "1.5rem 1rem",
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className}>{children}</code>
                );
              },
            }}
          >
            {content}
          </Markdown>
        )}
      </div>
    </div>
  );
};
