const mqtt = require('mqtt');
const { MongoClient } = require('mongodb');
const process = require('process');

// Connection URI
const uri =
  'mongodb+srv://dbuser:zoOJscYQ6XlNqPTq@cn466-final.1lueq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri);

//
// MQTT //
//
const mqttClient = mqtt.connect('mqtt://broker.hivemq.com');

// TOPIC
const TOPIC = ['p/sensors/cucumber'];

// MQTT on Connect
mqttClient.on('connect', () => {
  console.log('HIVEMQ connected!');
  mqttClient.subscribe(TOPIC, () => {
    console.log('Topic subscribed!');
  });
});

// MQTT on message
mqttClient.on('message', async (topic, payload) => {
  let data = JSON.parse(payload);

  delete data.angular_velocity;
  delete data.acceleration;

  data['BID'] = Math.round(Math.random() * (4 - 1) + 1);

  if (data['BID'] == 1 || data['BID'] == 2) {
    data['location'] = 'bangkok';
  } else if (data['BID'] == 3) {
    data['location'] = 'pathum thani';
  } else {
    data['location'] = 'chiang mai';
  }

  data['timestamp'] = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok',
  });

  console.log(
    'pressure: ',
    data.pressure,
    'temperature: ',
    data.temperature,
    'humidity: ',
    data.humidity,
    'timestamp',
    data.timestamp
  );

  try {
    await client.connect();
    client
      .db('Sensors')
      .collection('data')
      .insertOne(data, (err, response) => {
        if (err) throw err;
        if (response.acknowledged) console.log('Inserted.');
      });
  } catch (e) {
    console.log(e.stack);
  }
});

mqttClient.on('end', () => {
  console.log('MQTT disconnect');
});

//
// END MQTT //
//

// On exit program
process.on('SIGINT', (code) => {
  console.log(`About to exit with code: ${code}`);

  // Close MongoDB client
  client.close();

  // Exit
  process.exit();
});
