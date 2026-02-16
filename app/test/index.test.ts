import assert from "node:assert";
import { describe, mock } from "node:test";


// describe("Test cases for api testing",()=>{

//     test("Test case for feature testing for success with complete data",()=>{
//         const orderMockResponse = mock.fn(()=>{

//         });
//     });
// });

// describe("Test cases for News Api.",()=>{
//   test("Top headline api test case for success with complete data",()=>{
//       const topHeadlineMock = mock.fn(()=>{
//         return mockNewsSuccess;
//       });

//       const expectedTopHeadlineResult = mockNewsSuccess;
//       assert.strictEqual(topHeadlineMock.mock.callCount(),0);
//       const result = handleApiTopHeadlinesEndpoint();

//       assert.deepStrictEqual(result,expectedTopHeadlineResult);
//       assert.strictEqual(topHeadlineMock.mock.callCount(),1);
//   });

// });