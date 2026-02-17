import { Reporter } from '@playwright/test/reporter';

class CustomReporter implements Reporter {
  onTestBegin(test) {
    console.log(`START: ${test.title}`);
  }

  onTestEnd(test, result) {
    console.log(`END: ${test.title} -> ${result.status}`);
  }
}

export default CustomReporter;
