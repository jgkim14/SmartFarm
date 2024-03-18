from flask import Flask, jsonify, request
import mysql.connector
from mysql.connector import Error
import asyncio
import aiomysql
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '서버 정상 동작중'



########################함수들

#데이터베이스 연결
def connect_to_database():
    try:
        connection = mysql.connector.connect(
            host='mysql:3306',
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


#대시보드에 제공할 24시간 기록
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



async def get_temperature_records():
    conn = await connect_to_database()
    async with conn.cursor() as cursor:
        await cursor.execute("SELECT temp FROM record;")
        records = await cursor.fetchall()
        await conn.close()
        return records

####################요청처리




@app.route('/server/records_dashboard', methods=['GET'])
def fetch_records():
    records = asyncio.run(get_records24())
    return jsonify([dict(record) for record in records])


@app.get("server/temp", methods=['GET'])
async def temperatures():
    records = await get_temperature_records()
    return {"temperatures": records}

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5002)
