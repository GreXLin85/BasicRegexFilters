# Basic Regex Filters
Regex filters
# Usage
For import

    const RegexFilters = require("basicregexfilters");
Example usages

    const  RegexFilters = require("basicregexfilters");
    
    RegexFilters.RegexFilterTemplateForUsernames("Data") // Allows only A-Z a-z 0-9 - ! _ . @ -
    RegexFilters.RegexFilterTemplateForPasswords("Data") // Allows only A-Z a-z 0-9 - ! + % & / ( ) = ? _ . @ -
    
    //If you want to define a custom filter
    
    RegexFilters.CustomRegexFilter("Data","[Regex Filter]") // Regex Filter have default filter, if you are want to use default setting set it blank (Default : [A-Za-z0-9])

Example outputs

    const  RegexFilters = require("basicregexfilters");
    
    RegexFilters.RegexFilterTemplateForUsernames("GreX/Lin-85") // Output : GreXLin-85
    RegexFilters.RegexFilterTemplateForPasswords("GreX\Lin-85") // Output : GreXLin-85
    RegexFilters.CustomRegexFilter("Gr''X/Lin-85","[A-Za-z0-9-]") // Output : GrXLin-85
    RegexFilters.CustomRegexFilter("Gr''X/Lin-85") // Output : GrXLin85

