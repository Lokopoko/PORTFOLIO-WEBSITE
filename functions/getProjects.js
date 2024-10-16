exports.handler = async function (event, context) {
  // In a real application, you would fetch this data from a database
  const projects = [
    { id: 1, name: "Project 1", description: "A cool project" },
    { id: 2, name: "Project 2", description: "Another awesome project" },
    { id: 3, name: "Project 3", description: "Yet another great project" },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(projects),
  };
};
