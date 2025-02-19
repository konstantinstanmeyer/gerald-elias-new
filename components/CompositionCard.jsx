"use client"

import { useState } from "react";

// coditional logic map:
// if (links.length === 1), return the name as an <a> tag wrapped with <q> tag, allowing for "display: inline" (on the parent <h3>) to be inherited on the quotations
// possible alternative: wrap <a> tag with <p> tag container quotations, change <a> to be "display: inline-block" on the parent
// if (links.length === 2), return the composition name as a <p> tag with its innerHTML including the quotations, then display hyperlinks in "(part 1, part 2)" format
// if (linnks.length === 0), return <p> tag containing quotes around name, no hyperlinks
// ALL CASES: return "space" HTML entity(&nbsp;) after name, before <span>{keywords}</span> to avoid line-break depending on <h3>s' "margin: ...", avoiding rivers between text at line-start