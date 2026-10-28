import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  let fixture: ComponentFixture<Home>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('shows green 30px heading when student passes', () => {
    const h1 = el.querySelector('h1')!;
    expect(h1.style.color).toBe('green');
    expect(h1.style.fontSize).toBe('30px');
  });

  it('turns heading red after toggling result', async () => {
    el.querySelector('button')!.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(el.querySelector('h1')!.style.color).toBe('red');
  });
});
