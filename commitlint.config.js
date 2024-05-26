import  semantic_release from "@alanscodelog/semantic-release-config"
const types = [ ...new Set( //dedupe
	semantic_release.__types
	.map(_ => _.type)
	.filter(_ => _ !== undefined)
) ]

export default {
	"rules": {
		"header-max-length": [ 1, "always", 100 ],
		"type-enum": [ 2, "always", types ],
		// The rest pretty much match @commitlint/config-conventional, but I didn't want to add another dependency, also having all the rules in one place makes things clearer.
		'body-leading-blank': [ 2, 'always' ],
		'footer-leading-blank': [ 2, 'always' ],
		'scope-case': [ 2, 'always', 'lower-case' ],
		'subject-case': [ 2, 'never', [ 'sentence-case', 'start-case', 'pascal-case', 'upper-case' ] ],
		'subject-empty': [ 2, 'never' ],
		"subject-full-stop": [ 2, "never" ],
		'type-case': [ 2, 'always', 'lower-case' ],
		'type-empty': [ 2, 'never' ],
	}
}
