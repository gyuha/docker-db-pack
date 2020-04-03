db.createUser({
  user: "USER_ID",        // 사용자 아이디
  pwd: "USER_PASSWORD",   // 사용자 암호
  roles: [{ 
    role: "readWrite", 
    db: "work_database"   // 사용자 데이터 베이스
  }]
})

db.work_database.insert({
  name: "user"
})
