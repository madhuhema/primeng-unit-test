import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  // test the button click
  it('should call onLogOutButtonClick function', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'onLogOutButtonClick');
      const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
      fixture.whenStable().then(() => {
      expect(app.onLogOutButtonClick()).toHaveBeenCalled();
    });
  }));
});
