import { UrlSegment } from "@angular/router";

export interface RedirectToLoginState {
    needsLogin: boolean;
    afterLoginRedirect: string;
}
