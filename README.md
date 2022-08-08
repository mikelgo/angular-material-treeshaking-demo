## Branches
* without-any-imports -> that is the starting point
* only-required-imports -> imports only the needed MatButtonModule into the project
* with-unused-imports -> besides the required MatButtonModule some arbitrary other material modules are imported

After switching branches execute a `nx build` and compare the bundle size of main.js or just look at 
the results below

## Results

### Without importing anything (starting point)

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.ad1889446a1a3fbb.js      | main          | 171.09 kB |                46.63 kB
styles.dab3a5f2260a7f6c.css   | styles        |  74.07 kB |                 7.66 kB
polyfills.4414cecb2e7564c5.js | polyfills     |  33.08 kB |                10.63 kB
runtime.3513eecd58f81c99.js   | runtime       |   1.05 kB |               604 bytes

                              | Initial Total | 279.29 kB |                65.51 kB


### Importing only needed modules (branch only-required-imports)

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.d8b0ded0bc464b21.js      | main          | 220.57 kB |                59.02 kB
styles.dab3a5f2260a7f6c.css   | styles        |  74.07 kB |                 7.66 kB
polyfills.4414cecb2e7564c5.js | polyfills     |  33.08 kB |                10.63 kB
runtime.3513eecd58f81c99.js   | runtime       |   1.05 kB |               604 bytes

                              | Initial Total | 328.76 kB |                77.90 kB


### Importing unused modules (branch with-unused-imports)
Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.f9790754cbb7f999.js      | main          | 281.19 kB |                71.35 kB
styles.dab3a5f2260a7f6c.css   | styles        |  74.07 kB |                 7.66 kB
polyfills.4414cecb2e7564c5.js | polyfills     |  33.08 kB |                10.63 kB
runtime.3513eecd58f81c99.js   | runtime       |   1.05 kB |               604 bytes

                              | Initial Total | 389.38 kB |                90.23 kB
