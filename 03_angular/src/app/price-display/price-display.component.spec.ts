import { ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { PriceService } from '../price.service';
import { PriceDisplayComponent } from './price-display.component';

describe('PriceDisplayComponent', () => {
  let component: PriceDisplayComponent;
  let fixture: ComponentFixture<PriceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceDisplayComponent ]
    }).compileComponents();
  });

  it('flags as loading at first', () => {
    let priceServiceMock = jasmine.createSpyObj('PriceService', ['getPrice'])
    priceServiceMock.getPrice.and.returnValue(new Observable<number>());
    TestBed.overrideProvider(PriceService, { useValue: priceServiceMock });

    fixture = TestBed.createComponent(PriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.loading).toBe(true);
  });

  it('sets price when loaded', fakeAsync(() => {
    let priceServiceMock = jasmine.createSpyObj('PriceService', ['getPrice'])
    priceServiceMock.getPrice.and.returnValue(of(44.44));
    TestBed.overrideProvider(PriceService, { useValue: priceServiceMock });

    fixture = TestBed.createComponent(PriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    tick();
    expect(component.price).toBe(44.44);
    discardPeriodicTasks();
  }))

  it('updates price after 10 seconds', fakeAsync(() => {
    let priceServiceMock = jasmine.createSpyObj('PriceService', ['getPrice'])
    priceServiceMock.getPrice.and.returnValue(of(44.44));
    TestBed.overrideProvider(PriceService, { useValue: priceServiceMock });

    fixture = TestBed.createComponent(PriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // tick() acts to move the time forward in your fakeAsync context.
    // flush() acts to simulate the completion of time in that context by draining the macrotask queue till it is empty.
    // discardPeriodicTasks() "throws out" any remaining periodic tasks.
    
    tick(9000);
    expect(component.price).toBe(44.44);

    priceServiceMock.getPrice.and.returnValue(of(55.55));

    tick(10000);
    expect(component.price).toBe(55.55);
    discardPeriodicTasks();
  }))
});