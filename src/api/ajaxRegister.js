export default class AjaxRegister {
	constructor(client) {
        this.client = client;
        this.resourceUrl = '/register';
	}

	retrieve(data) {
		return this.client.post('/register',data);
	}
}
