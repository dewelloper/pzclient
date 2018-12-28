import AjaxClient from './ajaxClient';
import ApiClient from './apiClient';
import WebStoreClient from './webstoreClient';
import ProductCategories from './api/productCategories';
import Products from './api/products/products';
import ProductOptions from './api/products/options';
import ProductOptionValues from './api/products/optionValues';
import ProductVariants from './api/products/variants';
import ProductImages from './api/products/images';
import Sitemap from './api/sitemap';
import Theme from './api/theme/theme';
import ThemeSettings from './api/theme/settings';
import ThemeAssets from './api/theme/assets';
import ThemePlaceholders from './api/theme/placeholders';
import CustomerGroups from './api/customerGroups';
import Customers from './api/customers';
import AjaxCart from './api/ajaxCart';
import Orders from './api/orders/orders';
import OrderDiscounts from './api/orders/discounts';
import OrderTransactions from './api/orders/transactions';
import OrderItems from './api/orders/items';
import OrderStatuses from './api/orders/statuses';
import ShippingMethods from './api/shippingMethods';
import PaymentMethods from './api/paymentMethods';
import PaymentGateways from './api/paymentGateways';
import AjaxShippingMethods from './api/ajaxShippingMethods';
import AjaxPaymentMethods from './api/ajaxPaymentMethods';
import AjaxPaymentFormSettings from './api/ajaxPaymentFormSettings';
import Countries from './api/countries';
import Currencies from './api/currencies';
import Text from './api/text';
import Settings from './api/settings';
import CheckoutFields from './api/checkoutFields';
import Pages from './api/pages';
import Marks from './api/marks';
import Models from './api/models';
import Years from './api/years';
import Engines from './api/engines';
import Fuels from './api/fuels';
import Pcategories from './api/pcategories';
import Tokens from './api/tokens';
import Redirects from './api/redirects';
import Webhooks from './api/webhooks';
import Files from './api/files';
import AppSettings from './api/apps/settings';
import WebStoreAccount from './webstore/account';
import WebStoreServices from './webstore/services';
import WebStoreServiceSettings from './webstore/serviceSettings';
import WebStoreServiceActions from './webstore/serviceActions';
import WebStoreServiceLogs from './webstore/serviceLogs';
import Xmlimporter from './api/xmlimporter';
import Login from './api/AjaxLogin';
import Register from './api/AjaxRegister';
import Account from './api/AjaxAccount';

export default class Client {
	constructor(options = {}) {
		this.apiBaseUrl = options.apiBaseUrl || '/api/v1';
		this.apiToken = options.apiToken;
		this.ajaxBaseUrl = options.ajaxBaseUrl || '/ajax';
		//this.webstoreToken = options.webstoreToken;

		const apiClient = new ApiClient({
			baseUrl: this.apiBaseUrl,
			token: this.apiToken
		});
		const ajaxClient = new AjaxClient({ baseUrl: this.ajaxBaseUrl });
		//const webstoreClient = new WebStoreClient({ token: this.webstoreToken });

		this.products = new Products(apiClient);
		this.products.options = new ProductOptions(apiClient);
		this.products.options.values = new ProductOptionValues(apiClient);
		this.products.variants = new ProductVariants(apiClient);
		this.products.images = new ProductImages(apiClient);
		this.productCategories = new ProductCategories(apiClient);
		this.customers = new Customers(apiClient);
		this.orders = new Orders(apiClient);
		this.orders.discounts = new OrderDiscounts(apiClient);
		this.orders.transactions = new OrderTransactions(apiClient);
		this.orders.items = new OrderItems(apiClient);
		this.orderStatuses = new OrderStatuses(apiClient);
		this.shippingMethods = new ShippingMethods(apiClient);
		this.paymentMethods = new PaymentMethods(apiClient);
		this.paymentGateways = new PaymentGateways(apiClient);
		this.customerGroups = new CustomerGroups(apiClient);
		this.sitemap = new Sitemap(apiClient);
		this.theme = new Theme(apiClient);
		this.theme.settings = new ThemeSettings(apiClient);
		this.theme.assets = new ThemeAssets(apiClient);
		this.theme.placeholders = new ThemePlaceholders(apiClient);
		this.countries = new Countries(apiClient);
		this.currencies = new Currencies(apiClient);
		this.text = new Text(apiClient);
		this.settings = new Settings(apiClient);
		this.checkoutFields = new CheckoutFields(apiClient);
		this.pages = new Pages(apiClient);
		this.marks = new Marks(apiClient);
		this.models = new Models(apiClient);
		this.years = new Years(apiClient);
		this.engines = new Engines(apiClient);
		this.fuels = new Fuels(apiClient);
		this.pcategories = new Pcategories(apiClient);
		this.tokens = new Tokens(apiClient);
		this.redirects = new Redirects(apiClient);
		this.webhooks = new Webhooks(apiClient);
		this.files = new Files(apiClient);
		this.apps = {};
		this.apps.settings = new AppSettings(apiClient);
		this.xmlimporter = new Xmlimporter(apiClient);
		this.login = new Login(apiClient);
		this.register = new Register(apiClient);
		this.account = new Account(apiClient);

		this.ajax = {};
		this.ajax.products = new Products(ajaxClient);
		this.ajax.sitemap = new Sitemap(ajaxClient);
		this.ajax.cart = new AjaxCart(ajaxClient);
		this.ajax.countries = new Countries(ajaxClient);
		this.ajax.currencies = new Currencies(ajaxClient);
		this.ajax.shippingMethods = new AjaxShippingMethods(ajaxClient);
		this.ajax.paymentMethods = new AjaxPaymentMethods(ajaxClient);
		this.ajax.paymentFormSettings = new AjaxPaymentFormSettings(ajaxClient);
		this.ajax.pages = new Pages(ajaxClient);
		this.ajax.marks = new Marks(ajaxClient);
		this.ajax.models = new Models(ajaxClient);
		this.ajax.years = new Years(ajaxClient);
		this.ajax.engines = new Engines(ajaxClient);
		this.ajax.fuels = new Fuels(ajaxClient);
		this.ajax.pcategories = new Pcategories(ajaxClient);
		this.ajax.xmlimporter = new Xmlimporter(ajaxClient);
		this.ajax.login = new Login(ajaxClient);
		this.ajax.register = new Register(ajaxClient);
		this.ajax.account = new Account(ajaxClient);

		// this.webstore = {};
		// this.webstore.account = new WebStoreAccount(webstoreClient);
		// this.webstore.services = new WebStoreServices(webstoreClient);
		// this.webstore.services.settings = new WebStoreServiceSettings(
		// 	webstoreClient
		// );
		// this.webstore.services.actions = new WebStoreServiceActions(webstoreClient);
		// this.webstore.services.logs = new WebStoreServiceLogs(webstoreClient);
	}

	static authorize = (baseUrl, email) => ApiClient.authorize(baseUrl, email);

	// static authorizeInWebStore = (email, adminUrl) =>
	// 	WebStoreClient.authorize(email, adminUrl);
}
