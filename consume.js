const Kafka = require('no-kafka');

// Create an instance of the Kafka consumer

const consumer = new Kafka.SimpleConsumer({"connectionString":"localhost:9092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        var message = m.message.value.toString('utf8');
    
        console.log(message);
        
    });
};

// Subscribe to the Kafka topic
return consumer.init().then(function () {
    return consumer.subscribe('topico-teste', 0, 
                         {time: Kafka.EARLIEST_OFFSET}, data);
});
