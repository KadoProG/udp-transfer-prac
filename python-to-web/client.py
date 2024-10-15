import socket

# TypeScriptサーバーのホストとポート
HOST = 'localhost'
PORT = 5500

# UDPソケットを作成
client_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# 送信するメッセージ
message = "こんにちは、TypeScriptサーバー！".encode()

# メッセージを送信
client_socket.sendto(message, (HOST, PORT))
print("メッセージを送信しました")

# サーバーからの応答を受信
data, server = client_socket.recvfrom(1024)
print(f"サーバーからの応答: {data.decode()}")

# ソケットを閉じる
client_socket.close()
