import socket

# UDPサーバー設定
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(("localhost", 5500))  # IPとポートを指定

print("UDPサーバーが起動しました。")

while True:
    data, address = server_socket.recvfrom(1024)  # 1024バイトまでのデータを受信
    print(f"受信データ: {data.decode()} from {address}")
    
    # クライアントに応答を返す
    response = "メッセージを受信しました".encode()
    server_socket.sendto(response, address)
