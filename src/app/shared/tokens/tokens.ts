import { InjectionToken } from "@angular/core";
import { environment } from "@environment/environment";

export const baseUrlConfigLoading = () => {
    if (!environment.production && environment.staging) {
        return environment.baseStagingUrl;
    } else if (!environment.production && !environment.staging) {
        return environment.baseUrl;
    }
    return environment.baseProdUrl;
};

export const BASE_URL = new InjectionToken<string>('BASE_URL');