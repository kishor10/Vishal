import { NbRoleProvider } from './role.provider';
import { NbAclService } from './acl.service';
import { Observable } from 'rxjs';
/**
 * Access checker service.
 *
 * Injects `NbRoleProvider` to determine current user role, and checks access permissions using `NbAclService`
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbAccessChecker {
    protected roleProvider: NbRoleProvider;
    protected acl: NbAclService;
    constructor(roleProvider: NbRoleProvider, acl: NbAclService);
    /**
     * Checks whether access is granted or not
     *
     * @param {string} permission
     * @param {string} resource
     * @returns {Observable<boolean>}
     */
    isGranted(permission: string, resource: string): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbAccessChecker, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbAccessChecker>;
}

//# sourceMappingURL=access-checker.service.d.ts.map