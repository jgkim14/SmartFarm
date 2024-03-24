[![header](https://capsule-render.vercel.app/api?type=venom&height=300&color=0:038C7F,45:04BF8A,60:04D98B,100:74BF04&text=JMS%20Smart%20Farm&fontAlign=50&fontColor=ffffff&textBg=false)](https://github.com/jgkim14/SmartFarm.git)

## 스마트팜 HW 깃허브
[![스마트팜 프로젝트](https://capsule-render.vercel.app/api?type=waving&height=300&color=0:038C7F,30:04BF8A,70:04D98B,100:74BF04&text=Smart%20Farm%20HW&fontColor=ffffff&textBg=false&desc=Link%20:%20CutTheWire_JMS_smart_farm.git&descAlignY=53&fontAlignY=35&descAlign=61)](https://github.com/CutTheWire/JMS_smart_farm.git)


# nginx, node, mysql 스택 실행 방법
docker compose up -d

# 파이썬 이미지 생성 명령어
docker build -f Dockerfile -t python .

# 파이썬 컨테이너 생성 명령어
docker run python
docker run -p 5100:5100 python
# MySQL 접속 명령어
docker exec -it jmeduserver-mysql-1 mysql -u root -p
비밀번호 : 1234

# 첫 실행 시 MySQL 초기 설정
mysql 폴더 내의 first_setting.sql을 data 폴더에 복사하기
docker exec -it jmeduserver-mysql-1 mysql -u root -p 입력하고 비밀번호 1234 입력
source var/lib/mysql/first_setting.sql 입력
