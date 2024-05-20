let storedData = [];

exports.handler = async (event, context) => {
  console.log('Event:', event);
  console.log('Stored Data:', storedData);

  if (event.httpMethod === "POST") {
    const data = JSON.parse(event.body);
    storedData.push(data);
    console.log('Data after push:', storedData);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Données reçues", data, storedData }),
    };
  } else if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify({ storedData }),
    };
  } else {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }
};

