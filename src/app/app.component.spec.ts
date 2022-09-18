import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { screen } from '@testing-library/angular';
import { myTestRender } from './shared/spec-helpers/my-test-render';

describe('AppComponent', () => {
  it(`should have as title 'HELLO'`, async () => {
    await setUp();
    screen.getByText('HELLO');
  });
});

async function setUp() {
  const testRender = await myTestRender(AppComponent, {
    declarations: [],
    providers: [],
    imports: [RouterTestingModule],
    detectChanges: false,
  });

  return { ...testRender };
}
