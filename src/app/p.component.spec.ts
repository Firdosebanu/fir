import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PAppComponent } from '../app/p.component';

beforeEachProviders(() => [PAppComponent]);

describe('App: P', () => {
  it('should create the app',
      inject([PAppComponent], (app: PAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'p works!\'',
      inject([PAppComponent], (app: PAppComponent) => {
    expect(app.title).toEqual('p works!');
  }));
});
