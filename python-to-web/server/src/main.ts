import dgram from "dgram";

const PORT = 5500;
const HOST = "localhost";

const server = dgram.createSocket("udp4");

// メッセージを受信するイベント
server.on("message", (msg, rinfo) => {
  console.log(
    `受信メッセージ: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`
  );
  // 必要に応じて応答を返す
  const response = Buffer.from("メッセージを受け取りました");
  server.send(response, rinfo.port, rinfo.address, (err) => {
    if (err) console.error("応答の送信エラー:", err);
  });
});

// エラーハンドリング
server.on("error", (err) => {
  console.error(`サーバーエラー: ${err.stack}`);
  server.close();
});

// サーバーを開始
server.bind(PORT, HOST, () => {
  console.log(`UDPサーバーが起動しました。${HOST}:${PORT}`);
});
