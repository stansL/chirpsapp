import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpsComponent } from './chirps.component';

describe('ChirpsComponent', () => {
  let component: ChirpsComponent;
  let fixture: ComponentFixture<ChirpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
