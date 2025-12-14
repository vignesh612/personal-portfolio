import { ChatKit, useChatKit } from "@openai/chatkit-react";

export default function Chat() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        const res = await fetch("/api/chatkit/session", {
          method: "POST",
        });
        const { client_secret } = await res.json();
        return client_secret;
      },
    },
  });

  return (
    <div className="flex justify-center">
      <ChatKit
        control={control}
        className="h-[600px] w-[360px]"
      />
    </div>
  );
}

