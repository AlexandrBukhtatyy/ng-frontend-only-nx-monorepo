import {Directive, EmbeddedViewRef, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {FeatureToggleService} from "../services/feature-toggle.service";
import {distinctUntilChanged} from "rxjs";

@Directive({
  selector: '[appFeatureToggle]',
  standalone: true,
})
export class FeatureToggleDirective implements OnInit, OnChanges {
  @Input('appFeatureToggle') key!: string;

  @Input()
  set appFeatureToggleThen(templateRef: TemplateRef<any> | null) {
    this.thenTemplateRef = templateRef;
    this.thenViewRef = null;
    this.updateView();
  }

  @Input()
  set appFeatureToggleElse(templateRef: TemplateRef<any> | null) {
    this.elseTemplateRef = templateRef;
    this.elseViewRef = null;
    this.updateView();
  }

  private thenTemplateRef: TemplateRef<any> | null = null;
  private elseTemplateRef: TemplateRef<any> | null = null;
  private thenViewRef: EmbeddedViewRef<any> | null = null;
  private elseViewRef: EmbeddedViewRef<any> | null = null;

  get isViewRendered(): boolean {
    return this.viewContainer.length > 0;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private featureToggleService: FeatureToggleService
  ) {
    this.thenTemplateRef = templateRef;
  }

  ngOnInit() {
    this.featureToggleService.onChanges$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.updateView());
  }

  ngOnChanges() {
    this.updateView();
  }

  private updateView() {
    const hasElseTemplateRef = !!this.elseTemplateRef;
    const isEnabled = this.featureToggleService.isEnabled(this.key);

    if (hasElseTemplateRef) {
      this.clearView();
      if (isEnabled) {
        this.createThenView();
      } else {
        this.createElseView();
      }
    } else {
      if (isEnabled && !this.isViewRendered) {
        this.createThenView();
      }
      if (!isEnabled && this.isViewRendered) {
        this.clearView();
      }
    }
  }

  private createThenView() {
    this.thenViewRef = this.thenTemplateRef
      ? this.viewContainer.createEmbeddedView(this.thenTemplateRef)
      : null;
  }

  private createElseView() {
    this.elseViewRef = this.elseTemplateRef
      ? this.viewContainer.createEmbeddedView(this.elseTemplateRef)
      : null;
  }

  private clearView() {
    this.viewContainer.clear();
    this.thenViewRef && (this.thenViewRef = null);
    this.elseViewRef && (this.elseViewRef = null);
  }
}
