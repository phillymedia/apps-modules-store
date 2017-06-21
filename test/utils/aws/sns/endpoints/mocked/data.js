const fakeHint = "test_hint";
const fakeApp = {
	PlatformApplicationArn: `some_stuff_${fakeHint}_and_stuff`,
	Attributes: {
		Platform: "testplatform",
	},
};

/**
 * An object for testing endpoint call returns.
 *
 * @property endpoint
 */
const endpointBad = "BadEndpoint1";

/**
 * A test endpoints array.
 *
 * @property endpointArray
 */
const endpointArray = [
	{
		EndpointArn: "FakeAppEndpoint1",
		Attributes: {
			PlatformApplicationArn: fakeApp.PlatformApplicationArn,
			Token: "FakeToken1",
			CustomUserData: "FakeUserData1",
			Enabled: true,
		},
	},
	{
		EndpointArn: "FakeAppEndpoint2",
		Attributes: {
			PlatformApplicationArn: "FakeAppArn1",
			Token: "FakeToken2",
			CustomUserData: "FakeUserData2",
			Enabled: true,
		},
	},
	{
		EndpointArn: "FakeAppEndpoint3",
		Attributes: {
			PlatformApplicationArn: "FakeAppArn2",
			Token: "FakeToken3",
			CustomUserData: "FakeUserData3",
			Enabled: true,
		},
	},
	{
		EndpointArn: "FakeAppEndpoint4",
		Attributes: {
			PlatformApplicationArn: "FakeAppArn2",
			Token: "FakeToken4",
			CustomUserData: "FakeUserData4",
			Enabled: true,
		},
	},
	{
		EndpointArn: "FakeAppEndpoint5",
		Attributes: {
			PlatformApplicationArn: "FakeAppArn2",
			Token: "FakeToken5",
			CustomUserData: "FakeUserData5",
			Enabled: false,
		},
	},
];

/**
 * An object for testing subscription call returns.
 *
 * @property protocol
 */
const token = endpointArray[0].Protocol;

/**
 * An object for testing subscription call returns.
 *
 * @property topic
 */
const application = endpointArray[0].Attributes.PlatformApplicationArn;

/**
 * An object for testing endpoints call returns.
 *
 * @property endpoint
 */
const endpoint = {
	EndpointArn: endpointArray[0].EndpointArn,
	Attributes: endpointArray[0].Attributes,
};

/**
 * An object for testing endpoint call returns.
 *
 * @property testEndpoint
 */
const testEndpoint = {
	arn: endpointArray[0].EndpointArn,
	attributes: endpointArray[0].Attributes,
};


/**
 * An object for testing endpoints call returns.
 *
 * @property endpoints
 */
const endpoints = {
	Endpoints: endpointArray,
};

/**
 * An object for testing endpoints call returns with a next token.
 *
 * @property endpointsWithNextToken
 */
const endpointsWithNextToken = {
	Endpoints: endpointArray,
	NextToken: "FakeNextToken",
};


// EXPORTS
// =============================================================================

export default {
	application,
	token,
	endpointBad,
	testEndpoint,
	endpoint,
	endpoints,
	endpointsWithNextToken,
};
