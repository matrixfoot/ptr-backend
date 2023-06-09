const AccessControl = require("accesscontrol");

const ac = new AccessControl();

exports.roles = (function() {
ac.grant("basic")
 .readOwn("profile")
 .updateOwn("profile")
 .readOwn("condidate")
 .updateOwn("condidate")
 .readOwn("contact")
 .updateOwn("contact")
 .readOwn("carousel")
 .updateOwn("carousel")
 .readOwn("event")
 .updateOwn("event")
 .readOwn("decfiscmens")
 .updateOwn("decfiscmens")
 .readOwn("deccomptabilite")
 .updateOwn("deccomptabilite")
 .readOwn("relation")
 .updateOwn("relation")
ac.grant("supervisor")
 .extend("basic")
 .readAny("profile")
 .readAny("condidate")
 .readAny("contact")
 .readAny("carousel")
 .readAny("event")
 .readAny("decfiscmens")
 .readAny("deccomptabilite")
 .readAny("relation")

 .updateAny("profile")
 .updateAny("condidate")
 .updateAny("contact")
 .updateAny("carousel")
 .updateAny("event")
 .updateAny("decfiscmens")
 .updateAny("deccomptabilite")
 .updateAny("relation")

ac.grant("admin")
 .extend("basic")
 .extend("supervisor")
 .updateAny("profile")
 .deleteAny("profile")
 .updateAny("condidate")
 .deleteAny("condidate")
 .updateAny("contact")
 .deleteAny("contact")
 .updateAny("carousel")
 .deleteAny("carousel")
 .updateAny("event")
 .deleteAny("event")
 .updateAny("decfiscmens")
 .deleteAny("decfiscmens")
 .updateAny("deccomptabilite")
 .deleteAny("deccomptabilite")
 .updateAny("relation")
 .deleteAny("relation")
return ac;
})();