exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  // In a real application, you would send an email or store the message in a database
  console.log(`Received message from ${name} (${email}): ${message}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Message sent successfully!" }),
  };
};
