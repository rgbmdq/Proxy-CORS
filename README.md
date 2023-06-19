
## Usage
1. Ensure that you have completed the installation steps.
2. Open the `index.js` file in your preferred code editor.
3. Modify the `port` variable if you want to use a different port for the server (default is 3000).
4. Save the changes.

## Running the Server
To start the server and activate the CORS proxy:

1. Open a terminal.
2. Navigate to the project directory.
3. Run the following command:

node index.js


Once the server is running, you can make GET requests to other servers by sending requests to the `/proxy` endpoint. The proxy will fetch the requested URL and forward the response back to your client-side code.

## API Endpoints

### GET /proxy
This endpoint serves as the main proxy route. It accepts a query parameter `url`, which specifies the URL of the server you want to proxy the request to.

Example usage:

GET http://localhost:3000/proxy?url=https://example.com/api/data


Replace `https://example.com/api/data` with the actual URL you want to access.

The proxy will fetch the specified URL and return the response data.

## Error Handling
If any error occurs while fetching the data from the target server, the proxy will respond with a 500 status code and an error message: "Error occurred while fetching data".

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
