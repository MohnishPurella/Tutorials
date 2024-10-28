import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaHomeComponent } from './java-home.component';

describe('JavaHomeComponent', () => {
  let component: JavaHomeComponent;
  let fixture: ComponentFixture<JavaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
