
/**
 * An object for testing subscription call returns.
 *
 * @property topic
 */
const token = "FakeToken1";

/**
 * An object for testing subscription call returns.
 *
 * @property endpoint
 */
const endpointBad = "BadEndpoint1";


/**
 * An object for testing subscription call returns.
 *
 * @property endpoint
 */
const username = "User1";

/**
 * A test subscription array.
 *
 * @property subArray
 */
const subArray = [
	{
		TopicArn: "FakeTopic1",
		SubscriptionArn: "FakeSubscription1",
		Protocol: "FakeProtocol1",
		Endpoint: "FakeAppEndpoint1",
	},
	{
		TopicArn: "FakeTopic1",
		SubscriptionArn: "FakeSubscription2",
		Protocol: "FakeProtocol1",
		Endpoint: "FakeAppEndpoint2",
	},
	{
		TopicArn: "FakeTopic1",
		SubscriptionArn: "FakeSubscription3",
		Protocol: "FakeProtocol2",
		Endpoint: "FakeEmailEndpoint1",
	},
];

/**
 * An object for testing subscription calls.
 *
 * @property insertedSubscription
 */
const insertedSubscription = {
	TopicArn: "FakeTopic1",
	SubscriptionArn: "FakeSubscription4",
	Protocol: "FakeProtocol1",
	Endpoint: "FakeAppEndpoint2",
	CustomUserData: username,
};

/**
 * An object for testing subscription call returns.
 *
 * @property protocol
 */
const protocol = insertedSubscription.Protocol;

/**
 * An object for testing subscription call returns.
 *
 * @property topic
 */
const topic = insertedSubscription.TopicArn;

/**
 * An object for testing subscription call returns.
 *
 * @property endpoint
 */
const endpoint = insertedSubscription.Endpoint;

/**
 * An object for testing subscription call returns.
 *
 * @property testSubscription
 */
const testSubscription = {
	arn: insertedSubscription.SubscriptionArn,
	topic: insertedSubscription.TopicArn,
	endpoint: insertedSubscription.Endpoint,
	protocol: insertedSubscription.Protocol,
	username: insertedSubscription.CustomUserData,
};

/**
 * An object for testing subscription call returns.
 *
 * @property subscription
 */
const subscription = {
	SubscriptionArn: insertedSubscription.SubscriptionArn,
};


/**
 * An object for testing subscription call returns.
 *
 * @property subscriptions
 */
const subscriptions = {
	Subscriptions: subArray,
};

/**
 * An object for testing subscription call returns with a next token.
 *
 * @property subscriptionsWithNextToken
 */
const subscriptionsWithNextToken = {
	Subscriptions: subArray,
	NextToken: "FakeNextToken",
};


// EXPORTS
// =============================================================================

export default {
	token,
	topic,
	username,
	endpoint,
	endpointBad,
	protocol,
	insertedSubscription,
	insertedSubscriptions: subArray,
	testSubscription,
	subscription,
	subscriptions,
	subscriptionsWithNextToken,
};
