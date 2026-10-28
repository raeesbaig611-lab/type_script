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

  it('applies "success" class when student passes', () => {
    const headings = el.querySelectorAll('h1');
    expect(headings[0].classList).toContain('success');
    expect(headings[1].textContent).toContain('Student Pass');
  });

  it('applies "fail" class after toggling result', async () => {
    el.querySelector('button')!.click();
    fixture.detectChanges();
    await fixture.whenStable();
    const headings = el.querySelectorAll('h1');
    expect(headings[0].classList).toContain('fail');
    expect(headings[1].textContent).toContain('Student Fail');
  });
});
