"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var lodash_1 = require("lodash");
var uri_decoder_1 = require("../uri-decoder");
var fs_exists_with_case_sync_1 = require("./fs-exists-with-case-sync");
function validateLinks(markdownLinks, opts) {
    var validatedLinks = lodash_1.map(markdownLinks, function (md) {
        var fileDir = path.dirname(path.join(opts.cwd, md.filepath));
        md.links = lodash_1.map(md.links, function (link) {
            var resolvedLinkPath = path.join(fileDir, uri_decoder_1.default(link.url));
            link.valid = fs_exists_with_case_sync_1.default(resolvedLinkPath);
            return link;
        });
        return md;
    });
    return validatedLinks;
}
exports.default = validateLinks;
