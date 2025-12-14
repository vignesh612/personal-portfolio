import { ChatKit, useChatKit } from "@openai/chatkit-react";

export default function AIagent() {
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
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        AI Agent
      </h2>

      <p className="text-gray-700 text-lg mb-6">
        Interact with my AI agent powered by OpenAI workflows.
      </p>

      <div className="flex justify-center">
        <ChatKit
          control={control}
          className="h-[600px] w-full max-w-[420px] rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

