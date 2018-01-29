const testHint = "test_hint";
const insertedContent = {
  TopicArn: `some_stuff_${testHint}_and_stuff`,
  Attributes: {
    DisplayName: "Some Stuff",
  },
};
const insertedContents = [
  {
    TopicArn: "some_other_thing",
    Attributes: {
      Platform: "Some Other Thing",
    },
  },
  {
    TopicArn: "yet_another_thing",
    Attributes: {
      Platform: "Yet Another Thing",
    },
  },
];
const expectedContent = {
  arn: insertedContent.TopicArn,
  attributes: insertedContent.Attributes,
};

export default {
  testHint,
  insertedContent,
  insertedContents,
  expectedContent,
};
