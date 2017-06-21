const testHint = "test_hint";
const insertedContent = {
	PlatformApplicationArn: `some_stuff_${testHint}_and_stuff`,
	Attributes: {
		Platform: "testplatform",
	},
};
const expectedContent = {
	arn: insertedContent.PlatformApplicationArn,
	attributes: insertedContent.Attributes,
};

export default {
	testHint,
	insertedContent,
	expectedContent,
};
