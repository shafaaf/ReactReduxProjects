## React Snapshot example

https://www.digitalocean.com/community/tutorials/how-to-write-snapshot-tests-for-react-components-with-jest

- In the event of a failed test, it can mean two things. If the test results are unexpected, you may need to address an issue with your component. If the test results are expected, it may mean that the snapshot tests need to be updated to support the new output.
- Snapshot testing is meant to be one of many different testing tools. Therefore, you may still need to write tests for your actions and reducers.
- Alternatively, if you have Jest installed globally, you can run jest --updateSnapshot or jest -u.
- If the changes are not expected, you caught the error before the change was deployed and can now address the error.
- If the changes were expected, you would need to update your snapshot tests to get them to pass correctly.
