import aws from "./aws/index.js";

export default {
  mocked: {
    aws: {
      sns: {
        applications: {
          data: aws.sns.applications.mocked.data,
        },
        endpoints: {
          data: aws.sns.endpoints.mocked.data,
        },
        subscriptions: {
          data: aws.sns.subscriptions.mocked.data,
        },
        topics: {
          data: aws.sns.topics.mocked.data,
        },
      },
    },
  },
};
