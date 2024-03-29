from flask import Flask, jsonify, request
import mysql.connector
from mysql.connector import Error
import asyncio
import aiomysql
import websockets
import json
from datetime import datetime, timedelta

app = Flask(__name__)

# 데이터베이스 연결
def connect_to_database():
    try:
        connection = mysql.connector.connect(
            host='mysql',
            port='3306',
            user='root',
            password='1234',
            database='jmedu'
        )
        if connection.is_connected():
            db_Info = connection.get_server_info()
            print("MySQL 서버 버전:", db_Info)
            cursor = connection.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("연결된 데이터베이스:", record)
            return connection
    except Error as e:
        print(f"데이터베이스 연결 실패: {e}")
        return None

# 대시보드에 제공할 24시간 기록
async def get_records24():
    conn = await connect_to_database()
    if conn is None:
        return jsonify({"error": "데이터베이스에 연결할 수 없습니다."}), 500

    end_time = datetime.now()
    start_time = end_time - timedelta(days=1)

    async with conn.cursor(aiomysql.DictCursor) as cursor:
        await cursor.execute("""
        SELECT * FROM record
        WHERE created_at BETWEEN %s AND %s
        ORDER BY created_at ASC;
        """, (start_time, end_time))
        records = await cursor.fetchall()

    conn.close()
    return records

# 데이터 삽입
@app.post('/data')
def insert_data():
    sensor_data = request.json
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    conn = connect_to_database()
    if conn is None:
        return jsonify({"error": "데이터베이스에 연결할 수 없습니다."}), 500
    cursor = conn.cursor()
    cursor.execute("INSERT INTO smartFarm (IsRun, sysfan, wpump, led, humidity, temperature, ground1, ground2, created_at, updated_at, deleted_at) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, NULL)",
                   (sensor_data['IsRun'], sensor_data['sysfan'], sensor_data['wpump'], sensor_data['led'], sensor_data['humidity'], sensor_data['temperature'], sensor_data['ground1'], sensor_data['ground2'], current_time, current_time))
    conn.commit()
    conn.close()
    return {'message': '데이터 삽입 성공 '}

# 요청처리

@app.route("/server/temp", methods=['GET', 'POST'])
async def temp():
    records = await get_records("temp")
    return {"temp": records}

@app.route("/server/humidity", methods=['GET', 'POST'])
async def humidity():
    records = await get_records("humidity")
    return {"humidity": records}

@app.route("/server/soil_1", methods=['GET', 'POST'])
async def soil_1():
    records = await get_records("soil_1")
    return {"soil_1": records}

@app.route("/server/soil_2", methods=['GET', 'POST'])
async def soil_2():
    records = await get_records("soil_2")
    return {"soil_2": records}

# 1분 간격으로 대시보드에 데이터를 보내는 웹 소켓
async def time(websocket, path):
    while True:
        records = asyncio.run(get_records24())
        await websocket.send(json.dumps(records))
        await asyncio.sleep(60)

start_server = websockets.serve(time, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

# 센서 데이터를 받기 위한 Pydantic 모델 정의
class SensorData(BaseModel):
    IsRun: bool
    sysfan: bool
    wpump: bool
    led: bool
    humidity: float
    temperature: float
    ground1: int
    ground2: int

#서버 온
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5002)
