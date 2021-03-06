import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { pageStyles } from "~src/global";
import { getUsername } from "~services/name-service";
import { HelloButtonClick } from "~components/hello-button";
import scopedStyles from "./styles.module.scss";

import("~components/hello-text").then(f => f.default());
import("~components/hello-button").then(f => f.default());

@customElement("test-page")
export default class TestPage extends LitElement {
    @state() username: string | null = null;

    render(): TemplateResult {
        return html`
            <div class="container">
                <hello-text sub="Welcome User">${this.username}</hello-text>
                <hello-button @helloClick=${this.buttonClick} label="Say Hello!"></hello-button>
            </div>
        `;
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.username = getUsername();
        // eslint-disable-next-line no-console
        if (!PRODUCTION) console.log("Everything is working!");
    }

    // eslint-disable-next-line class-methods-use-this
    buttonClick(e: HelloButtonClick): void {
        console.log("Clicked:", e);
    }

    static get styles(): CSSResultGroup {
        // Styles can either be in this file (only css)
        // or imported from another file (scss in this case)
        return [...pageStyles, scopedStyles as never, css`
          // More styles here
        `];
    }
}
