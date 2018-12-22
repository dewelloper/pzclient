export default class AjaxLogin {
	constructor(client) {
        this.client = client;
        this.resourceUrl = '/login';
	}

	retrieve(data) {
		return this.client.post('/login',data);
	}
}
