![1](https://user-images.githubusercontent.com/61135042/146673161-fb729d2f-79df-439e-9743-281dbff81c8a.png)

# CN466-final-mqtt

## Other work

### [API](https://github.com/6110613228/cn466-final-api)

### [Line&LIFF](https://github.com/6110613228/cn466-final-line)

### [Model (TensorflowJS)](https://github.com/6110613228/cn466-final-model)

---

## Table of contents

- [CN466-final-mqtt](#cn466-final-mqtt)
  - [Other work](#other-work)
    - [API](#api)
    - [Line&LIFF](#lineliff)
    - [Model (TensorflowJS)](#model-tensorflowjs)
  - [Table of contents](#table-of-contents)
  - [MQTT](#mqtt)
    - [หน้าที่](#หน้าที่)
    - [Design](#design)
  - [Demo](#demo)

---

## MQTT

cucumberS.ino เป็บไฟล์ของบอร์ดที่จะทำการ subscribe ข้อมูลที่ topic ที่กำหนดเเละ Publish ข้อมูลของ sensors ไปที่ hivemq

mqtt.js ทำหน้าที่ในการ Subscribe hivemq ใน topic ที่กำหนดเเละทำการส่งข้อมูลที่ได้มาไปเก็บไว้ใน mongodb

หน้าที่อีกอย่างในงานนี้คือการ Generate board id เเละ location ให้กับ board

### หน้าที่

Publish ข้อมูลจาก sensors เเละ Insert ข้อมูลเข้า mongodb

### Design

![CN466 IoT](https://user-images.githubusercontent.com/61135042/146675601-34fad557-5c8b-4eb7-87b6-1c3f17175fb3.png)

---

## Demo
