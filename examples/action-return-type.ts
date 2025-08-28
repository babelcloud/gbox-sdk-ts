import GboxSDK from '../src';

async function main() {
  const gboxSDK = new GboxSDK();
  const box = await gboxSDK.create({ type: 'android' });

  console.log(`Android box created: ${box.data.id}`);

  // Test 1: Basic click without screenshot options - should return ActionResult
  const result1 = await box.action.click({
    x: 100,
    y: 100,
  });
  console.log('Test 1 - Basic click:', result1.message);
  console.log('Test 1 - Has screenshot:', !!result1.screenshot);

  // Test 2: Click with screenshot: false - should return { message: string }
  const result2 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: false,
    },
  });
  console.log('Test 2 - Screenshot false:', result2.message);
  // @ts-expect-error - result2 should not have screenshot property when screenshot: false
  console.log(result2.screenshot);

  // Test 3: Click with screenshot: true - should return ActionResultWithScreenshot
  const result3 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: true,
    },
  });
  console.log('Test 3 - Screenshot true:', result3.message);
  console.log('Test 3 - Before URI:', result3.screenshot.before.uri);
  console.log('Test 3 - After URI:', result3.screenshot.after.uri);
  console.log('Test 3 - Trace URI:', result3.screenshot.trace.uri);

  // Test 4: Click with screenshot object - should return ActionResultWithScreenshot
  const result4 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: {
        delay: '500ms',
        outputFormat: 'base64',
        presignedExpiresIn: '30m',
      },
    },
  });
  console.log('Test 4 - Screenshot object:', result4.message);
  console.log('Test 4 - Before URI:', result4.screenshot.before.uri);
  console.log('Test 4 - After URI:', result4.screenshot.after.uri);
  console.log('Test 4 - Trace URI:', result4.screenshot.trace.uri);

  // Test 5: Click with screenshot phases ['before'] - should return specific shape
  const result5 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: {
        phases: ['before'],
        outputFormat: 'storageKey',
      },
    },
  });
  console.log('Test 5 - phases before:', result5.message);
  console.log('Test 5 - Before URI:', result5.screenshot.before.uri);
  // @ts-expect-error - should not have after property when phases is ['before']
  console.log(result5.screenshot.after.uri);
  // @ts-expect-error - should not have trace property when phases is ['before']
  console.log(result5.screenshot.trace.uri);

  // Test 6: Click with screenshot phases ['after'] - should return specific shape
  const result6 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: {
        phases: ['after'],
        outputFormat: 'base64',
      },
    },
  });
  console.log('Test 6 - phases after:', result6.message);
  console.log('Test 6 - After URI:', result6.screenshot.after.uri);
  // @ts-expect-error - should not have before property when phases is ['after']
  console.log(result6.screenshot.before.uri);
  // @ts-expect-error - should not have trace property when phases is ['after']
  console.log(result6.screenshot.trace.uri);

  // Test 7: Click with screenshot phases ['trace'] - should return specific shape
  const result7 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: {
        phases: ['trace'],
      },
    },
  });
  console.log('Test 7 - phases trace:', result7.message);
  console.log('Test 7 - Trace URI:', result7.screenshot.trace.uri);
  // @ts-expect-error - should not have before property when phases is ['trace']
  console.log(result7.screenshot.before.uri);
  // @ts-expect-error - should not have after property when phases is ['trace']
  console.log(result7.screenshot.after.uri);

  // Test 8: Click with screenshot phases ['before', 'after'] - should return specific shape
  const result8 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: {
        phases: ['before', 'after'],
        outputFormat: 'storageKey',
      },
    },
  });
  console.log('Test 8 - phases before,after:', result8.message);
  console.log('Test 8 - Before URI:', result8.screenshot.before.uri);
  console.log('Test 8 - After URI:', result8.screenshot.after.uri);
  // @ts-expect-error - should not have trace property when phases is ['before', 'after']
  console.log(result8.screenshot.trace.uri);

  // Test 9: Click with screenshot phases ['before', 'trace'] - should return specific shape
  const result9 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: {
        phases: ['before', 'trace'],
      },
    },
  });
  console.log('Test 9 - phases before,trace:', result9.message);
  console.log('Test 9 - Before URI:', result9.screenshot.before.uri);
  console.log('Test 9 - Trace URI:', result9.screenshot.trace.uri);
  // @ts-expect-error - should not have after property when phases is ['before', 'trace']
  console.log(result9.screenshot.after.uri);

  // Test 10: Click with screenshot phases ['after', 'trace'] - should return specific shape
  const result10 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: {
        phases: ['after', 'trace'],
      },
    },
  });
  console.log('Test 10 - phases after,trace:', result10.message);
  console.log('Test 10 - After URI:', result10.screenshot.after.uri);
  console.log('Test 10 - Trace URI:', result10.screenshot.trace.uri);
  // @ts-expect-error - should not have before property when phases is ['after', 'trace']
  console.log(result10.screenshot.before.uri);

  // Test 11: Click with screenshot phases ['before', 'after', 'trace'] - should return ActionResultWithScreenshot
  const result11 = await box.action.click({
    x: 100,
    y: 100,
    options: {
      screenshot: {
        phases: ['before', 'after', 'trace'],
      },
    },
  });
  console.log('Test 11 - phases all:', result11.message);
  console.log('Test 11 - Before URI:', result11.screenshot.before.uri);
  console.log('Test 11 - After URI:', result11.screenshot.after.uri);
  console.log('Test 11 - Trace URI:', result11.screenshot.trace.uri);

  // Test 12: Click by natural language without screenshot - should return ActionResult
  const result12 = await box.action.click({
    target: 'login button',
  });
  console.log('Test 12 - Natural language:', result12.message);
  console.log('Test 12 - Has screenshot:', !!result12.screenshot);

  // Test 13: Click by natural language with screenshot: true - should return ActionResultWithScreenshot
  const result13 = await box.action.click({
    target: 'login button',
    options: {
      screenshot: true,
    },
  });
  console.log('Test 13 - Natural language with screenshot:', result13.message);
  console.log('Test 13 - Before URI:', result13.screenshot.before.uri);
  console.log('Test 13 - After URI:', result13.screenshot.after.uri);
  console.log('Test 13 - Trace URI:', result13.screenshot.trace.uri);

  // Test 14: Click by natural language with screenshot phases ['before'] - should return specific shape
  const result14 = await box.action.click({
    target: 'login button',
    options: {
      screenshot: {
        phases: ['before'],
      },
    },
  });
  console.log('Test 14 - Natural language phases before:', result14.message);
  console.log('Test 14 - Before URI:', result14.screenshot.before.uri);
  // @ts-expect-error - should not have after property when phases is ['before']
  console.log(result14.screenshot.after.uri);
  // @ts-expect-error - should not have trace property when phases is ['before']
  console.log(result14.screenshot.trace.uri);

  // Test 15: Click with button option - should return ActionResult
  const result15 = await box.action.click({
    x: 100,
    y: 100,
    button: 'right',
  });
  console.log('Test 15 - Right button click:', result15.message);
  console.log('Test 15 - Has screenshot:', !!result15.screenshot);

  // Test 16: Click with double option - should return ActionResult
  const result16 = await box.action.click({
    x: 100,
    y: 100,
    double: true,
  });
  console.log('Test 16 - Double click:', result16.message);
  console.log('Test 16 - Has screenshot:', !!result16.screenshot);

  // Test 17: Click with deprecated includeScreenshot: false - should return { message: string }
  const result17 = await box.action.click({
    x: 100,
    y: 100,
    includeScreenshot: false,
  });
  console.log('Test 17 - Deprecated includeScreenshot false:', result17.message);
  console.log('Test 17 - Has screenshot:', !!result17.screenshot);

  // Test 18: Click with deprecated includeScreenshot: true - should return ActionResult
  const result18 = await box.action.click({
    x: 100,
    y: 100,
    includeScreenshot: true,
  });
  console.log('Test 18 - Deprecated includeScreenshot true:', result18.message);
  console.log('Test 18 - Has screenshot:', !!result18.screenshot);

  // Test 19: Click with deprecated outputFormat - should return ActionResult
  const result19 = await box.action.click({
    x: 100,
    y: 100,
    outputFormat: 'storageKey',
  });
  console.log('Test 19 - Deprecated outputFormat:', result19.message);
  console.log('Test 19 - Has screenshot:', !!result19.screenshot);

  // Test 20: Click with deprecated presignedExpiresIn - should return ActionResult
  const result20 = await box.action.click({
    x: 100,
    y: 100,
    presignedExpiresIn: '30m',
  });
  console.log('Test 20 - Deprecated presignedExpiresIn:', result20.message);
  console.log('Test 20 - Has screenshot:', !!result20.screenshot);

  // Test 21: Click with deprecated screenshotDelay - should return ActionResult
  const result21 = await box.action.click({
    x: 100,
    y: 100,
    screenshotDelay: '500ms',
  });
  console.log('Test 21 - Deprecated screenshotDelay:', result21.message);
  console.log('Test 21 - Has screenshot:', !!result21.screenshot);

  console.log('All click overload tests completed!');
}

main();
