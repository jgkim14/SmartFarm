FROM python:3.12-bullseye
WORKDIR /app
RUN pip install Flask
RUN pip install mysql-connector-python
RUN pip install aiomysql
RUN pip install websockets
COPY ./sources .
EXPOSE 5002
CMD [ "python", "./main.py" ]




# 이미지 생성 명령어
# docker build -f Dockerfile -t python .
#

# 컨테이너 생성 명령어
#docker run -p 5100:5100 python
# 이미지 생성 명령어
# docker build -f Dockerfile -t python .
#

# 컨테이너 생성 명령어
#docker run -p 5100:5100 python