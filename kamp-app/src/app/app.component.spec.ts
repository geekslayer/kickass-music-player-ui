import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { PlayerComponent } from './player/player.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        TopmenuComponent,
        PlayerComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  // let Routes = [
  //   { path: '', component: PlayerComponent },
  // ];

  // RouterTestingModule.withRoutes(Routes);

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kamp-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('kamp-app');
  });

  // it('should render app-player object', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
    
  //   const compiled = fixture.debugElement.nativeElement;
    
  //   fixture.detectChanges();
  //   console.log(compiled.querySelector('.media-content').innerHTML);
  //   expect(compiled.querySelector('.media-content').innerHTML).toContain('app-player');
  // });
});