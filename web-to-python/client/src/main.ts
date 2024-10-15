import dgram from "dgram";

const client = dgram.createSocket("udp4");
const message = Buffer.from("こんにちは、Pythonサーバー！");

client.send(message, 0, message.length, 5500, "localhost", (err) => {
  if (err) {
    console.error("送信エラー:", err);
    client.close();
    return;
  }
  console.log("メッセージが送信されました。");
});

// 応答を受信
client.on("message", (msg, rinfo) => {
  console.log(`サーバーからの応答: ${msg.toString()}`);
  client.close();
});
