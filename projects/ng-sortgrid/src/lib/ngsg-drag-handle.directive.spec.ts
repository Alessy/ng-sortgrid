import { NgsgDragHandleDirective } from './ngsg-drag-handle.directive';

describe('NgsgDragHandleDirective', () => {
  let sut: NgsgDragHandleDirective;

  const elementRef = { nativeElement: {} } as any;

  beforeEach(() => {
    sut = new NgsgDragHandleDirective(
      elementRef
    );
  });

  it('hould create an instance', () => {
    expect(sut).toBeTruthy();
  });
});
