
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
		Endpoint: "FakeAppEndpoint1",
	},
	{
		TopicArn: "FakeTopic1",
		SubscriptionArn: "FakeSubscription4",
		Protocol: "FakeProtocol2",
		Endpoint: "FakeEmailEndpoint1",
	},
];

/**
 * An object for testing subscription call returns.
 *
 * @property protocol
 */
const protocol = subArray[0].Protocol;

/**
 * An object for testing subscription call returns.
 *
 * @property topic
 */
const topic = subArray[0].TopicArn;

/**
 * An object for testing subscription call returns.
 *
 * @property endpoint
 */
const endpoint = subArray[0].Endpoint;

/**
 * An object for testing subscription call returns.
 *
 * @property testSubscription
 */
const testSubscription = {
	arn: subArray[0].SubscriptionArn,
	topic: subArray[0].TopicArn,
	endpoint: subArray[0].Endpoint,
	protocol: subArray[0].Protocol,
};

/**
 * An object for testing subscription call returns.
 *
 * @property subscription
 */
const subscription = {
	SubscriptionArn: subArray[0].SubscriptionArn,
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
	endpoint,
	endpointBad,
	protocol,
	testSubscription,
	subscription,
	subscriptions,
	subscriptionsWithNextToken,
};
