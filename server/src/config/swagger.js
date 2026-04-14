const options = {
  definition: {
    openapi: "3.0.0",
    info: {
        title: "Habit Tracker API",
        version: "1.0.0",
    },
    servers: [
        {
        url: "http://localhost:5000",
        },
    ],
    components: {
        securitySchemes: {
        bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
        },
        },
    },
},
  apis: ["./src/**/*.js"],
};

export default options;