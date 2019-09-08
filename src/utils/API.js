import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
		'Authorization': 'Bearer 9becd6d004cc14f65a086d91ffd363fd',
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		"Access-Control-Allow-Origin": "*"
	},
  responseType: "json"
});