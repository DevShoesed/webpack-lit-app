import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
// import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.module.scss";

export default (): void => defineComponent("hello-view", HelloView);

export class HelloView extends LitElement {
    render(): TemplateResult {
        return html`
            <div class="hello-view">
                <slot name="title"></slot>
                <slot name="body"></slot>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        // Styles can either be in this file (only css)
        // or imported from another file (scss in this case)
        return [...componentStyles, scopedStyles as never, css`
          // More styles here
        `];
    }
}
