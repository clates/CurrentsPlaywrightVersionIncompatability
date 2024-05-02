const currentsConfig = {
  ciBuildId: "ci-build-id", // 📖 https://currents.dev/readme/guides/ci-build-id
  recordKey: "secret record key", // 📖 https://currents.dev/readme/guides/record-key
  projectId: "project id", // get one at https://app.currents.dev
};

const config = {
  testDir: "test",
  reporter: process.env.CURRENTS
    ? [["@currents/playwright", currentsConfig]]
    : [["dot"]],
  use: {
    // ...
    trace: "on",
    video: "on",
    screenshot: "on",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
};

export default config;
