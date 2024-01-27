
const errorMiddleware = (err, req, res, next) => {
    let { statusCode, message } = err;

    // Default to 500 server error if the status code is not set
    statusCode = statusCode || 500;
    message = message || "Internal Server Error";

    // Log the error for debugging purposes
    console.error(`[Error] ${err.stack}`);

    // Error response structure
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};

module.exports = errorMiddleware;