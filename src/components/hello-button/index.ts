import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.module.scss";

const elementName = "hello-button";

export default (): void => defineComponent("hello-button", HelloButton);

export interface HelloButtonClick {
    label: string;
    date: string;
}

export class HelloButton extends LitElement {
    @property({ type: String }) label!: string;

    render(): TemplateResult {
        return html`
            <button @click=${this.handleClick}>${this.label}</button>
        `;
    }

    static get styles(): CSSResultGroup {
        // Styles can either be in this file (only css)
        // or imported from another file (scss in this case)
        return [...componentStyles, scopedStyles as never, css`
          // More styles here
        `];
    }

    private handleClick() {
        const event = new CustomEvent<HelloButtonClick>("helloClick", {
            detail: {
                label: this.label,
                date: new Date().toISOString(),
            },
        });
        this.dispatchEvent(event);
    }
}

export { elementName };
