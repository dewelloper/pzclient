export default class AjaxPaymentFormSettings {
	constructor(client) {
		this.client = client;
	}

	retrieve(data) {
		return this.client.post('/login',data);
	}
}
