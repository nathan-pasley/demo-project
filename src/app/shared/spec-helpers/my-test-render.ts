import { render } from '@testing-library/angular';
import { Type } from '@angular/core';
import { RenderComponentOptions } from '@testing-library/angular/src/lib/models';
import userEvent from '@testing-library/user-event';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

export async function myTestRender<ComponentType>(
  component: Type<ComponentType>,
  renderOptions?: RenderComponentOptions<ComponentType>,
  mockTime?: Date
) {
  let user = userEvent.setup();
  if (mockTime) {
    jest.useFakeTimers();
    jest.setSystemTime(mockTime);
    user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    afterEach(() => {
      // jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });
  }
  const { fixture } = await render(component, renderOptions);
  const harnessLoader = TestbedHarnessEnvironment.loader(fixture);
  return {
    fixture,
    user,
    harnessLoader,
  };
}
