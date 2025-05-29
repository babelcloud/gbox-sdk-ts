import { GboxClient } from './client';
import { GboxSDK } from './wrapper/client';

const client = new GboxClient();

client.v1.boxes.createAndroid({
  type: 'android',
  config: {
    labels: { FOO: 'bar' },
  },
});

const sdk = new GboxSDK();

async function test() {
  const box = await sdk.create({
    type: 'android',
  });
  console.log(box.type);

  box.command;
  box.start;
}

test();
