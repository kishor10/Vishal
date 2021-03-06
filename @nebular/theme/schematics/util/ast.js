"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppModulePath = exports.isImportedInMainModule = void 0;
var core_1 = require("@angular-devkit/core");
var schematics_1 = require("@angular/cdk/schematics");
var ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
function isImportedInMainModule(tree, project, moduleName) {
    var appModulePath = getAppModulePath(tree, schematics_1.getProjectMainFile(project));
    return schematics_1.hasNgModuleImport(tree, appModulePath, moduleName);
}
exports.isImportedInMainModule = isImportedInMainModule;
function getAppModulePath(host, mainPath) {
    var moduleRelativePath = ng_ast_utils_1.findBootstrapModulePath(host, mainPath);
    var mainDir = core_1.dirname(mainPath);
    return core_1.normalize("/" + mainDir + "/" + moduleRelativePath + ".ts");
}
exports.getAppModulePath = getAppModulePath;
