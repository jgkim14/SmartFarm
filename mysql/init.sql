GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '1234' WITH GRANT OPTION;
FLUSH PRIVILEGES;


-- jmedu 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS jmedu;

SHOW WARNINGS;

USE jmedu;

CREATE TABLE record (
  id INT AUTO_INCREMENT,
  pump BOOL,
  sys_fan BOOL,
  led BOOL,
  
  temp DECIMAL(4,1),/*온도*/
  humidity DECIMAL(4,1),/*습도*/
  soil_1 DECIMAL(4,1),/*토양센서1*/
  soil_2 DECIMAL(4,1),/*토양센서2*/

  created_at DATETIME,
  updated_at DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE manualcontrol_record (
  id INT AUTO_INCREMENT,

  sys_fan BOOL,
  led BOOL,

  created_at DATETIME,
  updated_at DATETIME,
  PRIMARY KEY (id)
);
