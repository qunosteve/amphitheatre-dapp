import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const amphiTheme: CustomThemeConfig = {
    name: 'amphiTheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "234 213 194",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-tertiary-500)",
		"--on-secondary": "var(--color-tertiary-500)",
		"--on-tertiary": "var(--color-secondary-500)",
		"--on-success": "var(--color-secondary-500)",
		"--on-warning": "var(--color-secondary-500)",
		"--on-error": "var(--color-secondary-500)",
		"--on-surface": "var(--color-secondary-500)",
		// =~= Theme Colors  =~=
		// primary | #EEC07A 
		"--color-primary-50": "252 246 235", // #fcf6eb
		"--color-primary-100": "252 242 228", // #fcf2e4
		"--color-primary-200": "251 239 222", // #fbefde
		"--color-primary-300": "248 230 202", // #f8e6ca
		"--color-primary-400": "243 211 162", // #f3d3a2
		"--color-primary-500": "238 192 122", // #EEC07A
		"--color-primary-600": "214 173 110", // #d6ad6e
		"--color-primary-700": "179 144 92", // #b3905c
		"--color-primary-800": "143 115 73", // #8f7349
		"--color-primary-900": "117 94 60", // #755e3c
		// secondary | #EAD5C2 
		"--color-secondary-50": "252 249 246", // #fcf9f6
		"--color-secondary-100": "251 247 243", // #fbf7f3
		"--color-secondary-200": "250 245 240", // #faf5f0
		"--color-secondary-300": "247 238 231", // #f7eee7
		"--color-secondary-400": "240 226 212", // #f0e2d4
		"--color-secondary-500": "234 213 194", // #EAD5C2
		"--color-secondary-600": "211 192 175", // #d3c0af
		"--color-secondary-700": "176 160 146", // #b0a092
		"--color-secondary-800": "140 128 116", // #8c8074
		"--color-secondary-900": "115 104 95", // #73685f
		// tertiary | #254B66 
		"--color-tertiary-50": "222 228 232", // #dee4e8
		"--color-tertiary-100": "211 219 224", // #d3dbe0
		"--color-tertiary-200": "201 210 217", // #c9d2d9
		"--color-tertiary-300": "168 183 194", // #a8b7c2
		"--color-tertiary-400": "102 129 148", // #668194
		"--color-tertiary-500": "37 75 102", // #254B66
		"--color-tertiary-600": "33 68 92", // #21445c
		"--color-tertiary-700": "28 56 77", // #1c384d
		"--color-tertiary-800": "22 45 61", // #162d3d
		"--color-tertiary-900": "18 37 50", // #122532
		// success | #236326 
		"--color-success-50": "222 232 222", // #dee8de
		"--color-success-100": "211 224 212", // #d3e0d4
		"--color-success-200": "200 216 201", // #c8d8c9
		"--color-success-300": "167 193 168", // #a7c1a8
		"--color-success-400": "101 146 103", // #659267
		"--color-success-500": "35 99 38", // #236326
		"--color-success-600": "32 89 34", // #205922
		"--color-success-700": "26 74 29", // #1a4a1d
		"--color-success-800": "21 59 23", // #153b17
		"--color-success-900": "17 49 19", // #113113
		// warning | #3A2959 
		"--color-warning-50": "225 223 230", // #e1dfe6
		"--color-warning-100": "216 212 222", // #d8d4de
		"--color-warning-200": "206 202 214", // #cecad6
		"--color-warning-300": "176 169 189", // #b0a9bd
		"--color-warning-400": "117 105 139", // #75698b
		"--color-warning-500": "58 41 89", // #3A2959
		"--color-warning-600": "52 37 80", // #342550
		"--color-warning-700": "44 31 67", // #2c1f43
		"--color-warning-800": "35 25 53", // #231935
		"--color-warning-900": "28 20 44", // #1c142c
		// error | #632623 
		"--color-error-50": "232 222 222", // #e8dede
		"--color-error-100": "224 212 211", // #e0d4d3
		"--color-error-200": "216 201 200", // #d8c9c8
		"--color-error-300": "193 168 167", // #c1a8a7
		"--color-error-400": "146 103 101", // #926765
		"--color-error-500": "99 38 35", // #632623
		"--color-error-600": "89 34 32", // #592220
		"--color-error-700": "74 29 26", // #4a1d1a
		"--color-error-800": "59 23 21", // #3b1715
		"--color-error-900": "49 19 17", // #311311
		// surface | #25272E 
		"--color-surface-50": "222 223 224", // #dedfe0
		"--color-surface-100": "211 212 213", // #d3d4d5
		"--color-surface-200": "201 201 203", // #c9c9cb
		"--color-surface-300": "168 169 171", // #a8a9ab
		"--color-surface-400": "102 104 109", // #66686d
		"--color-surface-500": "37 39 46", // #25272E
		"--color-surface-600": "33 35 41", // #212329
		"--color-surface-700": "28 29 35", // #1c1d23
		"--color-surface-800": "22 23 28", // #16171c
		"--color-surface-900": "18 19 23", // #121317
		
	}
}