import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreguntaPage } from './preguntasecreta.page';

describe('PreguntaPage', () => {
  let component: PreguntaPage;
  let fixture: ComponentFixture<PreguntaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
