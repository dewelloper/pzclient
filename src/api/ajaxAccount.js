export default class AjaxAccount {
	constructor(client) {
        this.client = client;
        this.resourceUrl = '/customer-account';
	}

	retrieve(data) {
		return this.client.post('/customer-account',data);
    }
    
    update(id, data) {
		return this.client.put('/customer-account', data);
	}
}
