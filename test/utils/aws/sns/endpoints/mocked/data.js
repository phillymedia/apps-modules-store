/**
 * An object for testing endpoint call returns.
 *
 * @property endpoint
 */
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
const endpointArnBad = "BadEndpoint1";

/**
 * A test endpoints array.
 *
 * @property endpointArray
 */
const endpointArray = [
  {
    arn: "FakeAppEndpoint1",
    attributes: {
      PlatformApplicationArn: fakeApp.PlatformApplicationArn,
      Token: "FakeToken1",
      CustomUserData: "FakeUserData1",
      Enabled: true,
    },
  },
  {
    arn: "FakeAppEndpoint2",
    attributes: {
      PlatformApplicationArn: "FakeAppArn1",
      Token: "FakeToken2",
      CustomUserData: "FakeUserData2",
      Enabled: true,
    },
  },
  {
    arn: "FakeAppEndpoint3",
    attributes: {
      PlatformApplicationArn: "FakeAppArn2",
      Token: "FakeToken3",
      CustomUserData: "FakeUserData3",
      Enabled: true,
    },
  },
  {
    arn: "FakeAppEndpoint4",
    attributes: {
      PlatformApplicationArn: "FakeAppArn2",
      Token: "FakeToken4",
      CustomUserData: "FakeUserData4",
      Enabled: true,
    },
  },
  {
    arn: "FakeAppEndpoint5",
    attributes: {
      PlatformApplicationArn: "FakeAppArn2",
      Token: "FakeToken5",
      CustomUserData: "FakeUserData5",
      Enabled: false,
    },
  },
];

/**
 * An array for testing endpoint call returns.
 *
 * @property insertedContents
 */
const insertedContents = [
  {
    EndpointArn: "FakeAppEndpoint6",
    Attributes: {
      PlatformApplicationArn: "FakeAppArn2",
      Token: "FakeToken6",
      CustomUserData: "FakeUserData6",
      Enabled: true,
    },
  },
  {
    EndpointArn: "FakeAppEndpoint7",
    Attributes: {
      PlatformApplicationArn: "FakeAppArn2",
      Token: "FakeToken7",
      CustomUserData: "FakeUserData6",
      Enabled: true,
    },
  },
];

/**
 * An object for testing endpoint call returns.
 *
 * @property protocol
 */
const token = endpointArray[0].Protocol;

/**
 * An object for testing endpoints call returns.
 *
 * @property application
 */
const application = endpointArray[0].attributes.PlatformApplicationArn;

/**
 * An object for testing endpoints call returns.
 *
 * @property endpoint
 */
const endpoint = {
  EndpointArn: endpointArray[0].arn,
  Attributes: endpointArray[0].attributes,
};

/**
 * An object for testing endpoint call returns.
 *
 * @property testEndpoint
 */
const testEndpoint = {
  arn: endpointArray[0].arn,
  attributes: endpointArray[0].attributes,
};


/**
 * An object for testing endpoints call returns.
 *
 * @property endpoints
 */
const endpoints = endpointArray;


// EXPORTS
// =============================================================================

export default {
  insertedContents,
  application,
  token,
  endpointArnBad,
  testEndpoint,
  endpoint,
  endpoints,
};
