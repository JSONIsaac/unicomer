

const { express, app, PORT } = require("./config");

app.get('/', function (req, res) {
    res.json({
        message:"Hello world",
        data:[
            {
              "name": "Realizar API para mensajes de texto",
              "dueDate": "2022-02-03",
              "priority": "P3",
              "status": "ABIERTO",
              "assigned": {
                "fullName": "Carlos Daniel Marcucci Rivera",
                "email": "carlos_marcucci@unicomer.com",
                "phoneNumber": 10102020,
                "phoneExtension": 502
              }
            },
            {
              "name": "Dashboard de productos vendidos por mes",
              "dueDate": "2022-02-11",
              "priority": "P1",
              "status": "COMPLETADO",
              "assigned": {
                "fullName": "Carlos Daniel Marcucci Rivera",
                "email": "carlos_marcucci@unicomer.com",
                "phoneNumber": 10102020,
                "phoneExtension": 502
              }
            }
          ]
    });
});

app.listen(PORT,(err=>{
    console.log(`Server running at port ${PORT}...`);
}))
