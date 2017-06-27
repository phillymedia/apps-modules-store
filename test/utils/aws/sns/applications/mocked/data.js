const testHint = "test_hint";
const insertedContent = {
	PlatformApplicationArn: `some_stuff_${testHint}_and_stuff`,
	Attributes: {
		Platform: "testplatform",
	},
};
const insertedContents = [
	{
		PlatformApplicationArn: "some_other_thing",
		Attributes: {
			Platform: "testplatform2",
		},
	},
	{
		PlatformApplicationArn: "some_other_thing2",
		Attributes: {
			Platform: "testplatform3",
		},
	},
];
const expectedContent = {
	arn: insertedContent.PlatformApplicationArn,
	attributes: insertedContent.Attributes,
};

export default {
	testHint,
	insertedContent,
	insertedContents,
	expectedContent,
};
