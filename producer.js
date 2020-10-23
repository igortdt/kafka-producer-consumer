var kafka = require("kafka-node"),
Producer = kafka.Producer

client = new kafka.KafkaClient(),

producer = new Producer(client);


let count = 0;

producer.on("ready", function() {
  console.log("ready");
  setInterval(function() {
    payloads = [
      { topic: "topico-teste", messages: `Message ${count}.`, partition: 0 }
    ];

    producer.send(payloads, function(err, data) {
      console.log(data);
      count += 1;
    });
  }, 2000);
});

producer.on("error", function(err) {
  console.log(err);
});