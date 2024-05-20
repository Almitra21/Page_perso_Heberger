exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
      };
    }
  
    const data = JSON.parse(event.body);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Données reçues", data }),
    };
  };
  